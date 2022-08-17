import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Button from "../../../component/Button";
import TextEditor from "../../../component/TextEditor";
import { useProfileUser } from "../../../context/prodfileUserContext";
import { db } from "../../../firebase-app/firebase-config";

const EditDescription = () => {
    const { profileUser } = useProfileUser();
    const initialValue =
        profileUser.description || "<p>Enter your decription...</p>";
    const [content, setContent] = useState("");
    useEffect(() => {
        setContent(initialValue);
    }, [initialValue]);

    const handleUpdateDescription = () => {
        toast.promise(
            async () => {
                const userRef = doc(db, "users", profileUser.uid);
                try {
                    await updateDoc(userRef, {
                        description: content,
                    });
                } catch (error) {
                    console.log(error);
                }
            },
            {
                pending: "Plase wait ....",
                success: "Update description is success",
                error: "Update description is faild",
            }
        );
    };

    return (
        <div className="mt-10">
            <TextEditor
                content={content}
                setContent={setContent}
                className="w-full"
            />
            {content.trim() !== initialValue.trim() && (
                <div className="flex justify-center items-center gap-5 bg-white mt-4 md:mt-10">
                    <Button
                        className="max-w-[37px] md:max-w-[46px] max-h-[37px] md:max-h-[46px] text-base px-3 py-3 shadow-style-3 hover:shadow-style-3 bg-white"
                        kind="secondary"
                        onClick={handleUpdateDescription}
                    >
                        ✓
                    </Button>
                    <Button
                        className="max-w-[37px] md:max-w-[46px] max-h-[37px] md:max-h-[46px] text-base px-3 py-3 shadow-style-3 hover:shadow-style-3 text-[tomato] bg-white"
                        kind="secondary"
                        onClick={() => setContent(initialValue)}
                    >
                        x
                    </Button>
                </div>
            )}
        </div>
    );
};

export default EditDescription;
