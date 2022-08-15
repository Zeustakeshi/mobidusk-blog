import React from "react";
import { Field, useField } from "formik";
import ToggleButton from "../ToggleButton";

const InputCheckboxField = ({
    value,
    name,
    id,
    children,
    size = 36,
    colorActive = "#2EBAC1",
    type = "primary",
    className = "",
    positonCheckbox = "left",
}) => {
    return (
        <label
            className={`w-full h-full flex gap-4 cursor-pointer ${className}`}
        >
            {positonCheckbox === "right" && children}
            <Field
                className="hidden"
                type="checkbox"
                value={value}
                id={id || name}
                name={name}
            >
                {({ field }) => {
                    return (
                        <div className=" flex items-center justify-center">
                            {type === "primary" ? (
                                <ToggleButton
                                    {...field}
                                    isActive={field.checked}
                                    size={size}
                                    colorActive={colorActive}
                                />
                            ) : (
                                <label
                                    style={{
                                        width: size,
                                        height: size,
                                        borderColor: colorActive || "#2EBAC1",
                                        borderRadius: size / 10,
                                    }}
                                    className={` group inline-block cursor-pointer w-full h-full relative border-[2px] overflow-hidden`}
                                >
                                    <input
                                        type="checkbox"
                                        {...field}
                                        className="hidden"
                                    />
                                    <span
                                        style={{
                                            background: field.checked
                                                ? colorActive || "#2EBAC1"
                                                : "",
                                            fontSize: size / 1.2,
                                        }}
                                        className={`${
                                            field.checked
                                                ? `inline-block `
                                                : "hidden"
                                        } z-[8] transition-all  flex justify-center items-center absolute top-[50%] left-[50%]  -translate-x-2/4 -translate-y-2/4 w-full h-full text-white text-sm `}
                                    >
                                        ✔
                                    </span>
                                </label>
                            )}
                        </div>
                    );
                }}
            </Field>
            {positonCheckbox === "left" && children}
        </label>
    );
};

export default InputCheckboxField;
