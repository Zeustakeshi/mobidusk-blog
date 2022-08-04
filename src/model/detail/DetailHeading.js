import React from "react";
import Image from "../../component/Image";
import PostCategory from "../post/PostCategory";
import PostTitle from "../post/PostTitle";
import PostMeta from "../post/PostMeta";

const DetailHeading = () => {
    return (
        <div className="grid grid-cols-2 gap-[70px]">
            <div className="max-w-[648px] max-h-[466px] rounded-[20px]">
                <Image
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                />
            </div>
            <div className="flex flex-col justify-center items-start ">
                <PostCategory className="mb-[10px]">Kiến thức</PostCategory>
                <PostTitle
                    className="text-secondary font-semibold text-4xl mb-[20px]"
                    limitLine={6}
                >
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </PostTitle>
                <PostMeta
                    className="text-base font-semibold"
                    authorName="minh hieu"
                    time="Mar 23"
                />
            </div>
        </div>
    );
};

export default DetailHeading;
