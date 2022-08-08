import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Dropdown, DropdownField } from "../../../component/dropdown";
import { db } from "../../../firebase-app/firebase-config";

const statuses = ["pending", "approve", "reject"];

const PostManagerStatus = ({ status, postId }) => {
    const handleChooseStatus = async (prevStatus, status) => {
        if (status === prevStatus) return;
        const PostRef = doc(db, "posts", postId);
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
                    label={status}
                    className="p-[10px] bg-[#fff]"
                />
                <DropdownField.Selection>
                    {statuses.map((status) => (
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
export default PostManagerStatus;
