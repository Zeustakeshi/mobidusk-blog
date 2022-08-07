import React from "react";
import { IconLogOut, IconPosts, IconProfile } from "../icons";
import Header from "./Header";
import SideBar from "./SideBar";

const sideBarNavigates = [
    {
        title: "Post",
        icon: <IconPosts />,
        to: "/admin/post",
    },
    {
        title: "User",
        icon: <IconProfile />,
        to: "/admin/user",
    },
];

const AdminLayout = ({ children }) => {
    return (
        <div className="px-20 relative">
            <div className="flex justify-start ">
                <div className="relative  pl-[350px] w-full h-full mt-[70px]">
                    <div className="pl-10 pr-4 py-3 w-full h-full">
                        {children}
                    </div>
                </div>
                <SideBar
                    className="top-[150px] -translate-y-0"
                    navigates={sideBarNavigates}
                />
            </div>
        </div>
    );
};

export default AdminLayout;
