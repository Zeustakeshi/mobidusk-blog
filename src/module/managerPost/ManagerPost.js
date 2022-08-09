import React from "react";
import { ManagerPostProvider } from "../../context/managerPostContext";
import ManagerPostContent from "./ManagerPostContent";

const ManagerPost = ({ userID, managerField }) => {
    return (
        <ManagerPostProvider userID={userID} managerField={managerField}>
            <div className="h-full overflow-y-scroll overflow-x-hiden custom-scrollbar p-2">
                <ManagerPostContent />
            </div>
        </ManagerPostProvider>
    );
};

export default ManagerPost;
