import React from "react";
import HeadingTitle from "../../component/layout/HeadingTitle";
import PostItem from "../post/PostItem";
import PostNewestItem from "../post/PostNewestItem";
import PostNewstLarge from "../post/PostNewstLarge";

const HomeNewestUpdate = () => {
    return (
        <div className="w-full">
            <HeadingTitle>Newest update</HeadingTitle>
            <div className="flex justify-center items-start gap-10 mb-[50px]">
                <PostNewstLarge />
                <PostNewestItem />
            </div>
            <div className="grid grid-cols-4 gap-10">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    );
};

export default HomeNewestUpdate;
