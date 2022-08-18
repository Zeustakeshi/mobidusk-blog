import {
    arrayRemove,
    arrayUnion,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IconHeart } from "../../../component/icons";
import Image from "../../../component/Image";
import MainLayout from "../../../component/layout/MainLayout";
import { useApp } from "../../../context/appContext";
import { db } from "../../../firebase-app/firebase-config";
import PostItem from "../../../module/post/PostItem";
import parse from "html-react-parser";
import LoadingSpin from "../../../component/LoadingSpin";
import { useAuth } from "../../../context/authContext";

const ProfileUserViewPage = () => {
    const { isMobile } = useApp();
    const { userID } = useParams();
    const [user, setUser] = useState({});
    const [userPosts, setUserPosts] = useState([]);
    useEffect(() => {
        if (!userID) return;
        const fetchData = async () => {
            const userRef = doc(db, "users", userID);
            const docSnap = await getDoc(userRef);
            const userData = docSnap.data();
            setUser(userData);
            if (!userID) return;
            const q = query(
                collection(db, "posts"),
                where("authorID", "==", userID)
            );
            const querySnapshot = await getDocs(q);
            const results = [];
            querySnapshot.forEach((doc) => {
                results.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setUserPosts(results);
        };
        fetchData();
    }, []);

    return (
        <MainLayout>
            {!user.fullName ? (
                <div className="w-full h-[50vh] flex justify-center items-center">
                    <LoadingSpin color="#23BB86" borderSize={8} size={100} />
                </div>
            ) : (
                <div className="grid md:grid-cols-3 shadow-sm rounded-lg gap-1 md:gap-5 p-5">
                    <div className="max-h-[300px]">
                        {user.avatar ? (
                            <Image
                                src={user.avatar}
                                alt=""
                                className="object-top "
                            />
                        ) : (
                            <div className="w-full h-full  flex justify-center items-center font-bold bg-green-bright text-primary text-4xl min-h-[300px]">
                                {user.fullName[0].toUpperCase()}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col justify-start items-center  md:items-start gap-6 md:col-span-2 p-5">
                        <div className="text-2xl md:text-3xl font-bold text-primary">
                            {user.fullName}
                        </div>
                        <div className="flex justify-start items-center flex-wrap gap-5">
                            {user.habits.map((item) => (
                                <div
                                    key={item}
                                    className="bg-green-bright text-secondary font-semibold px-3 py-2 rounded-xl"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-start items-center gap-5">
                            <UserRating likes={user.like} userID={userID} />
                            {!isMobile && (
                                <div className="font-semibold px-4 md:px-5 py-3 md:py-4 shadow-style-3 rounded-lg my-5">
                                    <span className="">Total post: </span>
                                    <span>{userPosts.length || 0}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="bg-[#F8F9FA] entry-content leading-relaxed text-base md:text-lg md:col-span-3 mx-auto max-w-full md:max-w-[80%] p-4 mt-5 border-[4px] border-transparent border-l-primary mb-5 shadow-md ">
                        {parse(user.description || "")}
                    </div>
                </div>
            )}
            {userPosts.length > 0 && user.fullName && (
                <div className="grid gap-12 md:grid-cols-3 mt-20 ">
                    {userPosts.map((item) => (
                        <PostItem key={item.id} post={item} />
                    ))}
                </div>
            )}
        </MainLayout>
    );
};

const UserRating = ({ likes, userID }) => {
    const { userInfo } = useAuth();
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikecount] = useState(likes || 0);
    useEffect(() => {
        const getLike = async () => {
            const currentUserRef = doc(db, "users", userInfo.uid);
            const docSnap = await getDoc(currentUserRef);
            const data = docSnap.data();
            const isLiked = data?.userLikedList?.includes(userID);
            setLiked(isLiked);
        };
        getLike();
    }, []);
    const handleLike = async () => {
        const like = liked ? likeCount - 1 : likeCount + 1;
        const userRef = doc(db, "users", userID);
        const currentUserRef = doc(db, "users", userInfo.uid);
        await updateDoc(userRef, {
            like: like,
        });

        await updateDoc(currentUserRef, {
            userLikedList: liked ? arrayRemove(userID) : arrayUnion(userID),
        });
        setLiked((liked) => !liked);
        setLikecount(like);
    };
    return (
        <div
            onClick={handleLike}
            className="px-4 md:px-5 py-3 md:py-4 shadow-style-3 rounded-lg md:my-5 cursor-pointer"
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

export default ProfileUserViewPage;
