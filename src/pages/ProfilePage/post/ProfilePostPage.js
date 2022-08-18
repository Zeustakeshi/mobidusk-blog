import React from "react";
import { IconSearch } from "../../../component/icons";
import Input from "../../../component/Input/Input";
import ProfileLayout from "../../../component/layout/ProfileLayout";
import Button from "../../../component/Button";
import { useAuth } from "../../../context/authContext";
import ManagerPost from "../../../module/managerPost/ManagerPost";

const managerField = ["id", "post", "public", "action"];

const ProfilePostPage = () => {
    const { userInfo } = useAuth();
    return (
        <ProfileLayout
            title="Manage Post"
            button={
                <Button
                    type="button"
                    className="max-w-[180px] text-xl h-[60px]"
                    to="/post/add"
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
                    className="max-w-full md:max-w-[300px] ml-auto"
                >
                    <IconSearch />
                </Input>
            </div>
            {userInfo && (
                <ManagerPost
                    managerField={managerField}
                    currentUser={userInfo.uid}
                />
            )}
        </ProfileLayout>
    );
};

export default ProfilePostPage;
