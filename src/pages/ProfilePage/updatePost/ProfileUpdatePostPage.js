import {
    doc,
    onSnapshot,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import slugify from "slugify";
import * as Yup from "yup";
import { Field, Form } from "../../../component/form";
import ProfileLayout from "../../../component/layout/ProfileLayout";
import LoadingSpin from "../../../component/LoadingSpin";
import { useApp } from "../../../context/appContext";
import { db } from "../../../firebase-app/firebase-config";
import useFIrebaseImage from "../../../hooks/useFirebaseImage";
import ProfilePostCategories from "../../../module/createAndEditPost/ProfilePostCategories";
import ProfilePostEditor from "../../../module/createAndEditPost/ProfilePostEditor";
import NotFoundPage from "../../Not-found/NotFoundPage";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const ProfileUpdatePostPage = () => {
    const { handleUploadImage } = useFIrebaseImage();
    const { postID } = useParams();
    const [initialFormValues, setInitialFormValues] = useState({});
    useEffect(() => {
        if (!postID) return;
        const ref = doc(db, "posts", postID);
        const unsub = onSnapshot(ref, (doc) => {
            const result = doc.data();
            setInitialFormValues({
                title: result.title,
                image: result.image,
                categories: result.categories,
                isPublic: result.isPublic,
                content: result.content,
            });
        });
        return unsub;
    }, []);

    useEffect(() => {
        document.title = "Update Post";
    }, []);
    const { isMobile } = useApp();
    if (isMobile) return <NotFoundPage />;
    return (
        <ProfileLayout title="Update Post">
            {!initialFormValues.title ? (
                <div className="w-full h-[50vh] flex justify-center items-center">
                    <LoadingSpin color="#23BB86" borderSize={8} size={100} />
                </div>
            ) : (
                <Form
                    initialValues={initialFormValues}
                    validationSchema={Yup.object({
                        title: Yup.string()
                            .min(10, "Title must contain 10 characters or more")
                            .required("Title is required field"),
                        image:
                            typeof image === "obj" &&
                            Yup.mixed()
                                .nullable()
                                .required("Image file is a required field")
                                .test(
                                    "FILE_SIZE",
                                    "Uploaded image file is too big",
                                    (value) =>
                                        !value ||
                                        (value && value.size <= 1024 * 1204)
                                )
                                .test(
                                    "FILE_FORMAT",
                                    "Uploaded image file has unsupported format",
                                    (value) =>
                                        !value ||
                                        (value &&
                                            SUPPORTED_FORMATS.includes(
                                                value?.type
                                            ))
                                ),
                    })}
                    onSubmit={(values, action) => {
                        if (
                            JSON.stringify(values) ===
                            JSON.stringify(initialFormValues)
                        ) {
                            action.setSubmitting(false);
                            return;
                        }

                        toast.promise(
                            async () => {
                                if (typeof values.image === "object") {
                                    try {
                                        values.image = await handleUploadImage(
                                            values.image
                                        );
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }
                                try {
                                    const docRef = doc(db, "posts", postID);
                                    await updateDoc(docRef, {
                                        ...values,
                                        searchValue: values.title.toLowerCase(),
                                        time: serverTimestamp(),
                                    });
                                } catch (error) {
                                    console.log(error);
                                }

                                action.setSubmitting(false);
                            },
                            {
                                pending: "Plase wait ....",
                                success: "Update is success",
                                error: "Update is fail",
                            }
                        );
                    }}
                    name="Update"
                    className="items-center gap-10 flex flex-col w-full pb-[100px]"
                    buttonSubmitClassName="max-w-[300px] text-xl font-semibold"
                >
                    <div className="relative w-full grid grid-cols-2 gap-5">
                        <Field.Input
                            label="Title"
                            name="title"
                            placeholder="Enter your title"
                            type="text"
                            labelClassName="text-[22px] font-semibold"
                            wrapperClassName="gap-5 col-span-2 "
                            errorClassName="text-base"
                        />

                        <div className="flex flex-col gap-5 p-[10px] w-full">
                            <div className="font-semibold text-[22px] text-black">
                                Image
                            </div>
                            <Field.ImageUpload
                                size={{
                                    width: "100%",
                                    height: 300,
                                }}
                                name="image"
                                className="rounded-3xl"
                            />
                        </div>
                        <div className="flex flex-col gap-5 p-[10px] w-full">
                            <ProfilePostCategories name="categories" />
                        </div>
                        <ProfilePostEditor />
                        <Field.Checkbox
                            name="isPublic"
                            positonCheckbox="right"
                            size={25}
                            className="items-center justify-center col-span-2 p-8"
                        >
                            <div className="font-semibold text-xl">
                                This post will be public
                            </div>
                        </Field.Checkbox>
                    </div>
                </Form>
            )}
        </ProfileLayout>
    );
};

export default ProfileUpdatePostPage;
