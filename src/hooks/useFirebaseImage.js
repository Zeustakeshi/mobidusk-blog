import { toast } from "react-toastify";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { useState } from "react";

const useFIrebaseImage = () => {
    const getStorageRef = (fileName) => {
        const storage = getStorage();
        return ref(storage, "images/" + fileName);
    };
    const handleUploadImage = async (file) => {
        if (!file) return;
        await uploadBytesResumable(getStorageRef(file.name), file);

        return await getDownloadURL(getStorageRef(file.name));
    };

    return { handleUploadImage };
};
export default useFIrebaseImage;
