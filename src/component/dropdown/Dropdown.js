import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { IconChevron } from "../icons";

const DropDown = ({
    initItem,
    handleChooseItem,
    items,
    className = "",
    itemClassName = "",
    contentClassName = "",
    gap = 10,
}) => {
    const [currentItem, setCurrentItem] = useState(initItem);
    const [show, setShow] = useState(false);

    const dropdownRef = useRef();

    const handleClickItem = (item) => {
        handleChooseItem(item);
        setCurrentItem(item);
        setShow(false);
    };

    useClickOutside(dropdownRef, () => {
        setShow(false);
    });

    return (
        <div
            onClick={() => setShow(!show)}
            ref={dropdownRef}
            className={`w-full relative flex justify-between items-center min-w-[150px] cursor-pointer  bg-green-bright first-line:  rounded-lg p-5 shadow-style-3 ${className}`}
        >
            <div className="flex-1 font-medium">{currentItem}</div>
            <span className="flex justify-center items-center">
                {!show ? (
                    <IconChevron direction="down" />
                ) : (
                    <IconChevron direction="up" />
                )}
            </span>
            <div
                style={{
                    top: `calc(100% + ${gap}px)`,
                }}
                className={`absolute p-3 left-0 w-full h-auto z-[9] shadow-style-3 bg-white rounded-lg custom-scrollbar overflow-y-scroll overflow-x-hidden max-h-[350px] ${
                    show ? "visible opacity-100" : "invisible opacity-0"
                } ${contentClassName}`}
            >
                {items?.map((item, index) => (
                    <div
                        key={index}
                        className={`px-4 p-3 cursor-pointer transition-all hover:bg-green-bright  hover:text-secondary rounded-xl font-medium ${itemClassName} `}
                        onClick={() => {
                            handleClickItem(item);
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropDown;
