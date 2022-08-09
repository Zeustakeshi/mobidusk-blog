import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import { db } from "../firebase-app/firebase-config";

const ManagerPostContext = createContext();

const ManagerPostProvider = ({ userID, managerField, ...props }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const postsRef = collection(db, "posts");
        const q = userID
            ? query(postsRef, where("authorID", "==", userID))
            : query(postsRef, where("isPublic", "==", true));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const results = [];
            querySnapshot.forEach((doc) => {
                results.push({
                    id: doc.id,
                    ...doc.data(),
                    [`${userID ? "isPublic" : "isFeature"}`]:
                        doc.data()[`${userID ? "isPublic" : "isFeature"}`] ||
                        false,
                });
            });
            setPosts(results);
        });
        return unsubscribe;
    }, []);
    const values = { posts, managerField };
    return (
        <ManagerPostContext.Provider
            value={values}
            {...props}
        ></ManagerPostContext.Provider>
    );
};

const useManagerPost = () => {
    const context = useContext(ManagerPostContext);
    if (typeof context === "undefined")
        throw new Error(
            "useManagerPost must be used within ManagerPostProvider"
        );
    return context;
};

export { useManagerPost, ManagerPostProvider };
