import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../../firebase-app/firebase-config";
import { useManagerPostItem } from "../../context/managerPostItemContext";

const ManagerAuthor = () => {
    const { post } = useManagerPostItem();
    const [authorName, setAuthorName] = useState("");
    useEffect(() => {
        const fetchAuthorData = async () => {
            const docRef = doc(db, "users", post.authorID);
            const docSnap = await getDoc(docRef);
            setAuthorName(docSnap.data().fullName);
        };
        fetchAuthorData();
    }, []);
    return (
        <div className="content-overflow-one-line text-gray-500 font-medium">
            <NavLink
                className="w-full h-full p-3"
                to={`/user/${post.authorID}`}
            >
                {authorName}
            </NavLink>
        </div>
    );
};

export default ManagerAuthor;
