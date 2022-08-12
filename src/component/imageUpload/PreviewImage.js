import React, { useState } from "react";
import Image from "../Image";

const PreviewImage = ({ file }) => {
    const [preview, setPreview] = useState(null);
    if (typeof file === "object") {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPreview(reader.result);
        };
    }

    return (
        <Image src={typeof file === "object" ? preview : file} alt="review" />
    );
};

export default PreviewImage;
