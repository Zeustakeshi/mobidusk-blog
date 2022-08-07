import React from "react";
import MainLayout from "../../component/layout/MainLayout";
import DetailAuthorInfo from "../../module/detail/DetailAuthorInfo";
import DetailContent from "../../module/detail/DetailContent";
import DetailHeading from "../../module/detail/DetailHeading";
import DetailPostSimilar from "../../module/detail/DetailPostSimilar";

const PostDetailPage = () => {
    return (
        <MainLayout>
            <div className="py-[50px] flex flex-col justify-center items-start gap-[40px]">
                <DetailHeading />
                <DetailContent />
                <DetailAuthorInfo />
                <DetailPostSimilar />
            </div>
        </MainLayout>
    );
};

export default PostDetailPage;
