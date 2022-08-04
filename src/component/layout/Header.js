import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";

const Header = ({ headerTags, headerRightItem }) => {
    return (
        <header className="fixed z-50 left-0 top-0 w-full bg-white py-5 px-20 shadow-style-3 transition-all">
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
                                        ` block p-3 ${
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
                {headerRightItem && (
                    <div className="flex justify-start items-center gap-4">
                        {headerRightItem}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
