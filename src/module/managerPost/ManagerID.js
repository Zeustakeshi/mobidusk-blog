import React from "react";
import { useManagerPostItem } from "../../context/managerPostItemContext";

const ManagerID = () => {
    const { postIndex: id } = useManagerPostItem();
    return (
        <div className="font-semibold text-xs md:text-lg">
            {id + 1 < 10 ? `0${id + 1}` : id + 1}
        </div>
    );
};

export default ManagerID;
