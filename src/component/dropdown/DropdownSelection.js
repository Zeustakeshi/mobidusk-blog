import React, { useRef } from "react";
import { useDropdown } from "../../context/dropdownContext";
import useClickOutside from "../../hooks/useClickOutside";
import Portal from "../portal/Portal";

const DropdownSelection = ({ className, gap = 10, children }) => {
    const { show, setShow, dropdownRef } = useDropdown();
    const coords = dropdownRef?.current?.getBoundingClientRect() || null;

    const ref = useRef();
    useClickOutside(ref, dropdownRef, () => {
        setShow(false);
    });
    return (
        <Portal>
            <div
                ref={ref}
                style={
                    coords && {
                        left: coords.left,
                        top: coords.top + coords.height + window.scrollY + gap,
                        width: coords.width,
                    }
                }
                className={`absolute p-3 h-auto z-20 shadow-style-3 bg-white rounded-lg custom-scrollbar overflow-y-scroll overflow-x-hidden max-h-[350px] ${
                    show ? "visible opacity-100" : "invisible opacity-0"
                } ${className}`}
            >
                {children}
            </div>
        </Portal>
    );
};

export default DropdownSelection;
