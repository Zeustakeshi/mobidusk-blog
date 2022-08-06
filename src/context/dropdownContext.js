import { createContext, useContext, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

const DropdownContext = createContext();

const DropdownProvider = ({ dropdownRef, ...props }) => {
    const [show, setShow] = useState(false);
    const [currentItem, setCurrentItem] = useState();

    useClickOutside(dropdownRef, () => {
        setShow(false);
    });

    const values = { show, currentItem, setShow, setCurrentItem };
    return (
        <DropdownContext.Provider
            value={values}
            {...props}
        ></DropdownContext.Provider>
    );
};

const useDropdown = () => {
    const context = useContext(DropdownContext);
    if (typeof context === "undefined")
        throw new Error("useDropdown must be used within DropdownProvider");
    return context;
};

export { useDropdown, DropdownProvider };
