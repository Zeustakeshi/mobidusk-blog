import React from "react";
import { IconSearch } from "../../../component/icons";
import Input from "../../../component//Input/Input";
import ManagerLayout from "../../../component/layout/ManagerLayout";
import ManagerPostTable from "./ManagerPostTable";

const ManagerPostPage = () => {
    return (
        <ManagerLayout>
            <div className="pl-10 pr-4 py-3 w-full h-full">
                <h2 className="text-4xl font-bold text-primary mb-5">
                    Manage Post
                </h2>
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
            </div>
        </ManagerLayout>
    );
};

export default ManagerPostPage;
