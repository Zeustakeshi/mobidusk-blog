import React from "react";

const PostMeta = ({ time, authorName, className = "text-xs font-medium " }) => {
    return (
        <div
            className={` text-[#6B6B6B] flex justify-center items-center gap-2 ${className}`}
        >
            <span>{time}</span>
            <span
                style={{
                    background: "currentColor",
                }}
                className="p-[2px] rounded-full inline-block"
            ></span>
            <span>{authorName}</span>
        </div>
    );
};

export default PostMeta;
