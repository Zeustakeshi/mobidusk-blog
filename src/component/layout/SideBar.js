import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ navigates, children, className }) => {
    return (
        <div
            className={`fixed top-[50%] -translate-y-2/4 z-20 shadow-style-6 rounded-2xl w-full max-w-[350px] py-5 min-h-[60vh] ${className} flex flex-col justify-start`}
        >
            <ul className={`w-full flex flex-col py-4`}>
                {navigates.map((item) => (
                    <li key={item.title} className="w-full rounded-xl">
                        <NavLink
                            className={({ isActive }) =>
                                ` rounded-[inherit] w-full h-full px-5 py-4 hover:text-secondary hover:bg-[#F1FBF7] flex justify-start items-center gap-5 font-semibold transition-all ${
                                    isActive
                                        ? "text-secondary bg-[#F1FBF7]"
                                        : "text-[#808191]"
                                }`
                            }
                            to={item.to}
                        >
                            <span>{item.icon}</span>
                            <span>{item.title}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
            {children && (
                <div className="relative">
                    <span className="absolute top-0 left-[50%] -translate-x-2/4 w-[80%] h-[2px] bg-slate-100"></span>
                    {children}
                </div>
            )}
        </div>
    );
};

// const sideBar

export default SideBar;
