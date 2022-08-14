import React from "react";
import { NavLink } from "react-router-dom";

const PostTitle = ({ className = "", children, limitLine = 4, to }) => {
    return (
        <h3
            style={{
                ["--line"]: limitLine,
            }}
            className={`${className} content-overflow-limitline leading-relaxed`}
        >
            {to ? (
                <NavLink to={`/post/${to}`} className="block">
                    {children}
                </NavLink>
            ) : (
                children
            )}
        </h3>
    );
};

export default PostTitle;
