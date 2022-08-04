import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ size = 140 }) => {
    return (
        <NavLink
            to="/"
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}
            className="inline-block overflow-hidden"
        >
            <img
                srcSet="/logo.png"
                alt=""
                className="w-full h-full object-cover"
            />
        </NavLink>
    );
};

export default Logo;
