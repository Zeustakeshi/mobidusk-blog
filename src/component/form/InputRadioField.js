import { Field } from "formik";
import React from "react";

const InputRadioField = ({
    children,
    name,
    value,
    className = "",
    id,
    size = 20,
    colorActive,
    positionRadio = "left",
}) => {
    return (
        <label
            className={`w-full h-full flex justify-center items-center gap-4 cursor-pointer ${className}`}
        >
            {positionRadio === "right" && children}
            <Field
                className="hidden"
                type="radio"
                value={value}
                id={id || name}
                name={name}
            >
                {({ field }) => {
                    return (
                        <div className="flex-1 flex items-center justify-center">
                            <label
                                style={{
                                    width: size,
                                    height: size,
                                    border: `${size / 10}px  solid  ${
                                        colorActive || "#2EBAC1"
                                    }`,
                                }}
                                className="relative cursor-pointer rounded-full"
                            >
                                <div
                                    className={`absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[70%] h-[70%] rounded-[inherit]`}
                                    style={{
                                        background: field.checked
                                            ? colorActive || "#2EBAC1"
                                            : "",
                                    }}
                                ></div>
                                <input
                                    type="radio"
                                    {...field}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    );
                }}
            </Field>
            {positionRadio === "left" && children}
        </label>
    );
};

export default InputRadioField;
