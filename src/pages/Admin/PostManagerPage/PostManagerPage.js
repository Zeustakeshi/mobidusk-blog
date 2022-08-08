import React, { useEffect, useRef, useState } from "react";
import { IconSearch } from "../../../component/icons";
import Input from "../../../component/Input/Input";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../firebase-app/firebase-config";
import PostManagerTable from "./PostManagerTable";

const PostManagerPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const postsRef = collection(db, "posts");
        const q = query(postsRef, where("isPublic", "==", true));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const results = [];
            querySnapshot.forEach((doc) => {
                results.push({
                    id: doc.id,
                    ...doc.data(),
                    isFeature: doc.data().isFeature || false,
                });
            });
            setPosts(results);
        });
        return unsubscribe;
    }, []);

    return (
        <div>
            <div className="mb-6 flex items-center gap-5 p-5">
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

// const postRef = collection(db, "posts");
// const q = query(postRef, where("isPublic", "==", true));
// const unsubscribe = onSnapshot(q, (snapshot) => {
//     const results = [];
//     snapshot.docChanges().forEach((change) => {
// results.push({
//     id: change.doc.id,
//     ...change.doc.data(),
//     isFeature: change.doc.data().isFeature || false,
// });
//     });
//     setPosts(results);
// });
// return unsubscribe;
