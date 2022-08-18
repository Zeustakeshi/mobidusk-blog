import { doc, getDoc } from "firebase/firestore";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import Image from "../../component/Image";
import { useApp } from "../../context/appContext";
import { usePostDetail } from "../../context/postDetailContext";
import { db } from "../../firebase-app/firebase-config";

const DetailAuthorInfo = () => {
    const { postInfo } = usePostDetail();

    const [author, setAuthor] = useState({});
    const authorID = postInfo.authorID;
    useEffect(() => {
        const fetchAuthor = async () => {
            const authorRef = doc(db, "users", authorID);
            const docSnap = await getDoc(authorRef);
            setAuthor(docSnap.data());
        };
        fetchAuthor();
    }, []);

    if (!author || !author.description || !authorID) return;

    return (
        <div className="w-full max-w-[90%] md:max-w-[70%] h-auto mx-auto flex justify-start items-start md:gap-3 rounded-[20px] bg-[#F8F9FA] shadow-style-3 ">
            {author.avatar && (
                <Image
                    src={author.avatar}
                    className="w-full max-w-[40px] md:max-w-[350px] max-h-[40px] md:max-h-[300px] h-full rounded-full md:rounded-[inherit] border border-transparent border-r-slate-300 "
                    alt=""
                />
            )}
            <div className="p-[30px] flex flex-col justify-start items-start w-full h-full  overflow-hidden">
                <h3
                    className={` font-semibold text-3xl  mb-[15px]  text-secondary`}
                >
                    {author.fullName}
                </h3>
                <div
                    className={`${
                        !author.avatar
                            ? "border-[3px] border-transparent border-l-primary"
                            : ""
                    } entry-content h-auto p-3 overflow-hidden`}
                >
                    {parse(author.description || "")}
                </div>
            </div>
        </div>
    );
};

export default DetailAuthorInfo;
