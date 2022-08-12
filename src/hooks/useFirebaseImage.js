import { toast } from "react-toastify";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";

const useFIrebaseImage = () => {
    const getStorageRef = (fileName, path) => {
        const storage = getStorage();
        return ref(storage, `${path}/` + fileName);
    };
    const handleUploadImage = async (file, path = "images/") => {
        if (!file || !file.name) return;
        await uploadBytesResumable(getStorageRef(file.name, path), file);

        return await getDownloadURL(getStorageRef(file.name, path));
    };

    const handleDeteleImage = async (url, path) => {
        const storage = getStorage();
        const indexImageName = url.search(`/${path}%2F`) + path.length + 4;
        if (indexImageName === -1 + path.length + 4) {
            throw new Error(
                ` location not found with path: ${path}  and: ${url}`
            );
        }
        const imageName = url.slice(indexImageName, url.indexOf("?"));
        const ImageRef = ref(storage, `${path}/` + imageName);
        await deleteObject(ImageRef);
    };

    return { handleUploadImage, handleDeteleImage };
};
export default useFIrebaseImage;
