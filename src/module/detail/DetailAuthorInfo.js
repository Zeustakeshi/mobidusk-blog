import { doc, getDoc } from "firebase/firestore";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import Image from "../../component/Image";
import { usePostDetail } from "../../context/postDetailContext";
import { db } from "../../firebase-app/firebase-config";

const DetailAuthorInfo = () => {
    const { postInfo } = usePostDetail();
    const authorID = postInfo.authorID;
    const [author, setAuthor] = useState();
    useEffect(() => {
        const fetchAuthor = async () => {
            const authorRef = doc(db, "users", authorID);
            const docSnap = await getDoc(authorRef);
            setAuthor(docSnap.data());
        };
        if (!authorID) return;
        fetchAuthor();
    }, []);

    if (!author || !authorID || !author.description) return;

    return (
        <div className="w-full max-w-[900px] h-[250px] mx-auto flex justify-start items-start gap-[10px] rounded-[20px] bg-[#F8F9FA] shadow-style-3">
            <Image
                src={author.avatar}
                className="w-full max-w-[237px] h-full rounded-[inherit] border border-transparent border-r-slate-300 "
                alt=""
            />
            <div className="p-[30px] flex flex-col justify-start items-start w-full h-full  ">
                <h3
                    className={` font-semibold text-3xl  mb-[15px]  text-secondary`}
                >
                    {author.fullName}
                </h3>
                <div
                    style={{
                        "--line": 4,
                    }}
                    className="entry-content content-overflow-limitline mb-0 text-base !leading-relaxed "
                >
                    {parse(author.description || "")}
                </div>
            </div>
        </div>
    );
};

export default DetailAuthorInfo;
