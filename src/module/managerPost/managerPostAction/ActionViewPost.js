import React from "react";
import { NavLink } from "react-router-dom";

import { IconEyeOpen } from "../../../component/icons";
import { useManagerPostItem } from "../../../context/managerPostItemContext";

const ActionViewPost = () => {
    const { post } = useManagerPostItem();

    return (
        <span className=" border border-gray-200 rounded-md cursor-pointer text-gray-500 hover:border-secondary">
            <NavLink to={`/post/${post.id}`} className="block p-2 ">
                <IconEyeOpen />
            </NavLink>
        </span>
    );
};

export default ActionViewPost;
