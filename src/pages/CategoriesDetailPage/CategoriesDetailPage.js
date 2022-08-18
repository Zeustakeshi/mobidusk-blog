import React from "react";
import MainLayout from "../../component/layout/MainLayout";
import HeadingTitle from "../../component/layout/HeadingTitle";
import PostItem from "../../module/post/PostItem";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";
import { categories } from "../../config";
import slugify from "slugify";
import { useState } from "react";

const CategoriesDetailPage = () => {
    const { categorySlug } = useParams();
    const categoryName = categories.find(
        (category) => slugify(category) === categorySlug
    );

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.title = `Category`;
        const fetchPosts = async () => {
            if (!categoryName) return;
            const q = query(
                collection(db, "posts"),
                where("categories", "array-contains", categoryName),
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
    }, [categorySlug]);
    return (
        <MainLayout>
            <div>
                <HeadingTitle className="md:pt-4">{categoryName}</HeadingTitle>
                {posts.length > 0 && (
                    <div className="grid md:grid-cols-3 gap-20">
                        {posts.map((post) => (
                            <PostItem key={post.id} post={post} />
                        ))}
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default CategoriesDetailPage;
