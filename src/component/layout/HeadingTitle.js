import React from "react";

const HeadingTitle = ({
    children,
    className = "text-[#3A1097]",
    decorationWidth = 40,
    decorationHeight = 4,
    decorationClassName = "",
}) => {
    return (
        <div
            className={`mb-[15px] py-2 relative text-[28px] font-semibold  ${className}`}
        >
            <span
                className={`absolute bg-[#00D1ED] top-0 left-0 ${decorationClassName}`}
                style={{
                    width: `${decorationWidth}px`,
                    height: `${decorationHeight}px`,
                }}
            ></span>
            {children}
        </div>
    );
};

export default HeadingTitle;
