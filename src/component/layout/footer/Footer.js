import React from "react";
import Image from "../../Image";
import Logo from "../../Logo";
import gitIcon from "../../../assets/image/github-icon.svg";
import linkedinIcon from "../../../assets/image/linkedin-icon.svg";
import { useApp } from "../../../context/appContext";

const Footer = () => {
    const { isMobile } = useApp();
    return (
        <div className="ralative left-0 w-full bg-gradient-to-tl to-[#e9edf2] from-[#FFF] px-1 md:px-5 py-10">
            <div className="page-container grid md:grid-cols-3 gap-2 uppercase text-xs md:text-sm font-semibold text-secondary">
                <div className="flex justify-start items-center gap-2 md:gap-4 text-sm md:text-lg text-bold">
                    <Logo size={isMobile ? 20 : 40} />
                    <p>Mobidusk blog</p>
                </div>
                <div className="flex justify-center items-center gap-3 md:gap-4 ">
                    <div className="flex justify-center items-center gap-[2px] md:gap-2">
                        <span>
                            <a href="https://github.com/Zeustakeshi">
                                <Image
                                    src={gitIcon}
                                    style={{
                                        width: isMobile ? 20 : 30,
                                        height: isMobile ? 20 : 30,
                                    }}
                                />
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <Image
                                    src={linkedinIcon}
                                    style={{
                                        width: isMobile ? 20 : 30,
                                        height: isMobile ? 20 : 30,
                                    }}
                                />
                            </a>
                        </span>
                    </div>
                    <div className="text-xs md:text-sm">
                        <p>{"Contact us "}</p>
                        <p>{"terms & condition"}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-center items-end text-xs md:text-sm">
                    <p>
                        a product by{" "}
                        <span className="text-bold text-sm md:text-2xl">
                            Mobidusk
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
