import React from "react";
import { IconSearch } from "../../../component/icons";
import Input from "../../../component//Input/Input";
import ManagerLayout from "../../../component/layout/ManagerLayout";
import ManagerPostTable from "./ManagerPostTable";
import Button from "../../../component/Button";

const ManagerPostPage = () => {
    return (
        <ManagerLayout
            title="Manage Post"
            button={
                <Button
                    type="button"
                    className="max-w-[180px] text-xl h-[60px]"
                    to="/manager/post/add-post"
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
                <ManagerPostTable></ManagerPostTable>
            </div>
        </ManagerLayout>
    );
};

export default ManagerPostPage;
