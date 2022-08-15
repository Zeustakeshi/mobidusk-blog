import { doc, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase-app/firebase-config";
import { useAuth } from "./authContext";

const ProfileUserContext = createContext();

const ProfileUserProvider = (props) => {
    const { userInfo } = useAuth();
    const [profileUser, setProfileUser] = useState({
        avatar: "",
        name: "",
        habits: [],
        uid: "",
    });
    useEffect(() => {
        if (!userInfo.uid) return;
        const ref = doc(db, "users", userInfo.uid);

        const unsub = onSnapshot(ref, (doc) => {
            const result = doc.data();

            setProfileUser({
                avatar: result.avatar,
                name: result.fullName,
                habits: result.habits,
                uid: userInfo.uid,
            });
        });
        return unsub;
    }, [userInfo]);
    const values = { profileUser };
    return (
        <ProfileUserContext.Provider
            value={values}
            {...props}
        ></ProfileUserContext.Provider>
    );
};

const useProfileUser = () => {
    const context = useContext(ProfileUserContext);
    if (typeof context === "undefined")
        throw new Error(
            "useProfileUser must be used within ProfileUserProvider"
        );
    return context;
};

export { useProfileUser, ProfileUserProvider };
