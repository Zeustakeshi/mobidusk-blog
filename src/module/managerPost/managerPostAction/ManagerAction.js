import React from "react";
import { useManagerPostItem } from "../../../context/managerPostItemContext";
import ActionDeletePost from "./ActionDeletePost";
import ActionEditPost from "./ActionEditPost";
import ActionViewPost from "./ActionViewPost";

const ManagerAction = () => {
    const { post } = useManagerPostItem();
    return (
        <div className="p-3 flex justify-start items-center gap-3">
            <ActionViewPost post={post} />
            <ActionEditPost post={post} />
            <ActionDeletePost post={post} />
        </div>
    );
};

export default ManagerAction;
