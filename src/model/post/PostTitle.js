import React from "react";
import { NavLink } from "react-router-dom";

const PostTitle = ({ className = "", children, limitLine = 4, to = "/" }) => {
    return (
        <h3
            style={{
                ["--line"]: limitLine,
            }}
            className={`${className} content-overflow-limitline`}
        >
            <NavLink to={to} className="block">
                {children}
            </NavLink>
        </h3>
    );
};

export default PostTitle;
