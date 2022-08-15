import React from "react";
import ContentImg from "./ContentImg";
import ContentParagraph from "./ContentParagraph";
import ContentTitle from "./ContentTitle";
import { usePostDetail } from "../../context/postDetailContext";

const DetailAuthorInfo = () => {
    const { postInfo } = usePostDetail();
    return (
        <div className="w-full max-w-[900px] h-[250px] mx-auto flex justify-center items-center gap-[10px] rounded-[20px] bg-[#F8F9FA] shadow-style-3">
            <ContentImg
                src={postInfo.author.avatar}
                className="w-full max-w-[237px] h-full rounded-[inherit] border border-transparent border-r-slate-300 "
                alt=""
            />
            <div className="p-[30px] flex flex-col justify-center items-start w-full h-full  ">
                <ContentTitle className="my-0 text-secondary mb-[15px]">
                    {postInfo.author.name}
                </ContentTitle>
                <ContentParagraph
                    style={{
                        "--line": 4,
                    }}
                    className="content-overflow-limitline mb-0 text-base !leading-relaxed "
                >
                    Gastronomy atmosphere set aside. Slice butternut cooking
                    home.Gastronomy atmosphere set aside. Slice butternut
                    cooking home.Gastronomy atmosphere set aside. Slice
                    butternut cooking home.Gastronomy atmosphere set aside.
                    Slice butternut cooking home. Delicious romantic undisturbed
                    raw platter will meld. Thick Skewers skillet natural, smoker
                    soy sauce wait roux. Gastronomy atmosphere set aside. Slice
                    butternut cooking home.
                </ContentParagraph>
            </div>
        </div>
    );
};

export default DetailAuthorInfo;
