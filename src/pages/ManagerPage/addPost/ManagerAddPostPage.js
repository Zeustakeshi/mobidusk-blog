import React from "react";
import { Form, InputField, InputImageUpLoad } from "../../../component/form";
import ManagerLayout from "../../../component/layout/ManagerLayout";
import DropDown from "../../../component/dropdown/Dropdown";
import * as Yup from "yup";
import slugify from "slugify";
import "react-toastify/dist/ReactToastify.css";
import useFirebaseImage from "../../../hooks/useFirebaseImage";
import { toast } from "react-toastify";
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
const initialFormValues = {
    title: "",
    slug: "",
    image: "",
    category: "kiến thức",
};

const ManagerAddPostPage = () => {
    const { handleUploadImage } = useFirebaseImage();

    return (
        <ManagerLayout title="Add New Post">
            <Form
                initialValues={initialFormValues}
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
                    toast.promise(
                        async () => {
                            values.slug = slugify(values.slug || values.title);
                            values.image = await handleUploadImage(
                                values.image
                            );

                            console.log(values);
                            action.setSubmitting(false);
                            action.resetForm(initialFormValues);
                        },
                        {
                            pending: "Plase wait ....",
                            success: "Add post is success",
                            error: "Add post is fail",
                        }
                    );
                }}
                name="Add Post"
                className="items-center gap-10 flex flex-col w-full pb-[100px]"
            >
                {(formik) => {
                    return (
                        <div className="relative w-full grid grid-cols-2 gap-5">
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
                    );
                }}
            </Form>
        </ManagerLayout>
    );
};

export default ManagerAddPostPage;
