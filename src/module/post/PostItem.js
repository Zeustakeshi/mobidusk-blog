import React from "react";
import PostCategory from "./PostCategory";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
import Image from "../../component/Image";

const PostItem = ({ post }) => {
    if (!post) return;
    return (
        <div>
            <div className="rounded-[15px] h-[250px] mb-2 md:mb-5">
                <Image
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover rounded-[inherit]"
                    to="/"
                />
            </div>
            <div className="flex flex-col md:gap-3 items-start justify-center">
                <PostCategory className="mb-[5px] md:mb-[0px] ">
                    {post.categories[0].name}
                </PostCategory>
                <PostTitle
                    limitLine={3}
                    className="font-semibold text-base md:text-xl"
                    to={post.id}
                >
                    {post.title}
                </PostTitle>
                <PostMeta
                    time={new Date(post.time.seconds * 1000).toLocaleDateString(
                        "Vi-vi"
                    )}
                    authorID={post.authorID}
                    className="text-xs md:text-sm font-semibold"
                />
            </div>
        </div>
    );
};

export default PostItem;
