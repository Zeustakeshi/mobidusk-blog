import { createContext, useContext } from "react";

const ManagerPostItemContext = createContext();

const ManagerPostItemProvider = ({ post, postIndex, ...props }) => {
    const values = { post, postIndex };
    return (
        <ManagerPostItemContext.Provider
            value={values}
            {...props}
        ></ManagerPostItemContext.Provider>
    );
};

const useManagerPostItem = () => {
    const context = useContext(ManagerPostItemContext);
    if (typeof context === "undefined")
        throw new Error(
            "useManagerPostItem must be used within ManagerPostItemProvider"
        );
    return context;
};

export { useManagerPostItem, ManagerPostItemProvider };
