import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import Button from "../../../component/Button";
import { IconPencil } from "../../../component/icons";
import Input from "../../../component/Input/Input";
import { useProfileUser } from "../../../context/prodfileUserContext";
import { db } from "../../../firebase-app/firebase-config";
import useClickOutside from "../../../hooks/useClickOutside";

const EditName = () => {
    const { profileUser } = useProfileUser();

    const [type, setType] = useState("div");
    const [value, setValue] = useState(profileUser.name);
    const ref = useRef();
    useClickOutside(ref, null, () => {
        setType("div");
    });
    const handleEditName = () => {
        toast.promise(
            async () => {
                const userRef = doc(db, "users", profileUser.uid);
                try {
                    await updateDoc(userRef, {
                        fullName: value,
                    });
                } catch (error) {
                    console.log(error);
                }
            },
            {
                pending: "Plase wait ....",
                success: "Update name is success",
                error: "Update name is faild",
            }
        );
    };

    return (
        <div className="relative  flex items-center justify-center ">
            {type === "div" ? (
                <div className="flex justify-center items-center gap-[44px] w-full">
                    <div className="group relative">
                        <div className="text-2xl text-gray-600 font-medium p-3 pr-0 max-w-[500px] content-overflow-one-line transition-all">
                            {value.trim() || profileUser.name}
                        </div>

                        <span
                            onClick={() => setType("input")}
                            className="absolute top-[50%] -translate-y-2/4 right-0 translate-x-full  p-3 transition-all cursor-pointer"
                        >
                            <IconPencil />
                        </span>
                    </div>
                    {value.trim() !== "" &&
                        value.trim() !== profileUser.name.trim() && (
                            <Button
                                type="button"
                                kind="secondary"
                                className="max-w-[50px] max-h-[24px] text-base font-bold px-2 py-2 shadow-style-3 hover:shadow-style-3"
                                onClick={handleEditName}
                            >
                                ✓
                            </Button>
                        )}
                </div>
            ) : (
                <div ref={ref}>
                    <Input
                        name="name"
                        placeholder="Enter your new name"
                        type="text"
                        inputClassName="px-4 py-3 text-lg"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                </div>
            )}
        </div>
    );
};

export default EditName;
