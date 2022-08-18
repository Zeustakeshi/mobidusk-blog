import React from "react";
import Image from "../../component/Image";
import PostCategory from "../post/PostCategory";
import PostTitle from "../post/PostTitle";
import PostMeta from "../post/PostMeta";
import { usePostDetail } from "../../context/postDetailContext";
import slugify from "slugify";

const DetailHeading = () => {
    const { postInfo } = usePostDetail();
    return (
        <div className="grid md:grid-cols-2 md:gap-[70px] gap-4">
            <div className="md:min-w-[500px] md:max-w-[648px] md:min-h-[300px] md:max-h-[466px] rounded-[20px] shadow-style-3">
                <Image src={postInfo.image} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start ">
                <PostTitle
                    className="text-secondary font-semibold text-2xl md:text-4xl mb-3"
                    limitLine={6}
                >
                    {postInfo.title}
                </PostTitle>
                {postInfo.categories.length > 0 && (
                    <div className="flex gap-2 md:gap-3 mt-2 mb-2 md:mb-5 flex-wrap">
                        {postInfo.categories.slice(0, 10).map((category) => (
                            <PostCategory
                                className="mb-[10px]"
                                key={category}
                                to={slugify(category)}
                            >
                                {category}
                            </PostCategory>
                        ))}
                    </div>
                )}
                <PostMeta
                    time={new Date(
                        postInfo.time.seconds * 1000
                    ).toLocaleDateString("Vi-vi")}
                    className="text-sm md:text-base font-semibold"
                    authorID={postInfo.authorID}
                />
            </div>
        </div>
    );
};

export default DetailHeading;
