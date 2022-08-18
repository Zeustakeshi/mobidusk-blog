import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HeadingTitle from "../../component/layout/HeadingTitle";
import { useApp } from "../../context/appContext";
import { db } from "../../firebase-app/firebase-config";
import PostItem from "../post/PostItem";
import PostNewestItem from "../post/PostNewestItem";
import PostNewstLarge from "../post/PostNewstLarge";

const HomeNewestUpdate = () => {
    const { isMobile } = useApp();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const q = query(
                collection(db, "posts"),
                where("isFeature", "==", false),
                where("isPublic", "==", true)
            );
            const querySnapshot = await getDocs(q);
            const resluts = [];
            querySnapshot.forEach((doc) => {
                resluts.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setPosts(resluts);
        };
        fetchPosts();
    }, []);
    if (!posts.length > 0) return;
    return (
        <div className="w-full">
            <HeadingTitle>Bài viết Mới nhất</HeadingTitle>
            {!isMobile && (
                <div className="flex justify-center items-start gap-10 mb-[50px]">
                    <PostNewstLarge post={posts[0]} />
                    <PostNewestItem posts={posts.slice(1, 4)} />
                </div>
            )}
            <div className="grid md:grid-cols-4 gap-10">
                {isMobile
                    ? posts.map((post) => (
                          <PostItem key={post.id} post={post} />
                      ))
                    : posts
                          .slice(4)
                          .map((post) => (
                              <PostItem key={post.id} post={post} />
                          ))}
            </div>
        </div>
    );
};

export default HomeNewestUpdate;
