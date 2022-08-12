import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { toast } from "react-toastify";
import ImageUpLoad from "../../../component/imageUpload/ImageUpload";
import { useProfileUser } from "../../../context/prodfileUserContext";
import { db } from "../../../firebase-app/firebase-config";
import useFIrebaseImage from "../../../hooks/useFirebaseImage";

const EditAvatar = () => {
    const { profileUser } = useProfileUser();
    const { handleUploadImage } = useFIrebaseImage();
    const handleChange = (e) => {
        toast.promise(
            async () => {
                const imageURL = await handleUploadImage(e.target.files[0]);
                const userRef = doc(db, "users", profileUser.uid);
                try {
                    await updateDoc(userRef, {
                        avatar: imageURL,
                    });
                } catch (error) {
                    console.log(error);
                }
            },
            {
                pending: "Plase wait ....",
                success: "Update avatar is success",
                error: "Update avatar is faild",
            }
        );
    };
    return (
        <div className="w-full flex justify-center p-2">
            <ImageUpLoad
                name="avatar"
                file={profileUser.avatar}
                className="rounded-full"
                size={{
                    width: 180,
                    height: 180,
                }}
                handleChange={handleChange}
            />
        </div>
    );
};

export default EditAvatar;
