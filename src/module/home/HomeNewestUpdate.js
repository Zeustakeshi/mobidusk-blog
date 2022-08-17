import React from "react";
import HeadingTitle from "../../component/layout/HeadingTitle";
import { useApp } from "../../context/appContext";
import PostItem from "../post/PostItem";
import PostNewestItem from "../post/PostNewestItem";
import PostNewstLarge from "../post/PostNewstLarge";

const HomeNewestUpdate = () => {
    const { isMobile } = useApp();
    return (
        <div className="w-full">
            <HeadingTitle>Bài viết Mới nhất</HeadingTitle>
            {!isMobile && (
                <div className="flex justify-center items-start gap-10 mb-[50px]">
                    <PostNewstLarge />
                    <PostNewestItem />
                </div>
            )}
            <div className="grid md:grid-cols-4 gap-10">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    );
};

export default HomeNewestUpdate;
