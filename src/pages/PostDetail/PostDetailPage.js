import React from "react";
import MainLayout from "../../component/layout/MainLayout";
import DetailAuthorInfo from "../../model/detail/DetailAuthorInfo";
import DetailContent from "../../model/detail/DetailContent";
import DetailHeading from "../../model/detail/DetailHeading";
import DetailPostSimilar from "../../model/detail/DetailPostSimilar";

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
