import React from "react";
import HeadingTitle from "../../component/layout/HeadingTitle";
import PostItem from "../post/PostItem";

const DetailPostSimilar = () => {
    return (
        <div className="mt-[60px]">
            <HeadingTitle className="text-secondary">Post Similar</HeadingTitle>

            <div className="grid grid-cols-4 gap-10">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    );
};

export default DetailPostSimilar;
