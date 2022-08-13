import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { toast } from "react-toastify";
import ImageUpLoad from "../../../component/imageUpload/ImageUpload";
import { useProfileUser } from "../../../context/prodfileUserContext";
import { auth, db } from "../../../firebase-app/firebase-config";
import useFIrebaseImage from "../../../hooks/useFirebaseImage";

const EditAvatar = () => {
    const { profileUser } = useProfileUser();
    const { handleUploadImage, handleDeteleImage } = useFIrebaseImage();
    const handleChange = (e) => {
        function getExtension(filename) {
            const parts = filename.split(".");
            return parts[parts.length - 1];
        }

        function isImage(filename) {
            const ext = getExtension(filename);
            switch (ext.toLowerCase()) {
                case "jpg":
                case "svg":
                case "bmp":
                case "png":
                    return true;
            }
            return false;
        }

        const imageFile = e.target.files[0];
        if (!imageFile) return;
        if (!isImage(imageFile.name)) {
            alert("file có phần mở rộng không hợp lệ!");
            return;
        }
        toast.promise(
            async () => {
                const imageURL = await handleUploadImage(
                    imageFile,
                    `avatars/${profileUser.uid}`
                );
                const userRef = doc(db, "users", profileUser.uid);
                try {
                    handleDeteleImage(
                        profileUser.avatar,
                        `avatars/${profileUser.uid}`
                    );

                    await updateDoc(userRef, {
                        avatar: imageURL,
                    });

                    await updateProfile(auth.currentUser, {
                        photoURL: imageURL,
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
