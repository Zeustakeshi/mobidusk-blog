import React from "react";
import ProfileLayout from "../../../component/layout/ProfileLayout";
import { ProfileUserProvider } from "../../../context/prodfileUserContext";
import EditAvatar from "./EditAvatar";
import EditDescription from "./EditDescription";
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

                    <EditDescription />
                </div>
            </ProfileUserProvider>
        </ProfileLayout>
    );
};

export default ProfileUserPage;
