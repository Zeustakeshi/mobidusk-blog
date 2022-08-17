import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useApp } from "../../../context/appContext";
import { IconMenu } from "../../icons";
import Logo from "../../Logo";
import MenuResponsive from "../MenuResponsive";

const Header = ({ headerTags, headerRightItem }) => {
    const { isMobile } = useApp();
    const [show, setShow] = useState(false);
    const ref = useRef();
    return (
        <header className="fixed z-50 left-0 top-0 w-full bg-white py-3 px-2 md:py-5 md:px-20 shadow-style-3 transition-all">
            <div
                className={`realtive flex justify-between items-center page-container w-full`}
            >
                {isMobile ? (
                    <>
                        <span
                            ref={ref}
                            className={`w-[40px] h-[40px] p-2 flex justify-center items-center`}
                            onClick={() => setShow(true)}
                        >
                            <IconMenu />
                        </span>
                        <MenuResponsive
                            containerRef={ref}
                            show={show}
                            setShow={setShow}
                        >
                            <div className="flex flex-col justify-start items-center">
                                <div className="flex justify-center items-center mb-5">
                                    <Logo size={40} />
                                </div>
                                <ul className="w-full flex flex-col justify-center items-center gap-3">
                                    {headerTags.map((item) => (
                                        <li
                                            key={item.title}
                                            className="font-semibold transition-all hover:text-primary cursor-pointer w-full text-center"
                                        >
                                            <NavLink
                                                to={item.url}
                                                className={({ isActive }) =>
                                                    ` block p-3 ${
                                                        isActive
                                                            ? "text-primary bg-green-bright"
                                                            : ""
                                                    }`
                                                }
                                            >
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </MenuResponsive>
                        <div className="text-[18px] font-bold text-primary p-3">
                            <NavLink to="/">Mobydusk Blog</NavLink>
                        </div>
                    </>
                ) : (
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
                )}
                {headerRightItem && headerRightItem}
            </div>
        </header>
    );
};

export default Header;
