import React from "react";
import { NavLink } from "react-router-dom";

const PostCategory = ({ children, className = "", type = "primary", to }) => {
    return (
        <div className={`text-sm font-semibold mb-[10px] ${className} `}>
            <NavLink
                to={to ? `/category/${to}` : "/"}
                className={`block px-[10px] py-[4px] rounded-[12px] text-gray6B ${
                    type === "primary" ? "bg-[#F3EDFF] " : "bg-white"
                }`}
            >
                {children}
            </NavLink>
        </div>
    );
};
export default PostCategory;
