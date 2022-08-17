import React from "react";
import PostCategory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
import Image from "../../component/Image";

const PostNewstLarge = () => {
    return (
        <div className="flex-1">
            <div className="rounded-[15px] w-full h-[400px] md:h-[480px]">
                <Image
                    src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="w-full h-full object-cover rounded-[inherit]"
                />
            </div>
            <div className="flex flex-col justify-start items-start mt-1 md:mt-[30px] py-3">
                <PostCategory>Kiến thức</PostCategory>
                <PostTitle
                    className="font-semibold text-xl md:text-2xl mb-3"
                    limitLine={2}
                >
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                    Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
                </PostTitle>
                <PostMeta
                    time="Mar 23"
                    authorName="Andiez Le"
                    className="font-medium text-base"
                />
            </div>
        </div>
    );
};

export default PostNewstLarge;
