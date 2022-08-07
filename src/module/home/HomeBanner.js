import React from "react";
import Button from "../../component/Button";
import bannerImg from "../../assets/image/banner-img.png";

const HomeBanner = () => {
    return (
        <div className="w-full bg-gradient-to-tl to-[#00A7B4] from-[#A4D96C] min-h-[500px] py-9 px-12 flex justify-between items-center rounded-lg shadow-style-3">
            <div className="flex flex-col gap-8 justify-center items-start max-w-[500px]">
                <div className="flex flex-col gap-4 justify-center items-start text-white">
                    <p className="font-bold text-4xl">Mobidusk Blog</p>
                    <p className="leading-relaxed text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga voluptates officiis hic nisi perspiciatis autem
                        porro vero temporibus rem deleniti!
                    </p>
                </div>
                <Button
                    className="max-w-[230px] text-lg font-bold"
                    kind="secondary"
                >
                    Get Started
                </Button>
            </div>
            <div className="w-[500px] h-[500px] flex justify-center items-center">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default HomeBanner;
