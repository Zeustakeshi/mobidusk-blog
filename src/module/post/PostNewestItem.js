import React from "react";
import slugify from "slugify";
import Image from "../../component/Image";
import PostCategory from "./PostCategory";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";

const PostNewestItem = ({ posts }) => {
    if (!posts || posts?.length <= 0) return;
    return (
        <div className="p-5 bg-[#f1edf4] rounded-2xl w-full max-w-[550px] max-h-[640px] grid grid-rows-3 shadow-style-3">
            {posts?.map((post) => (
                <div
                    key={post.id}
                    className=" min-h-[168px] max-h-full w-full grid grid-cols-2 gap-5 border-[2px] border-transparent border-t-gray-200 first:border-t-transparent pb-5 last:pb-0 pt-5 first:pt-0"
                >
                    <div className="max-h-full rounded-lg overflow-hidden ">
                        <Image
                            src={post.image}
                            alt="post item"
                            className=" object-cover rounded-[inherit] max-h-full"
                            imgErrorClass="bg-opacity-80"
                            to={`/post/${post.id}`}
                        />
                    </div>
                    <div className="flex flex-col gap-3 justify-start items-start">
                        <PostCategory
                            type="secondary"
                            className="mb-[0px]"
                            to={slugify(post.categories[0])}
                        >
                            {post.categories[0]}
                        </PostCategory>
                        <PostTitle
                            limitLine={2}
                            className="text-lg font-semibold text-[#232323] "
                            to={post.id}
                        >
                            {post.title}
                        </PostTitle>
                        <PostMeta
                            time={new Date(
                                post.time.seconds * 1000
                            ).toLocaleDateString("Vi-vi")}
                            authorID={post.authorID}
                            className="text-gray6B text-sm font-semibold"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostNewestItem;
