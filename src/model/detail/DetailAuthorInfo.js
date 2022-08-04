import React from "react";
import ContentImg from "./ContentImg";
import ContentParagraph from "./ContentParagraph";
import ContentTitle from "./ContentTitle";

const DetailAuthorInfo = () => {
    return (
        <div className="w-full max-w-[900px] h-[250px] mx-auto flex justify-center items-center gap-[10px] rounded-[20px] bg-[#F8F9FA] shadow-md">
            <ContentImg
                src="https://images.unsplash.com/photo-1611199340099-91a595a86812?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF1dGhvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="w-full max-w-[237px] h-full rounded-[inherit]"
                alt=""
            />
            <div className="p-[30px] flex flex-col justify-center items-start w-full h-full">
                <ContentTitle className="my-0 text-secondary mb-[15px]">
                    Jake Sullivan
                </ContentTitle>
                <ContentParagraph
                    style={{
                        ["--line"]: 4,
                    }}
                    className="content-overflow-limitline mb-0 text-base"
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
