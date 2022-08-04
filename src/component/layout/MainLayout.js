import React from "react";

import Header from "./Header";

const MainLayout = ({ children }) => {
    return (
        <div className="page-container relative pt-[150px]">
            <Header />
            {children}
        </div>
    );
};

export default MainLayout;
