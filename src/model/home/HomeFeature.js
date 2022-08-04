import React from "react";
import HeadingTitle from "../../component/layout/HeadingTitle";
import PostFeatureItem from "../post/PostFeatureItem";

const data = [
    {
        tag: "kien thuc",
        time: "Mar 23",
        author: "Andiez Le",
        title: "Hướng dẫn setup phòng cực chill dành cho người mới toàn tập",
        ImgUrl: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        tag: "kien thuc",
        time: "Mar 23",
        author: "Andiez Le",
        title: "Hướng dẫn setup phòng cực chill dành cho người mới toàn tập",
        ImgUrl: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        tag: "kien thuc",
        time: "Mar 23",
        author: "Andiez Le",
        title: "Hướng dẫn setup phòng cực chill dành cho người mới toàn tập",
        ImgUrl: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
];

const HomeFeature = () => {
    return (
        <div className="w-full">
            <HeadingTitle>Feature</HeadingTitle>
            <div className="mt-2 grid grid-cols-3 gap-8 w-full text-white">
                {data.map((item, index) => (
                    <PostFeatureItem key={index} data={item} />
                ))}
            </div>
        </div>
    );
};

export default HomeFeature;
