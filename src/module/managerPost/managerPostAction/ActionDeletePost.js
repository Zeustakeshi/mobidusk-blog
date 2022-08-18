import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { toast } from "react-toastify";
import { IconTrash } from "../../../component/icons";
import { useApp } from "../../../context/appContext";
import { useManagerPostItem } from "../../../context/managerPostItemContext";
import { db } from "../../../firebase-app/firebase-config";
import useFIrebaseImage from "../../../hooks/useFirebaseImage";

const ActionDeletePost = () => {
    const { post } = useManagerPostItem();
    const { isMobile } = useApp();
    const { handleDeteleImage } = useFIrebaseImage();
    const handleDetelePost = async () => {
        const userConfirm = window.confirm(
            "Are you sure you want to delete this post?"
        );
        if (!userConfirm) return;

        await toast.promise(
            async () => {
                handleDeteleImage(
                    post.image,
                    `images/${post.title.toLowerCase().trim()}`
                );
                await deleteDoc(doc(db, "posts", post.id));
            },
            {
                pending: "Please wait ! ...",
                success: `Detele post success ! `,
                error: `Detale post failed !`,
            }
        );
    };
    return (
        <span
            onClick={handleDetelePost}
            className="p-2 border border-gray-200 rounded-md cursor-pointer text-gray-500 hover:border-secondary"
        >
            <IconTrash size={isMobile ? 18 : 24} />
        </span>
    );
};

export default ActionDeletePost;
