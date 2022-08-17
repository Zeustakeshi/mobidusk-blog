import { signOut } from "firebase/auth";
import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useApp } from "../../context/appContext";
import { useAuth } from "../../context/authContext";
import { auth } from "../../firebase-app/firebase-config";
import { IconLogOut } from "../icons";
import Image from "../Image";
import MenuResponsive from "./MenuResponsive";

const avatarNavigates = [
    {
        title: "Dashboard",
        url: "/dashboard",
    },
    {
        title: "Post",
        url: "/post",
    },
    {
        title: "User",
        url: "/user",
    },
];

const AvatarHeader = () => {
    const { isMobile } = useApp();
    const { userInfo } = useAuth();
    const avatarRef = useRef();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    if (!userInfo.displayName) return;
    return (
        <div className="flex w-[40px] h-[40px]  md:w-[58px] md:h-[58px] rounded-full overflow-hidden cursor-pointer">
            {isMobile ? (
                <div className="w-full h-full">
                    {userInfo.photoURL ? (
                        <Image
                            src={userInfo.photoURL}
                            className=""
                            ref={avatarRef}
                            onClick={() => setShow(true)}
                        />
                    ) : (
                        <div className="w-full h-full  flex justify-center items-center font-bold bg-green-bright text-primary">
                            {userInfo.displayName[0].toUpperCase()}
                        </div>
                    )}

                    <MenuResponsive
                        containerRef={avatarRef}
                        show={show}
                        setShow={setShow}
                        directionClassName="move-left"
                    >
                        <div className="">
                            <h3 className="text-center mb-4 text-xl font-bold text-primary p-3">
                                Profile
                            </h3>
                            <ul className="w-full flex flex-col justify-center items-center gap-3">
                                {avatarNavigates.map((item) => (
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
                            <div className="mt-2 pt-4 border border-transparent border-t-gray-100">
                                <div
                                    className="font-semibold transition-all hover:text-primary cursor-pointer w-full text-center flex justify-center items-center gap-3 p-3"
                                    onClick={() => {
                                        signOut(auth);
                                        navigate("/sign-in");
                                    }}
                                >
                                    <span>
                                        <IconLogOut size={20} />
                                    </span>
                                    <span>Log out</span>
                                </div>
                            </div>
                        </div>
                    </MenuResponsive>
                </div>
            ) : (
                <NavLink to="/dashboard" className="block w-full h-full">
                    {userInfo.photoURL ? (
                        <Image src={userInfo.photoURL} className="" />
                    ) : (
                        <div className="w-full h-full  flex justify-center items-center font-bold bg-green-bright text-primary">
                            {userInfo.displayName[0].toUpperCase()}
                        </div>
                    )}
                </NavLink>
            )}
        </div>
    );
};

export default AvatarHeader;
