import { createContext, useContext } from "react";
import useWindowSize from "../hooks/useWindowSize";

const AppContext = createContext();

const AppProvider = (props) => {
    const windowSize = useWindowSize();
    const isMobile = windowSize.width < 840;
    const values = { isMobile };

    return (
        <AppContext.Provider value={values} {...props}></AppContext.Provider>
    );
};

const useApp = () => {
    const context = useContext(AppContext);
    if (typeof context === "undefined")
        throw new Error("useApp must be used within AppProvider");
    return context;
};

export { useApp, AppProvider };
