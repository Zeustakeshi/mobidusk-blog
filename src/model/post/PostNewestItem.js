import React from "react";
import Image from "../../component/Image";
import PostCategory from "./PostCategory";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";

const PostNewestItem = () => {
    return (
        <div className="p-5 bg-[#F3EDFF] rounded-2xl w-full max-w-[550px] grid grid-rows-3 gap-[40px]">
            {new Array(3).fill(0).map((item, index) => (
                <div
                    key={index}
                    className=" min-h-[168px] w-full grid grid-cols-2 gap-5 "
                >
                    <div className="w-full h-full rounded-lg ">
                        <Image
                            src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className=" object-cover rounded-[inherit] "
                            imgErrorClass="bg-opacity-80"
                            to="/setup-phong-cuc-chill"
                        />
                    </div>
                    <div className="flex flex-col gap-3 justify-start items-start">
                        <PostCategory type="secondary" className="mb-0">
                            Kiến thức
                        </PostCategory>
                        <PostTitle
                            limitLine={2}
                            className="text-base font-semibold text-[#232323]"
                        >
                            Hướng dẫn setup phòng cực chill dành cho người mới
                            toàn tập
                        </PostTitle>
                        <PostMeta
                            time="Mar 23"
                            authorName="Andiez Le"
                            className="text-gray6B text-xs font-semibold"
                        ></PostMeta>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostNewestItem;
