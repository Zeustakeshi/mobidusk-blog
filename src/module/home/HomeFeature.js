import React, { useEffect, useState } from "react";
import HeadingTitle from "../../component/layout/HeadingTitle";
import PostFeatureItem from "../post/PostFeatureItem";
import {
    collection,
    limit,
    onSnapshot,
    query,
    where,
} from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";

const HomeFeature = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // const fetchPostData = async () => {
        //     const postsRef = collection(db, "posts");
        // const q = query(
        //     postsRef,
        //     where("isFeature", "==", true),
        //     where("status", "==", "approve"),
        //     limit(3)
        // );
        //     const querySnapshot = await getDocs(q);
        //     const results = [];
        //     querySnapshot.forEach((doc) => {
        //         results.push({
        //             id: doc.id,
        //             ...doc.data(),
        //         });
        //     });
        //     setPosts(results);
        // };
        // fetchPostData();
        const postsRef = collection(db, "posts");
        const q = query(
            postsRef,
            where("isFeature", "==", true),
            where("status", "==", "approve"),
            where("isPublic", "==", true),
            limit(3)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const results = [];
            querySnapshot.forEach((doc) => {
                results.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setPosts(results);
        });

        return unsubscribe;
    }, []);
    if (posts.length <= 0) return null;
    return (
        <div className="w-full">
            <HeadingTitle>Feature</HeadingTitle>
            <div className="mt-2 grid grid-cols-3 gap-8 w-full text-white">
                {posts.map((post) => (
                    <PostFeatureItem key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default HomeFeature;
