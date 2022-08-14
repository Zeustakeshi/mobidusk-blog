import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const TextEditor = ({ className = "", setContent, content }) => {
    return (
        <div className={`${className}`}>
            <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                className="entry-content"
            />
        </div>
    );
};

export default TextEditor;
