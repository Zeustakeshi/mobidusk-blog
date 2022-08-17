import React, { useEffect } from "react";
import { IconDashBoard, IconLogOut, IconPosts, IconProfile } from "../icons";
import SideBar from "./SideBar";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-app/firebase-config";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./header/Header";
import { useApp } from "../../context/appContext";
import AvatarHeader from "./AvatarHeader";

const sideBarNavigates = [
    {
        title: "Dashboard",
        icon: <IconDashBoard />,
        to: "/dashboard",
    },
    {
        title: "Post",
        icon: <IconPosts />,
        to: "/post",
    },
    {
        title: "User",
        icon: <IconProfile />,
        to: "/user",
    },
];

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

const ProfileLayout = ({ children, title, button }) => {
    const { userInfo } = useAuth();
    const { isMobile } = useApp();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Profile";
    }, []);
    useEffect(() => {
        if (!userInfo?.uid) {
            navigate("/sign-in");
        }
    }, [userInfo]);

    return (
        <div className="page-container relative !pt-[100px] md:!pt-[150px] mb-[200px]">
            <Header
                headerTags={headerTags}
                headerRightItem={isMobile ? <AvatarHeader /> : button}
            />
            <div className="flex">
                <div className="relative  md:pl-[350px] w-full h-full">
                    <div className="md:pl-10 md:pr-4 py-1 md:py-3 w-full h-full">
                        <h2 className=" text-xl md:text-4xl font-bold text-primary mb-5">
                            {title}
                        </h2>
                        {children}
                    </div>
                </div>
                {!isMobile && (
                    <SideBar navigates={sideBarNavigates}>
                        <ul className="py-4">
                            <li
                                className="text-[#808191] rounded-lg w-full h-full px-5 py-4 hover:bg-[#F1FBF7] hover:text-secondary flex justify-start items-center gap-5 font-semibold cursor-pointer transition-all"
                                onClick={() => {
                                    signOut(auth);
                                }}
                            >
                                <span>
                                    <IconLogOut />
                                </span>
                                <span>Log out</span>
                            </li>
                        </ul>
                    </SideBar>
                )}
            </div>
        </div>
    );
};

ProfileLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default ProfileLayout;
