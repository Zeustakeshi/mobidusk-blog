import React, { useState } from "react";
import ToggleButton from "../../component/ToggleButton";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";
import { toast } from "react-toastify";
import { useManagerPostItem } from "../../context/managerPostItemContext";
import { useApp } from "../../context/appContext";

const ManagerPublic = () => {
    const { post } = useManagerPostItem();
    const { isMobile } = useApp();
    const [active, setActive] = useState(post.isPublic);
    const handleChange = async () => {
        const PostRef = doc(db, "posts", post.id);
        await toast.promise(
            updateDoc(PostRef, {
                isPublic: !active,
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
            <ToggleButton
                size={isMobile ? 20 : 30}
                isActive={active}
                onChange={handleChange}
            />
        </div>
    );
};

export default ManagerPublic;
