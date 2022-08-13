import React from "react";
import { useAuth } from "../../context/authContext";
import { IconSearch } from "../icons";
import Input from "../Input/Input";
import Header from "./Header";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import Image from "../Image";

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

const MainLayout = ({ children }) => {
    const { userInfo } = useAuth();
    return (
        <div className="page-container relative pt-[150px] min-h-[3000px]">
            <Header
                headerTags={headerTags}
                headerRightItem={
                    <>
                        <Input
                            name="search"
                            type="text"
                            placeholder="Search posts..."
                            className="max-w-[300px] h-[60px]"
                            inputClassName=" placeholder: text-lg px-5 py-3"
                        >
                            <IconSearch />
                        </Input>
                        {!userInfo ? (
                            <Button
                                type="button"
                                className="max-w-[180px] text-lg h-[60px]"
                                to="/sign-up"
                            >
                                Sign Up
                            </Button>
                        ) : (
                            <div className="flex  w-[58px] h-[58px] rounded-full overflow-hidden">
                                <NavLink to="/dashboard">
                                    <Image
                                        src={userInfo.photoURL}
                                        className=""
                                    />
                                </NavLink>
                            </div>
                        )}
                    </>
                }
            />
            {children}
        </div>
    );
};

export default MainLayout;
