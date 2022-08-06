import React from "react";
import { useDropdown } from "../../context/dropdownContext";

const DropdownItem = ({ children, className, onClick, value = "" }) => {
    const { setCurrentItem, setShow } = useDropdown();
    const handleClick = () => {
        onClick && onClick();
        setCurrentItem(value);
        setShow(false);
    };

    return (
        <div
            className={`px-4 p-3 cursor-pointer transition-all hover:bg-green-bright  hover:text-secondary rounded-xl font-medium ${className} `}
            onClick={handleClick}
        >
            {children}
        </div>
    );
};

export default DropdownItem;
