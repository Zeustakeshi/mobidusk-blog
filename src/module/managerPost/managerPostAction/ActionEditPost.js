import React from "react";
import { NavLink } from "react-router-dom";
import { IconEditWrite } from "../../../component/icons";
import { useManagerPostItem } from "../../../context/managerPostItemContext";

const ActionEditPost = () => {
    const { post } = useManagerPostItem();

    return (
        <span className=" border border-gray-200 rounded-md cursor-pointer text-gray-500 hover:border-secondary">
            <NavLink to={`/post/update/${post.id}`} className="block p-2 ">
                <IconEditWrite />
            </NavLink>
        </span>
    );
};

export default ActionEditPost;
