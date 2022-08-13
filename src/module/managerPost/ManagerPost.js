import React from "react";
import { ManagerPostProvider } from "../../context/managerPostContext";
import ManagerPostContent from "./ManagerPostContent";

const ManagerPost = ({ currentUser, managerField }) => {
    return (
        <ManagerPostProvider
            currentUser={currentUser}
            managerField={managerField}
        >
            <div className="w-full h-full overflow-y-scroll overflow-x-hiden custom-scrollbar p-2">
                <ManagerPostContent />
            </div>
        </ManagerPostProvider>
    );
};

export default ManagerPost;
