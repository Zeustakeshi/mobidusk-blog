import React, { useEffect } from "react";
import MainLayout from "../../component/layout/MainLayout";
import HomeFeature from "../../module/home/HomeFeature";
import HomeNewestUpdate from "../../module/home/HomeNewestUpdate";
import HomeBanner from "../../module/home/HomeBanner";

const HomePage = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <MainLayout>
            <div className=" flex flex-col justify-center items-start gap-10">
                <HomeBanner />
                <HomeFeature />
                <HomeNewestUpdate />
            </div>
        </MainLayout>
    );
};

export default HomePage;
