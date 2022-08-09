import React from "react";
import { useManagerPostItem } from "../../../context/managerPostItemContext";
import { IconEyeOpen } from "../../../component/icons";

const ActionViewPost = () => {
    const { post } = useManagerPostItem();
    return (
        <span className="p-2 border border-gray-200 rounded-md cursor-pointer text-gray-500 hover:border-secondary">
            <IconEyeOpen />
        </span>
    );
};

export default ActionViewPost;
