import { doc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase-app/firebase-config";
import NotFoundPage from "../pages/Not-found/NotFoundPage";

const PostDetailContext = createContext();

const PostDetailProvider = (props) => {
    const { postId } = useParams();
    const [postInfo, setPostInfo] = useState({});
    useEffect(() => {
        const fetchPostData = async () => {
            const docRef = doc(db, "posts", postId);
            const docSnap = await getDoc(docRef);
            setPostInfo(docSnap.data());
        };
        fetchPostData();
    }, []);

    if (!postId) return <NotFoundPage />;

    if (Object.keys(postInfo).length === 0) return null;
    const values = { postInfo, setPostInfo };
    return (
        <PostDetailContext.Provider
            value={values}
            {...props}
        ></PostDetailContext.Provider>
    );
};

const usePostDetail = () => {
    const context = useContext(PostDetailContext);
    if (typeof context === "undefined")
        throw new Error("usePostDetail must be used within PostDetailProvider");
    return context;
};

export { usePostDetail, PostDetailProvider };
