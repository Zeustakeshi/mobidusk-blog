import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import Button from "../Button";

const headerTags = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Blog",
        url: "/blog",
    },
    {
        title: "Contact",
        url: "/contact",
    },
];

const HeaderManager = () => {
    return (
        <header className="fixed z-50 left-0 top-0 w-full bg-white py-5 px-20 shadow-style-3">
            <div className="flex justify-between items-center page-container">
                <div className="flex justify-center items-center gap-5 ">
                    <Logo size={60}></Logo>
                    <ul className="flex justify-center items-center gap-3">
                        {headerTags.map((item) => (
                            <li
                                key={item.title}
                                className="font-semibold transition-all hover:text-primary cursor-pointer"
                            >
                                <NavLink
                                    to={item.url}
                                    className={({ isActive }) =>
                                        `block p-3 ${
                                            isActive ? "text-primary" : ""
                                        }`
                                    }
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <Button
                    type="button"
                    className="max-w-[180px] text-xl h-[60px]"
                    // to="/sign-up"
                >
                    New post
                </Button>
            </div>
        </header>
    );
};

export default HeaderManager;
