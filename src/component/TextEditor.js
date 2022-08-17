import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import React, { useRef } from "react";
import ImageUploader from "quill-image-uploader";
import { useState } from "react";
import { useMemo } from "react";
import axios from "axios";
import { imgbbAPI } from "../config";

Quill.register("modules/imageUploader", ImageUploader);
// const formats = [
//     "header",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "image",
//     "imageBlot",
// ];
const TextEditor = ({ content, setContent, className, ...props }) => {
    const reactQuillRef = useRef();
    const modules = useMemo(() => {
        return {
            toolbar: [
                ["bold", "italic", "underline", "strike"],
                [
                    { align: "" },
                    { align: "center" },
                    { align: "right" },
                    { align: "justify" },
                ],
                ["blockquote", "code-block"],
                [{ header: 1 }, { header: 2 }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ header: [1, 2, 3, 4, false] }],
                ["link", "image", "video"],
                ["clean"],
            ],

            imageUploader: {
                upload: async (file) => {
                    const bodyFormData = new FormData();
                    bodyFormData.append("image", file);
                    const response = await axios({
                        method: "post",
                        url: imgbbAPI,
                        data: bodyFormData,
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });
                    return response.data.data.url;
                },
            },
        };
    }, []);

    return (
        <ReactQuill
            ref={reactQuillRef}
            style={{ minHeight: "300px" }}
            // formats={formats}
            value={content}
            className={`entry-content ${className}`}
            modules={modules}
            onChange={setContent}
            {...props}
        />
    );
};
export default TextEditor;
