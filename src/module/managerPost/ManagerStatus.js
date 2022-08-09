import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { toast } from "react-toastify";
import { useManagerPostItem } from "../../context/managerPostItemContext";
import { db } from "../../firebase-app/firebase-config";
import { Dropdown, DropdownField } from "../../component/dropdown";

const statuses = ["pending", "approve", "reject"];
const ManagerStatus = () => {
    const { post } = useManagerPostItem();
    const handleChooseStatus = async (prevStatus, status) => {
        if (status === prevStatus) return;
        const PostRef = doc(db, "posts", post.id);
        await toast.promise(
            updateDoc(PostRef, {
                status: status,
            }),
            {
                pending: "Please wait ! ...",
                success: `Update is success ! `,
                error: `Update is failed !`,
            }
        );
    };

    return (
        <div className="text-gray-500 font-medium">
            <Dropdown>
                <DropdownField.Label
                    label={post.status}
                    className="p-[10px] bg-[#fff]"
                />
                <DropdownField.Selection>
                    {statuses
                        .filter((item) => item !== post.status)
                        .map((status) => (
                            <DropdownField.Item
                                key={status}
                                value={status}
                                onClick={(prevStatus) => {
                                    handleChooseStatus(prevStatus, status);
                                }}
                            >
                                {status}
                            </DropdownField.Item>
                        ))}
                </DropdownField.Selection>
            </Dropdown>
        </div>
    );
};

export default ManagerStatus;
