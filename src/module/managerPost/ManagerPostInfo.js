import React from "react";
import Image from "../../component/Image";
import { useManagerPostItem } from "../../context/managerPostItemContext";

const ManagerPostInfo = () => {
    const { post } = useManagerPostItem();
    return (
        <div className=" p-3 flex justify-start items-start gap-3 w-full">
            <div className="min-w-[50px] md:min-w-[100px] h-[40px] md:h-[80px] rounded-lg">
                <Image alt="" src={post.image} />
            </div>
            <div className=" flex flex-col justify-start items-start max-w-[100px] md:max-w-[300px] gap-1 md:gap-2 py-2 ">
                <h4 className="content-overflow-one-line font-semibold text-xs md:text-xl w-[100px] md:w-[150px]">
                    {post.title}
                </h4>
                <div className="flex justify-center items-center gap-1 text-xs md:text-base font-medium">
                    <span className="font-semibold text-gray-600">Date:</span>
                    <span className="text-gray-500">
                        {new Date(post.time.seconds * 1000).toLocaleDateString(
                            "Vi-vi"
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ManagerPostInfo;
