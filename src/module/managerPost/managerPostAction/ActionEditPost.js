import React from "react";
import { NavLink } from "react-router-dom";
import { IconEditWrite } from "../../../component/icons";
import { useApp } from "../../../context/appContext";
import { useManagerPostItem } from "../../../context/managerPostItemContext";

const ActionEditPost = () => {
    const { post } = useManagerPostItem();
    const { isMobile } = useApp();

    return (
        <span className=" border border-gray-200 rounded-md cursor-pointer text-gray-500 hover:border-secondary">
            <NavLink to={`/post/update/${post.id}`} className="block p-2 ">
                <IconEditWrite size={isMobile ? 18 : 24} />
            </NavLink>
        </span>
    );
};

export default ActionEditPost;
