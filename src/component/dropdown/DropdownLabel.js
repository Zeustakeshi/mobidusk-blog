import React, { useEffect, useRef } from "react";
import { useDropdown } from "../../context/dropdownContext";
import { IconChevron } from "../icons";
import PropTypes from "prop-types";

const DropdownLabel = ({ className, label = "" }) => {
    const { currentItem, show, setShow, setCurrentItem } = useDropdown();
    const ref = useRef();
    useEffect(() => {
        setCurrentItem(label);
    }, [label]);

    return (
        <div
            ref={ref}
            className={`w-full h-full flex justify-between items-center cursor-pointer bg-green-bright rounded-[inherit] p-5 ${className}`}
            onClick={() => setShow(!show)}
        >
            <div className="flex-1 font-medium">{currentItem}</div>
            <span className="flex justify-center items-center">
                {!show ? (
                    <IconChevron direction="down" />
                ) : (
                    <IconChevron direction="up" />
                )}
            </span>
        </div>
    );
};

DropdownLabel.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
};

export default DropdownLabel;
