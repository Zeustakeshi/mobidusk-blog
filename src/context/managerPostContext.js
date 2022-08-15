import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import { db } from "../firebase-app/firebase-config";

const ManagerPostContext = createContext();

const ManagerPostProvider = ({ currentUser, managerField, ...props }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (!currentUser) return;
        const postsRef = collection(db, "posts");
        const q = currentUser
            ? query(postsRef, where("authorID", "==", currentUser))
            : query(postsRef, where("isPublic", "==", true));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const results = [];
            querySnapshot.forEach((doc) => {
                results.push({
                    id: doc.id,
                    ...doc.data(),
                    [`${currentUser ? "isPublic" : "isFeature"}`]:
                        doc.data()[
                            `${currentUser ? "isPublic" : "isFeature"}`
                        ] || false,
                });
            });
            setPosts(results);
        });
        return unsubscribe;
    }, [currentUser]);
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
