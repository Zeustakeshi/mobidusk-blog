import React from "react";

import Header from "./Header";

const MainLayout = ({ children }) => {
    return (
        <div className="page-container relative pt-[150px] min-h-[3000px]">
            <Header />
            {children}
        </div>
    );
};

export default MainLayout;
