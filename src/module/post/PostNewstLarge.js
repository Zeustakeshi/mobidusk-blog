import React from "react";
import PostCategory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
import Image from "../../component/Image";
import slugify from "slugify";

const PostNewstLarge = ({ post }) => {
    if (!post) return;
    return (
        <div className="flex-1 max-w-[800px]">
            <div className="rounded-[15px] w-full h-[400px] md:h-[480px]">
                <Image
                    src={post.image}
                    alt="large image"
                    className="w-full h-full object-cover rounded-[inherit]"
                />
            </div>
            <div className="flex flex-col justify-start items-start mt-1 md:mt-[30px] py-3">
                <div className="flex flex-wrap gap-3">
                    {post.categories.length > 0 &&
                        post.categories
                            .slice(0, 6)
                            .map((category) => (
                                <PostCategory to={slugify(category)}>
                                    {category}
                                </PostCategory>
                            ))}
                </div>
                <PostTitle
                    className="font-semibold text-xl md:text-2xl mb-3"
                    limitLine={2}
                    to={post.id}
                >
                    {post.title}
                </PostTitle>
                <PostMeta
                    time={new Date(post.time.seconds * 1000).toLocaleDateString(
                        "Vi-vi"
                    )}
                    authorID={post.authorID}
                    className="font-medium text-base"
                />
            </div>
        </div>
    );
};

export default PostNewstLarge;
