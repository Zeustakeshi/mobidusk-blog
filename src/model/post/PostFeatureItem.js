import React from "react";
import PostCategory from "./PostCategory";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
import Image from "../../component/Image";

const PostFeatureItem = ({ data }) => {
    return (
        <div className="relative rounded-2xl h-[350px] overflow-hidden ">
            <Image
                src={data.ImgUrl}
                alt=""
                className="rounded-[inherit] object-cover w-full h-full"
            />
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-start items-start p-4 gap-3  bg-slate-400 bg-opacity-20">
                <div className="flex justify-between items-center w-full">
                    <PostCategory>{data.tag}</PostCategory>
                    <PostMeta
                        time={data.time}
                        authorName={data.author}
                        className="text-[#F8F9FA] text-xs font-semibold"
                    />
                </div>
                <PostTitle className="font-semibold text-base">
                    {data.title}
                </PostTitle>
            </div>
        </div>
    );
};

export default PostFeatureItem;
