import React from "react";
import Image from "../../component/Image";
import { useManagerPostItem } from "../../context/managerPostItemContext";

const ManagerPostInfo = () => {
    const { post } = useManagerPostItem();
    return (
        <div className=" p-3 flex justify-start items-start gap-3 w-full">
            <div className=" min-w-[100px] h-[80px] rounded-lg">
                <Image alt="" src={post.image} />
            </div>
            <div className=" flex flex-col justify-start items-start max-w-[300px]">
                <h4
                    className="content-overflow-limitline font-semibold text-xl"
                    style={{ ["--line"]: 1 }}
                >
                    {post.title}
                </h4>
                <div className="flex justify-center items-center gap-1 text-gray-600 text-base font-medium">
                    <span>Date:</span>
                    <span>25 Otc 2021</span>
                </div>
            </div>
        </div>
    );
};

export default ManagerPostInfo;
