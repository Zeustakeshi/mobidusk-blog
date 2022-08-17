import React from "react";
import Button from "../../component/Button";
import bannerImg from "../../assets/image/banner-img.png";
import { useApp } from "../../context/appContext";
import { useAuth } from "../../context/authContext";

const HomeBanner = () => {
    const { isMobile } = useApp();
    const { userInfo } = useAuth();
    return (
        <div className="w-full bg-gradient-to-tl to-[#00A7B4] from-[#A4D96C] min-h-[350px] md:min-h-[500px] py-6 px-8 md:py-9 md:px-12 flex flex-col md:flex-row  justify-between items-center rounded-lg shadow-style-3">
            <div className="flex flex-col gap-8 justify-center items-start max-w-[500px]">
                <div className="flex flex-col gap-4 justify-center items-start text-white">
                    <p className="font-bold text-2xl md:text-4xl">
                        Mobidusk Blog
                    </p>
                    <p className="font-semibold md:font-medium leading-relaxed md:text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga voluptates officiis hic nisi perspiciatis autem
                        porro vero temporibus rem deleniti!
                    </p>
                </div>
                <Button
                    className=" md:max-w-[230px] text-base md:text-lg font-bold px-4 py-3 "
                    kind="secondary"
                    to={!userInfo?.uid ? "/sign-up" : null}
                >
                    Get Started
                </Button>
            </div>
            {!isMobile && (
                <div className="w-[500px] h-[500px] flex justify-center items-center">
                    <img src={bannerImg} alt="" />
                </div>
            )}
        </div>
    );
};

export default HomeBanner;
