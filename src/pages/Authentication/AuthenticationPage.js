import React from "react";
import PropTypes from "prop-types";
import Logo from "../../component/Logo";

const AuthenticationPage = ({ children }) => {
    return (
        <div className="p-8 mb-5">
            <div className="page-container">
                <div className="mx-auto mb-5 flex flex-col justify-center items-center">
                    <Logo size={140}></Logo>
                    <div className="font-semibold leading-[40px] text-[40px] text-primary mt-4">
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
