import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { toast } from "react-toastify";
import {
    IconEditWrite,
    IconEyeOpen,
    IconTrash,
} from "../../../component/icons";
import { db } from "../../../firebase-app/firebase-config";
import { getStorage, ref, deleteObject } from "firebase/storage";

const PostManagerAction = ({ post }) => {
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
        <div className="p-3 flex justify-start items-center gap-3">
            <span className="p-2 border border-gray-200 rounded-md cursor-pointer text-gray-500 hover:border-secondary">
                <IconEyeOpen />
            </span>
            <span className="p-2 border border-gray-200 rounded-md cursor-pointer text-gray-500 hover:border-secondary">
                <IconEditWrite />
            </span>
            <span
                onClick={handleDetelePost}
                className="p-2 border border-gray-200 rounded-md cursor-pointer text-gray-500 hover:border-secondary"
            >
                <IconTrash />
            </span>
        </div>
    );
};

export default PostManagerAction;
