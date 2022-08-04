import React from "react";
import PreviewImage from "./PreviewImage";
import imgUpLoad from "../../assets/image/img-upload.svg";
import Image from "../Image";
const InputImageUpLoad = ({
    name,
    id,
    formik,
    className,
    size = { width: 500, height: 300 },
}) => {
    return (
        <div>
            <label
                style={{
                    width: size.width,
                    height: size.height,
                }}
                className={`cursor-pointer rounded-lg flex justify-center items-center bg-slate-100 ${className} `}
            >
                <div className="w-full h-full flex justify-center items-center text-2xl text-secondary font-semibold">
                    {formik.values.file ? (
                        <PreviewImage file={formik.values.file} />
                    ) : (
                        // <Image srcSet={`${imgUpLoad} 1x`} alt="" />
                        "Up load"
                    )}
                </div>
                <input
                    hidden
                    type="file"
                    name={name}
                    id={id || name}
                    onChange={(e) => {
                        formik.setFieldValue("file", e.target.files[0]);
                    }}
                />
            </label>
        </div>
    );
};

export default InputImageUpLoad;
