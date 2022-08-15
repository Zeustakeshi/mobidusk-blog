import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useField } from "formik";
import React, { useState, useEffect } from "react";
import { Dropdown, DropdownField } from "../../component/dropdown";
import { Field } from "../../component/form";
import { db } from "../../firebase-app/firebase-config";

const ProfilePostCategories = ({ name }) => {
    const [field] = useField(name);
    const categories = [
        "font-end",
        "back-end",
        "công nghệ",
        "kiến thức",
        "lập trình",
        "nghệ thuật",
        "văn hóa",
        "phong cảnh",
        "kĩ năng sống",
        "thú cưng",
        "thiên nhiên",
        "tâm sự",
    ];

    return (
        <>
            <div className="font-semibold text-[22px] text-black">Category</div>
            <Dropdown>
                <DropdownField.Label label="Choose your category" />
                <DropdownField.Selection className="max-h-[212px]">
                    {categories?.length > 0 &&
                        categories.map((category) => (
                            <DropdownField.Item
                                key={category}
                                clickCloseDropDown={false}
                                clickActiveLabel={false}
                                className="p-0"
                            >
                                <Field.Checkbox
                                    name="categories"
                                    type="secondary"
                                    value={category}
                                    className="w-full p-3 gap-10"
                                    size={20}
                                >
                                    <div className="w-full ">{category}</div>
                                </Field.Checkbox>
                            </DropdownField.Item>
                        ))}
                </DropdownField.Selection>
            </Dropdown>
            <div className="grid grid-cols-3 gap-3">
                {field.value &&
                    field.value.slice(0, 6).map((category) => {
                        return (
                            <span
                                key={category}
                                className="bg-green-bright text-secondary font-semibold rounded-xl p-2 text-center"
                            >
                                {category}
                            </span>
                        );
                    })}
            </div>
        </>
    );
};

export default ProfilePostCategories;
