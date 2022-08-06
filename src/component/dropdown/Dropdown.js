import React, { forwardRef, useRef } from "react";
import { DropdownProvider } from "../../context/dropdownContext";

const Dropdown = ({ children, className }, ref) => {
    const dropdownRef = useRef(ref);
    return (
        <DropdownProvider dropdownRef={dropdownRef}>
            <div
                ref={dropdownRef}
                className={`w-full relative min-w-[150px] shadow-style-3 rounded-lg ${className}`}
            >
                {children}
            </div>
        </DropdownProvider>
    );
};

export default forwardRef(Dropdown);
