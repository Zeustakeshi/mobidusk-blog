import React from "react";
import Image from "../../component/Image";
import PostCategory from "../post/PostCategory";
import PostTitle from "../post/PostTitle";
import PostMeta from "../post/PostMeta";
import { usePostDetail } from "../../context/postDetailContext";

const DetailHeading = () => {
    const { postInfo } = usePostDetail();
    return (
        <div className="grid grid-cols-2 gap-[70px]">
            <div className="min-w-[500px] max-w-[648px] min-h-[300px] max-h-[466px] rounded-[20px] shadow-style-3">
                <Image src={postInfo.image} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start ">
                <PostTitle
                    className="text-secondary font-semibold text-4xl mb-[20px]"
                    limitLine={6}
                >
                    {postInfo.title}
                </PostTitle>
                {postInfo.categories.length > 0 && (
                    <div className="flex gap-3 my-5 flex-wrap">
                        {postInfo.categories.slice(0, 10).map((category) => (
                            <PostCategory
                                className="mb-[10px]"
                                key={category.id}
                                to={category.slug}
                            >
                                {category.name}
                            </PostCategory>
                        ))}
                    </div>
                )}
                <PostMeta
                    time={new Date(
                        postInfo.time.seconds * 1000
                    ).toLocaleDateString("Vi-vi")}
                    authorName={postInfo.author.name}
                    className="text-base font-semibold"
                    to={postInfo.author.id}
                />
            </div>
        </div>
    );
};

export default DetailHeading;
