import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form } from "../../../component/form";
import ProfileLayout from "../../../component/layout/ProfileLayout";
import { useAuth } from "../../../context/authContext";
import { ProfileUserProvider } from "../../../context/prodfileUserContext";
import { db } from "../../../firebase-app/firebase-config";
import useFIrebaseImage from "../../../hooks/useFirebaseImage";
import EditAvatar from "./EditAvatar";
import EditHabit from "./EditHabit";
import EditName from "./EditName";

const initialFormValues = {
    name: "",
    habits: [],
    avatar: "",
};

const ProfileUserPage = () => {
    return (
        <ProfileLayout title="Your Profile">
            <ProfileUserProvider>
                <div className="p-5 flex flex-col justify-start items-center">
                    <EditAvatar />

                    <EditName />

                    <EditHabit />
                </div>
            </ProfileUserProvider>
        </ProfileLayout>
    );
};

export default ProfileUserPage;
