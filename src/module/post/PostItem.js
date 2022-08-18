import React from "react";
import PostCategory from "./PostCategory";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
import Image from "../../component/Image";
import slugify from "slugify";

const PostItem = ({ post }) => {
    if (!post) return;
    return (
        <div>
            <div className="rounded-[15px] h-[250px] mb-2 md:mb-5">
                <Image
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover rounded-[inherit]"
                    to={`/post/${post.id}`}
                />
            </div>
            <div className="flex flex-col md:gap-3 items-start justify-center">
                <div className="flex gap-2 md:gap-3 mb-[5px] md:mb-[0px] flex-wrap">
                    {post.categories.slice(0, 3).map((category) => (
                        <PostCategory
                            className="mb-[10px]"
                            key={category}
                            to={slugify(category)}
                        >
                            {category}
                        </PostCategory>
                    ))}
                </div>
                <PostMeta
                    time={new Date(post.time.seconds * 1000).toLocaleDateString(
                        "Vi-vi"
                    )}
                    authorID={post.authorID}
                    className="text-xs mb-2 md:mb-0 md:text-sm font-semibold"
                />
                <PostTitle
                    limitLine={3}
                    className="font-semibold text-base md:text-xl"
                    to={post.id}
                >
                    {post.title}
                </PostTitle>
            </div>
        </div>
    );
};

export default PostItem;
