import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import React from "react";
import { toast } from "react-toastify";
import { useManagerPostItem } from "../../../context/managerPostItemContext";
import { db } from "../../../firebase-app/firebase-config";
import { IconTrash } from "../../../component/icons";

const ActionDeletePost = () => {
    const { post } = useManagerPostItem();
    const handleDetelePost = async () => {
        const userConfirm = window.confirm(
            "Are you sure you want to delete this post?"
        );
        if (!userConfirm) return;

        await toast.promise(
            async () => {
                const storage = getStorage();
                const imageName = post.image.slice(87, post.image.indexOf("?"));
                const ImageRef = ref(storage, "images/" + imageName);
                await deleteDoc(doc(db, "posts", post.id));

                await deleteObject(ImageRef);
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
            <IconTrash />
        </span>
    );
};

export default ActionDeletePost;
