import React from "react";
import { useManagerPostItem } from "../../../context/managerPostItemContext";
import { IconEditWrite } from "../../../component/icons";

const ActionEditPost = () => {
    const { post } = useManagerPostItem();
    return (
        <span className="p-2 border border-gray-200 rounded-md cursor-pointer text-gray-500 hover:border-secondary">
            <IconEditWrite />
        </span>
    );
};

export default ActionEditPost;
