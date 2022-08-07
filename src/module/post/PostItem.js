import React from "react";
import PostCategory from "./PostCategory";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
import Image from "../../component/Image";

const PostItem = () => {
    return (
        <div>
            <div className="rounded-[15px] h-[250px] mb-5">
                <Image
                    src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="w-full h-full object-cover rounded-[inherit]"
                    to="/"
                />
            </div>
            <div className="flex flex-col gap-3 items-start justify-center">
                <PostCategory className="mb-[0px]">Kiến thức</PostCategory>
                <PostTitle limitLine={3} className="font-semibold text-lg">
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </PostTitle>
                <PostMeta
                    authorName="Andiez Le"
                    time="Mar 23"
                    className="text-sm font-semibold"
                />
            </div>
        </div>
    );
};

export default PostItem;
