import React from "react";

const HeadingTitle = ({
    children,
    className = "",
    decorationWidth = 40,
    decorationHeight = 4,
    decorationClassName = "",
    ...props
}) => {
    return (
        <div
            className={`text-[#3A1097] mb-[15px] py-2 relative text-xl md:text-[28px] font-bold  md:font-semibold  ${className}`}
            {...props}
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
