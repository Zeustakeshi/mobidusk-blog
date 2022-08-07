import React, { useState } from "react";
import ToggleButton from "../../../component/ToggleButton";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-app/firebase-config";
import { toast } from "react-toastify";

const PostManagerFeature = ({ isFeature, postId }) => {
    const [active, setActive] = useState(isFeature);
    const handleChange = async () => {
        const PostRef = doc(db, "posts", postId);
        await toast.promise(
            updateDoc(PostRef, {
                isFeature: !active,
            }),
            {
                pending: "Please wait ! ...",
                success: `Update is success ! `,
                error: `Update is failed !`,
            }
        );
        setActive(!active);
    };
    return (
        <div className=" content-overflow-one-line p-3 text-gray-500 font-medium">
            <ToggleButton size={30} isActive={active} onChange={handleChange} />
        </div>
    );
};

export default PostManagerFeature;
