import React, { useEffect } from "react";
import { IconDashBoard, IconLogOut, IconPosts, IconProfile } from "../icons";
import SideBar from "./SideBar";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-app/firebase-config";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./Header";

const sideBarNavigates = [
    {
        title: "Dashboard",
        icon: <IconDashBoard />,
        to: "/manager/dashboard",
    },
    {
        title: "Post",
        icon: <IconPosts />,
        to: "/manager/post",
    },
    {
        title: "User",
        icon: <IconProfile />,
        to: "/manager/user",
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

const ManagerLayout = ({ children, title, button, progress }) => {
    const { userInfo } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!userInfo) {
            navigate("/sign-in");
        } else {
            document.title = "Proflie";
        }
    }, [userInfo]);

    return (
        <div className="page-container relative pt-[150px]">
            <Header headerTags={headerTags} headerRightItem={button} />
            <div className="flex">
                <div className="relative  pl-[350px] w-full h-full">
                    <div className="pl-10 pr-4 py-3 w-full h-full">
                        <h2 className="text-4xl font-bold text-primary mb-5">
                            {title}
                        </h2>
                        {children}
                    </div>
                </div>
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
            </div>
        </div>
    );
};

ManagerLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default ManagerLayout;
