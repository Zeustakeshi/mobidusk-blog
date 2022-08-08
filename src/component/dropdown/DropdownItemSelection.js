import React from "react";
import { useDropdown } from "../../context/dropdownContext";

const DropdownSelection = ({ className, gap = 10, children }) => {
    const { show } = useDropdown();
    return (
        <div
            style={{
                top: `calc(100% + ${gap}px)`,
            }}
            className={`absolute p-3 left-0 w-full h-auto z-20 shadow-style-3 bg-white rounded-lg custom-scrollbar overflow-y-scroll overflow-x-hidden max-h-[350px] ${
                show ? "visible opacity-100" : "invisible opacity-0"
            } ${className}`}
        >
            {children}
        </div>
    );
};

export default DropdownSelection;
