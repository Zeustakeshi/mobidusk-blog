import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../../firebase-app/firebase-config";

const PostMeta = ({
    time,
    authorID,
    className = "text-base font-medium ",
    color,
}) => {
    const [authorName, setAuthorName] = useState();
    useEffect(() => {
        const fetchAuthor = async () => {
            const authorRef = doc(db, "users", authorID);
            const docSnap = await getDoc(authorRef);
            setAuthorName(docSnap.data()?.fullName);
        };
        if (!authorID) return;
        fetchAuthor();
    }, []);
    if (!authorID || !authorName) return;
    return (
        <div
            style={
                color && {
                    color: color,
                }
            }
            className={` text-gray6B flex justify-center items-center gap-1 md:gap-2 ${className}`}
        >
            <span>{time}</span>
            <span
                style={{
                    background: "currentColor",
                }}
                className="p-[2px] rounded-full inline-block"
            ></span>
            <NavLink to={`/user/${authorID}`}>{authorName}</NavLink>
        </div>
    );
};

export default PostMeta;
