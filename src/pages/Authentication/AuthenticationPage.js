import React from "react";
import PropTypes from "prop-types";
import Logo from "../../component/Logo";
import { useApp } from "../../context/appContext";

const AuthenticationPage = ({ children }) => {
    const { isMobile } = useApp();
    return (
        <div className="pt-10 p-5 mb-2 md:p-8 md:mb-5">
            <div className="page-container">
                <div className="mx-auto mb-5 flex flex-col justify-center items-center">
                    <Logo size={isMobile ? 60 : 100}></Logo>
                    <div className="font-semibold  text-primary text-[26px] mt-4 md:leading-relaxed md:text-[40px]">
                        Mobidusk Blog
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

AuthenticationPage.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthenticationPage;
