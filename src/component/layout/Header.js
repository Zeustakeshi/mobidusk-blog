import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import Input from "../Input/Input";
import { IconSearch } from "../icons";
import Button from "../Button";
import { useAuth } from "../../context/authContext";

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

const Header = () => {
    const { userInfo } = useAuth();

    return (
        <header className="fixed z-10 left-0 top-0 w-full bg-white py-5 px-20 shadow-style-3">
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
                <div className="flex justify-start items-center gap-4">
                    <Input
                        name="search"
                        type="text"
                        placeholder="Search posts..."
                        className="max-w-[300px] h-[60px]"
                        inputClassName=" placeholder: text-base px-5 py-3"
                    >
                        <IconSearch />
                    </Input>
                    {!userInfo ? (
                        <Button
                            type="button"
                            className="max-w-[180px] text-base h-[60px]"
                            to="/sign-up"
                        >
                            Sign Up
                        </Button>
                    ) : (
                        <NavLink to="/manager/post">
                            {userInfo.displayName}
                        </NavLink>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
