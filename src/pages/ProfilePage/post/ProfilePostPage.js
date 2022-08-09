import React from "react";
import { IconSearch } from "../../../component/icons";
import Input from "../../../component/Input/Input";
import ProfileLayout from "../../../component/layout/ProfileLayout";
import Button from "../../../component/Button";
import { useAuth } from "../../../context/authContext";
import ManagerPost from "../../../module/managerPost/ManagerPost";

const managerField = ["Id", "Post", "Status", "Feature", "Action"];

const ProfilePostPage = () => {
    const { userInfo } = useAuth();
    return (
        <ProfileLayout
            title="Manage Post"
            button={
                <Button
                    type="button"
                    className="max-w-[180px] text-xl h-[60px]"
                    to="/post/add-post"
                >
                    New post
                </Button>
            }
        >
            <div className="mb-6">
                <Input
                    type="text"
                    name="search"
                    placeholder="Search post ..."
                    className="max-w-[300px] ml-auto"
                >
                    <IconSearch />
                </Input>
            </div>
            {userInfo && (
                <ManagerPost
                    userID={userInfo.uid}
                    managerField={managerField}
                />
            )}
        </ProfileLayout>
    );
};

export default ProfilePostPage;
