import React, { useState } from "react";
import { Form, InputField, InputImageUpLoad } from "../../../component/form";
import ManagerLayout from "../../../component/layout/ManagerLayout";
import DropDown from "../../../component/dropdown/Dropdown";
import * as Yup from "yup";
import slugify from "slugify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";

const categoryItems = [
    "kiến thức",
    "Kĩ năng",
    "Du lịch",
    "Xe",
    "Con người",
    "Công nghệ",
    "Kinh tế",
    "Khoa Học",
    "Nghệ thuật",
    "Khám phá",
    "Khác",
];

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const ManagerAddPostPage = () => {
    const handleUploadImage = (file) => {
        if (!file) return;
        const storage = getStorage();
        const storageRef = ref(storage, "images/" + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                toast.success(`uploading ${Math.ceil(progress)}%`, {
                    autoClose: 900,
                });
                // switch (snapshot.state) {
                //     case "paused":
                //         console.log("Upload is paused");
                //         break;
                //     case "running":
                //         console.log("Upload is running");
                //         break;
                //     default:
                //         console.log("Nothing at all");
                // }
            },
            (error) => {
                switch (error.code) {
                    case "storage/unauthorized":
                        // User doesn't have permission to access the object
                        toast.error(
                            "You doesn't have permission to access the object"
                        );
                        break;
                    case "storage/canceled":
                        // User canceled the upload
                        toast.error("You canceled the upload");
                        break;

                    // ...

                    case "storage/unknown":
                        // Unknown error occurred, inspect error.serverResponse
                        toast.error(
                            "Unknown error occurred, inspect error.serverResponse"
                        );
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                });
            }
        );
    };
    return (
        <ManagerLayout title="Add New Post">
            <Form
                initialValues={{
                    title: "",
                    slug: "",
                    image: "",
                    category: "kiến thức",
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .min(10, "Title must contain 10 characters or more")
                        .required("Title is required field"),
                    slug: Yup.string(),
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
                    values.slug = slugify(values.slug || values.title);
                    console.log(values);
                    handleUploadImage(values.image);
                    action.setSubmitting(false);
                }}
                name="Add Post"
                className="items-center gap-10 flex flex-col w-full pb-[100px]"
            >
                {(formik) => (
                    <div className="w-full grid grid-cols-2 gap-5">
                        <InputField
                            label="Title"
                            name="title"
                            placeholder="Enter your title"
                            type="text"
                            wrapperClassName="gap-5"
                            errorClassName="text-base"
                        />
                        <InputField
                            label="Slug"
                            name="slug"
                            placeholder="Enter your slug"
                            type="text"
                            wrapperClassName="gap-5"
                            errorClassName="text-base"
                        />
                        <div className="flex flex-col gap-5 p-[10px] w-full">
                            <div className="font-semibold text-[20px] text-black">
                                Image
                            </div>
                            <InputImageUpLoad
                                size={{
                                    width: "100%",
                                    height: 300,
                                }}
                                formik={formik}
                                name="image"
                            />
                        </div>
                        <div className="flex flex-col gap-5 p-[10px] w-full">
                            <div className="font-semibold text-[20px] text-black">
                                Category
                            </div>
                            <DropDown
                                initItem="KIến thức"
                                items={categoryItems}
                                contentClassName="max-h-[230px]"
                                handleChooseItem={(item) => {
                                    formik.setFieldValue("category", item);
                                }}
                            />
                        </div>
                    </div>
                )}
            </Form>
        </ManagerLayout>
    );
};

export default ManagerAddPostPage;
