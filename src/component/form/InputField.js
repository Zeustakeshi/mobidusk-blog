import { ErrorMessage, Field } from "formik";
import { forwardRef, useState } from "react";
import { IconEye } from "../icons";
import PropTypes from "prop-types";

const InputField = ({
    label,
    type,
    id,
    name,
    placeholder = "",
    className = "",
    wrapperClassName = "",
    labelClassName = "",
    iconClassName = "",
    inputClassName = "",
    errorClassName = "",
    Icon,
    handleClickIcon = () => {},
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const hasIcon = !!Icon || isPassword;
    return (
        <div
            className={`flex flex-col gap-2 p-[10px] w-full ${wrapperClassName}`}
        >
            {label && (
                <label
                    className={`font-semibold text-[20px] text-black ${labelClassName}`}
                    htmlFor={id || name}
                >
                    {label}
                </label>
            )}
            <div
                className={`${
                    hasIcon
                        ? "flex justify-start items-center border border-[#999999] focus-within:border-[#00B4AA]"
                        : ""
                } w-full relative rounded-lg bg-green-bright bg-opacity-50 focus-within:bg-transparent ${className} transition-all`}
            >
                <Field
                    type={showPassword ? "text" : type}
                    name={name}
                    id={id || name}
                    placeholder={placeholder}
                    className={`w-full px-[25px] py-4 rounded-lg border outline-none ${
                        !hasIcon
                            ? "border-[#999999] focus:border-[#00B4AA]"
                            : "border-none  pr-2"
                    } bg-transparent transition-all placeholder:text-[#C4C4C4] ${inputClassName}`}
                    autoComplete="off"
                    {...props}
                />
                {hasIcon && (
                    <span
                        onClick={() => {
                            if (isPassword) {
                                setShowPassword((show) => !show);
                            } else {
                                handleClickIcon();
                            }
                        }}
                        className={`p-4 bg-transparent flex justify-center items-center text-[#C4C4C4] cursor-pointer transition-all ${iconClassName}`}
                    >
                        {isPassword ? <IconEye open={!showPassword} /> : Icon}
                    </span>
                )}
            </div>
            <div
                className={`ml-2 text-red-500 text-sm font-semibold ${errorClassName}`}
            >
                <ErrorMessage name={name}></ErrorMessage>
            </div>
        </div>
    );
};

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    iconClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    Icon: PropTypes.node,
    handleClickIcon: PropTypes.func,
};

export default InputField;
