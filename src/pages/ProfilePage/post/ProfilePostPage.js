import React from "react";
import { IconSearch } from "../../../component/icons";
import Input from "../../../component/Input/Input";
import ProfileLayout from "../../../component/layout/ProfileLayout";
import ProfilePostTable from "./ProfilePostTable";
import Button from "../../../component/Button";

const ProfilePostPage = () => {
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
            <div className="max-h-[550px] overflow-y-scroll overflow-x-hidden custom-scrollbar p-2">
                <ProfilePostTable></ProfilePostTable>
            </div>
        </ProfileLayout>
    );
};

export default ProfilePostPage;
