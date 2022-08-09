import React from "react";
import Table from "../../component/table";
import { useManagerPost } from "../../context/managerPostContext";
import { ManagerPostItemProvider } from "../../context/managerPostItemContext";
import managerPostItem from "./ManagerPostItem";

const ManagerPostContent = () => {
    const { posts, managerField } = useManagerPost();
    return (
        <Table.Wrapper fields={managerField}>
            {posts.map((post, index) => (
                <ManagerPostItemProvider
                    post={post}
                    postIndex={index}
                    key={post.id}
                >
                    <Table.Item>
                        {managerField.map((item, index) => {
                            return (
                                <Table.Content key={index}>
                                    {managerPostItem[item]}
                                </Table.Content>
                            );
                        })}
                    </Table.Item>
                </ManagerPostItemProvider>
            ))}
        </Table.Wrapper>
    );
};

export default ManagerPostContent;
