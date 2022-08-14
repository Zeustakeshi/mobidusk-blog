import React from "react";
import { useEffect } from "react";
import MainLayout from "../../component/layout/MainLayout";
import { PostDetailProvider } from "../../context/postDetailContext";
import DetailAuthorInfo from "../../module/detail/DetailAuthorInfo";
import DetailContent from "../../module/detail/DetailContent";
import DetailHeading from "../../module/detail/DetailHeading";
import DetailPostSimilar from "../../module/detail/DetailPostSimilar";

const PostDetailPage = () => {
    useEffect(() => {
        document.title = "Post";
    }, []);
    return (
        <MainLayout>
            <div className="py-[50px] flex flex-col justify-center items-start gap-[40px]">
                <PostDetailProvider>
                    <DetailHeading />
                    <DetailContent />
                    <DetailAuthorInfo />
                    <DetailPostSimilar />
                </PostDetailProvider>
            </div>
        </MainLayout>
    );
};

export default PostDetailPage;
