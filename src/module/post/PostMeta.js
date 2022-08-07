import React from "react";
import { NavLink } from "react-router-dom";

const PostMeta = ({
    time,
    authorName,
    className = "text-base font-medium ",
    to,
    color,
}) => {
    return (
        <div
            style={
                color && {
                    color: color,
                }
            }
            className={` text-[#6B6B6B] flex justify-center items-center gap-2 ${className}`}
        >
            <span>{time}</span>
            <span
                style={{
                    background: "currentColor",
                }}
                className="p-[2px] rounded-full inline-block"
            ></span>
            <NavLink to={to ? `/user/${to}` : "/"}>{authorName}</NavLink>
        </div>
    );
};

export default PostMeta;
