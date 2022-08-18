import {
    arrayRemove,
    arrayUnion,
    doc,
    getDoc,
    updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { IconHeart } from "../../component/icons";
import { useAuth } from "../../context/authContext";
import { usePostDetail } from "../../context/postDetailContext";
import { db } from "../../firebase-app/firebase-config";

const DetailRating = () => {
    const { postInfo } = usePostDetail();
    const { userInfo } = useAuth();

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikecount] = useState(() => postInfo?.like || 0);
    useEffect(() => {
        const getLike = async () => {
            const userRef = doc(db, "users", userInfo.uid);
            const docSnap = await getDoc(userRef);
            const data = docSnap.data();
            const isLiked = data?.postLikedList?.includes(postInfo.id);
            setLiked(isLiked);
        };
        getLike();
    }, []);

    const handleLike = async () => {
        const userRef = doc(db, "users", userInfo.uid);
        const like = liked ? likeCount - 1 : likeCount + 1;
        const postRef = doc(db, "posts", postInfo.id);

        await updateDoc(postRef, {
            isFeature: like >= 10,
            like: like,
        });
        await updateDoc(userRef, {
            postLikedList: liked
                ? arrayRemove(postInfo.id)
                : arrayUnion(postInfo.id),
        });
        setLiked((like) => !like);
        setLikecount(like);
    };
    return (
        <div
            className="px-4 md:px-5 py-3 md:py-4 shadow-style-3 rounded-lg my-5 ml-auto cursor-pointer"
            onClick={handleLike}
        >
            <div className="w-full h-full flex justify-center items-center font-semibold">
                <span className="text-red-400 mr-5">
                    <IconHeart fill={liked} />
                </span>
                <span className="mr-2">Like: </span>
                <span>{likeCount}</span>
            </div>
        </div>
    );
};

export default DetailRating;
