import React from "react";

const ToggleButton = ({
    onClick,
    isActive,
    size = 36,
    colorActive = "",
    className = "",
    ...props
}) => {
    return (
        <label
            className={`flex items-center rounded-full cursor-pointer transition-all w-full ${className} bg-slate-200`}
            style={{
                padding: size / 6,
                width: size * 2 + (size / 6) * 2,
                background: `${isActive ? colorActive || "#2EBAC1" : ""}`,
            }}
        >
            <input type="checkbox" className="hidden" {...props} />
            <div
                style={{
                    width: size,
                    height: size,
                }}
                className={`transition-all rounded-full bg-white shadow-style-3 ${
                    isActive ? "translate-x-[100%]" : ""
                }`}
            ></div>
        </label>
    );
};

export default ToggleButton;
