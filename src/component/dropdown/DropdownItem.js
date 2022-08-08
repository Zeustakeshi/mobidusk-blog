import React from "react";
import { useDropdown } from "../../context/dropdownContext";

const DropdownItem = ({
    children,
    className,
    onClick,
    value = "",
    clickCloseDropDown = true,
    clickActiveLabel = true,
}) => {
    const { setCurrentItem, setShow, currentItem } = useDropdown();
    const handleClick = () => {
        clickActiveLabel && setCurrentItem(value);
        onClick && onClick(currentItem);
        clickCloseDropDown && setShow(false);
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
