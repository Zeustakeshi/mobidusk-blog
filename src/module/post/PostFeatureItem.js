import React, { useEffect, useState } from "react";
import PostCategory from "./PostCategory";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
import Image from "../../component/Image";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";
import slugify from "slugify";
const PostFeatureItem = ({ post }) => {
    const [authorName, setAuthorName] = useState("");
    useEffect(() => {
        const fetchAuthorData = async () => {
            const docRef = doc(db, "users", post.authorID);
            const docSnap = await getDoc(docRef);
            setAuthorName(docSnap.data().fullName);
        };
        fetchAuthorData();
    }, []);
    return (
        <div className="relative rounded-2xl h-[350px] overflow-hidden shadow-style-2 ">
            <Image
                src={post.image}
                alt=""
                className="rounded-[inherit] object-cover w-full h-full"
            />
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-start items-start p-5 gap-3  bg-slate-800 bg-opacity-70">
                <div className="flex justify-between items-center w-full">
                    <PostCategory>{post.categories[0]}</PostCategory>
                    <PostMeta
                        time={JSON.stringify(post.time.toDate().getFullYear())}
                        authorName={authorName}
                        className="text-base font-semibold"
                        color="#d1cece"
                        to={slugify(post.authorID, { lower: true })}
                    />
                </div>
                <PostTitle className="font-semibold text-xl" to={post.id}>
                    {post.title}
                </PostTitle>
            </div>
        </div>
    );
};

export default PostFeatureItem;
