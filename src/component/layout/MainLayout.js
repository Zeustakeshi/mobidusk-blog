import React from "react";
import { useApp } from "../../context/appContext";
import { useAuth } from "../../context/authContext";
import Button from "../Button";
import { IconSearch } from "../icons";
import Input from "../Input/Input";
import AvatarHeader from "./AvatarHeader";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const headerTags = [
    {
        title: "Trang chủ",
        url: "/",
    },
    {
        title: "Blog",
        url: "/blog",
    },
    {
        title: "LIên hệ",
        url: "/contact",
    },
];

const MainLayout = ({ children }) => {
    const { userInfo } = useAuth();
    const { isMobile } = useApp();
    return (
        <>
            <div className="page-container relative !pt-[100px] md:!pt-[150px] !mb-[100px] min-h-[100vh]">
                <Header
                    headerTags={headerTags}
                    headerRightItem={
                        <div className="flex justify-center items-center gap-4">
                            {!isMobile && (
                                <Input
                                    name="search"
                                    type="text"
                                    placeholder="Tìm kiếm bài viết..."
                                    className="max-w-[300px] h-[60px]"
                                    inputClassName=" placeholder: text-lg px-5 py-3"
                                >
                                    <IconSearch />
                                </Input>
                            )}
                            {!userInfo ? (
                                <Button
                                    type="button"
                                    className="max-w-[180px] text-xs md:text-lg h-[60px] py-2 px-5 max-h-[40px] md:max-h-full"
                                    to="/sign-in"
                                >
                                    Đăng nhập
                                </Button>
                            ) : (
                                <AvatarHeader />
                            )}
                        </div>
                    }
                />
                {children}
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;
