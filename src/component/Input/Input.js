import PropTypes from "prop-types";
const Input = ({
    type,
    id,
    name,
    placeholder = "",
    className = "",
    children,
    iconClassName = "",
    inputClassName = "",
    iconClick,
    ...props
}) => {
    const hasIcon = !!children;
    return (
        <div
            className={`${
                hasIcon
                    ? "flex justify-start items-center border border-[#999999] rounded-lg focus-within:border-[#00B4AA]"
                    : ""
            } w-full relative ${className} `}
        >
            <input
                {...props}
                type={type}
                name={name}
                id={id || name}
                placeholder={placeholder}
                className={` w-full h-full rounded-lg border outline-none ${
                    !hasIcon
                        ? "border-[#999999] focus:border-[#00B4AA] "
                        : "border-none pr-0"
                }  transition-all placeholder:text-[#C4C4C4] px-[25px] py-4 ${inputClassName}`}
                autoComplete="off"
            />
            {hasIcon && (
                <span
                    className={` p-4 flex justify-center items-center text-[#C4C4C4] cursor-pointer transition-all ${iconClassName}`}
                    onClick={iconClick}
                >
                    {children}
                </span>
            )}
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    iconClick: PropTypes.func,
};

export default Input;
