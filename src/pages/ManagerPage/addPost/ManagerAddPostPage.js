import React, { useEffect, useState } from "react";
import { Form, Field } from "../../../component/form";
import ManagerLayout from "../../../component/layout/ManagerLayout";
import * as Yup from "yup";
import slugify from "slugify";
import "react-toastify/dist/ReactToastify.css";
import useFirebaseImage from "../../../hooks/useFirebaseImage";
import { toast } from "react-toastify";
import {
    addDoc,
    collection,
    getDocs,
    orderBy,
    query,
    Timestamp,
} from "firebase/firestore";
import { db } from "../../../firebase-app/firebase-config";
import { Dropdown, DropdownField } from "../../../component/dropdown";
import { useAuth } from "../../../context/authContext";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const initialFormValues = {
    title: "",
    slug: "",
    image: "",
    categories: ["kiến thức"],
};

const ManagerAddPostPage = () => {
    const [categories, setCategories] = useState([]);

    const { handleUploadImage } = useFirebaseImage();
    const { userInfo } = useAuth();

    useEffect(() => {
        document.title = "Add New Post";
        const getCategories = async () => {
            const categoriesRef = collection(db, "categories");
            const q = query(categoriesRef, orderBy("name"));
            const querySnapshot = await getDocs(q);
            const result = [];
            querySnapshot.forEach((doc) => {
                result.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setCategories(result);
        };
        getCategories();
    }, []);
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

                            await addDoc(collection(db, "posts"), {
                                ...values,
                                authorID: userInfo.uid,
                                time: Timestamp.fromDate(new Date()),
                            });

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
                {({ values }) => (
                    <div className="relative w-full grid grid-cols-2 gap-5">
                        <Field.Input
                            label="Title"
                            name="title"
                            placeholder="Enter your title"
                            type="text"
                            wrapperClassName="gap-5"
                            errorClassName="text-base"
                        />
                        <Field.Input
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
                            <Field.ImageUpload
                                size={{
                                    width: "100%",
                                    height: 300,
                                }}
                                name="image"
                            />
                        </div>
                        <div className="flex flex-col gap-5 p-[10px] w-full">
                            <div className="font-semibold text-[20px] text-black">
                                Category
                            </div>
                            <Dropdown>
                                <DropdownField.Label label="Choose your category" />
                                <DropdownField.Selection className="max-h-[212px]">
                                    {categories?.length > 0 &&
                                        categories.map((category) => (
                                            <DropdownField.Item
                                                key={category.id}
                                                clickCloseDropDown={false}
                                                clickActiveLabel={false}
                                                className="p-0"
                                            >
                                                <Field.Checkbox
                                                    name="categories"
                                                    type="secondary"
                                                    value={category.name}
                                                    className="w-full p-3 gap-10"
                                                    size={20}
                                                >
                                                    <div className="w-full ">
                                                        {category.name}
                                                    </div>
                                                </Field.Checkbox>
                                            </DropdownField.Item>
                                        ))}
                                </DropdownField.Selection>
                            </Dropdown>
                            <div className="grid grid-cols-3 gap-3">
                                {values.categories &&
                                    values.categories
                                        .slice(0, 6)
                                        .map((catefory) => {
                                            return (
                                                <span
                                                    key={catefory}
                                                    className="bg-green-bright text-secondary font-semibold rounded-xl p-2 text-center"
                                                >
                                                    {catefory}
                                                </span>
                                            );
                                        })}
                            </div>
                        </div>
                    </div>
                )}
            </Form>
        </ManagerLayout>
    );
};

export default ManagerAddPostPage;
