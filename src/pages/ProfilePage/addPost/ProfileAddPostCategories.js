import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useField } from "formik";
import React, { useState, useEffect } from "react";
import { Dropdown, DropdownField } from "../../../component/dropdown";
import { Field } from "../../../component/form";
import { db } from "../../../firebase-app/firebase-config";

const ProfileAddPostCategories = ({ name }) => {
    const [field] = useField(name);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
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
        <>
            <div className="font-semibold text-[22px] text-black">Category</div>
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
                {field.value &&
                    field.value.slice(0, 6).map((catefory) => {
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
        </>
    );
};

export default ProfileAddPostCategories;
