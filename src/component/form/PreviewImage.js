import React, { useState } from "react";
import Image from "../Image";

const PreviewImage = ({ file }) => {
    const [preview, setPreview] = useState(null);
    if (typeof file !== "object") return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setPreview(reader.result);
    };

    return <Image src={preview} alt="review" />;
};

export default PreviewImage;
