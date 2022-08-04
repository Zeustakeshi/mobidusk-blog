import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-app/firebase-config";

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUserInfo(user);
        });
    }, []);
    const values = { userInfo, setUserInfo };
    return (
        <AuthContext.Provider value={values} {...props}></AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (typeof context === "undefined")
        throw new Error("useAuth must be used within AuthProvider");
    return context;
};

export { useAuth, AuthProvider };
