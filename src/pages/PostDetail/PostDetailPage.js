import React from "react";
import { useEffect } from "react";
import MainLayout from "../../component/layout/MainLayout";
import { useApp } from "../../context/appContext";
import { PostDetailProvider } from "../../context/postDetailContext";
import DetailAuthorInfo from "../../module/detail/DetailAuthorInfo";
import DetailContent from "../../module/detail/DetailContent";
import DetailHeading from "../../module/detail/DetailHeading";
import DetailPostSimilar from "../../module/detail/DetailPostSimilar";
import DetailRating from "../../module/detail/DetailRating";

const PostDetailPage = () => {
    const { isMobile } = useApp();
    useEffect(() => {
        document.title = "Post";
    }, []);
    return (
        <MainLayout>
            <div className=" w-full py-3 md:py-[50px] flex flex-col justify-center items-start gap-2 md:gap-[40px]">
                <PostDetailProvider>
                    <DetailHeading />
                    <DetailContent />
                    <DetailRating />
                    {!isMobile && <DetailAuthorInfo />}
                    {/* <DetailPostSimilar /> */}
                </PostDetailProvider>
            </div>
        </MainLayout>
    );
};

export default PostDetailPage;
