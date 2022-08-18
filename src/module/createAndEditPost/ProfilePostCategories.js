import { useField } from "formik";
import React from "react";
import { Dropdown, DropdownField } from "../../component/dropdown";
import { Field } from "../../component/form";
import { categories } from "../../config";

const ProfilePostCategories = ({ name }) => {
    const [field] = useField(name);
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
