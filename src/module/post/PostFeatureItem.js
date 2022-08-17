import React from "react";
import PostCategory from "./PostCategory";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
import Image from "../../component/Image";

const PostFeatureItem = ({ post }) => {
    return (
        <div className="relative rounded-2xl h-[300px] md:h-[350px] overflow-hidden shadow-style-2 ">
            <Image
                src={post.image}
                alt=""
                className="rounded-[inherit] object-cover w-full h-full"
            />
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-start items-start p-5 gap-3  bg-slate-800 bg-opacity-60 min-h-[38px]">
                <div className="flex justify-between items-center w-full">
                    {post.categories[0] && (
                        <PostCategory className="mb-[0px]">
                            {post.categories[0].name}
                        </PostCategory>
                    )}
                    <PostMeta
                        time={new Date(
                            post.time.seconds * 1000
                        ).toLocaleDateString("Vi-vi")}
                        className="text-sm md:text-base font-semibold ml-auto"
                        color="#d1cece"
                        authorID={post.authorID}
                    />
                </div>
                <PostTitle
                    className="font-semibold text-lg md:text-xl max-w-full"
                    to={post.id}
                >
                    {post.title}
                </PostTitle>
            </div>
        </div>
    );
};

export default PostFeatureItem;
