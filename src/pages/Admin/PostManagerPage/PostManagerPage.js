import React, { useEffect, useState } from "react";
import { IconSearch } from "../../../component/icons";
import Input from "../../../component/Input/Input";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase-app/firebase-config";
import PostManagerTable from "./PostManagerTable";

const PostManagerPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const postRef = collection(db, "posts");
            const q = query(postRef, where("isPublic", "==", true));
            const querySnapshot = await getDocs(q);
            const resluts = [];
            querySnapshot.forEach((doc) => {
                resluts.push({
                    id: doc.id,
                    ...doc.data(),
                    isFeature: doc.data().isFeature || false,
                });
            });
            setPosts(resluts);
        };
        fetchPosts();
    }, []);
    return (
        <div>
            <div className="mb-6">
                <Input
                    type="text"
                    name="search"
                    placeholder="Search post ..."
                    className="max-w-[300px] ml-auto"
                >
                    <IconSearch />
                </Input>
            </div>
            <PostManagerTable posts={posts} />
        </div>
    );
};

export default PostManagerPage;
