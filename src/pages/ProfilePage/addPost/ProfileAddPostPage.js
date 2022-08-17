import React, { useEffect } from "react";
import { Form, Field } from "../../../component/form";
import ProfileLayout from "../../../component/layout/ProfileLayout";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import useFirebaseImage from "../../../hooks/useFirebaseImage";
import { toast } from "react-toastify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase-app/firebase-config";
import { useAuth } from "../../../context/authContext";
import ProfilePostCategories from "../../../module/createAndEditPost/ProfilePostCategories";
import ProfilePostEditor from "../../../module/createAndEditPost/ProfilePostEditor";
import slugify from "slugify";
import { useApp } from "../../../context/appContext";
import NotFoundPage from "../../Not-found/NotFoundPage";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const initialFormValues = {
    title: "",
    image: "",
    categories: ["font-end"],
    isPublic: true,
    content: "",
};

const ProfileAddPostPage = () => {
    const { handleUploadImage } = useFirebaseImage();
    const { userInfo } = useAuth();
    const { isMobile } = useApp();

    useEffect(() => {
        document.title = "Add New Post";
    }, []);

    if (isMobile) return <NotFoundPage />;

    return (
        <ProfileLayout title="Add New Post">
            <Form
                initialValues={initialFormValues}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .min(10, "Title must contain 10 characters or more")
                        .required("Title is required field"),
                    image: Yup.mixed()
                        .nullable()
                        .required("Image file is a required field")
                        .test(
                            "FILE_SIZE",
                            "Uploaded image file is too big",
                            (value) =>
                                !value || (value && value.size <= 1024 * 1204)
                        )
                        .test(
                            "FILE_FORMAT",
                            "Uploaded image file has unsupported format",
                            (value) =>
                                !value ||
                                (value &&
                                    SUPPORTED_FORMATS.includes(value?.type))
                        ),
                })}
                onSubmit={(values, action) => {
                    toast.promise(
                        async () => {
                            values.image = await handleUploadImage(
                                values.image
                            );
                            try {
                                await addDoc(collection(db, "posts"), {
                                    ...values,
                                    searchValue: values.title.toLowerCase(),
                                    status: "approve",

                                    authorID: userInfo.uid,
                                    categories: values.categories.map(
                                        (category, index) => {
                                            return {
                                                id: index,
                                                name: category,
                                                slug: slugify(category, {
                                                    lower: true,
                                                }),
                                            };
                                        }
                                    ),
                                    time: serverTimestamp(),
                                });
                            } catch (error) {
                                console.log(error);
                            }

                            action.setSubmitting(false);
                            action.resetForm(initialFormValues);
                        },
                        {
                            pending: "Plase wait ....",
                            success: "Create post is success",
                            error: "Create post is fail",
                        }
                    );
                }}
                name="Add Post"
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
        </ProfileLayout>
    );
};

export default ProfileAddPostPage;
