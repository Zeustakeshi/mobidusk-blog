import React from "react";
import PreviewImage from "./PreviewImage";
import imgUpLoad from "../../assets/image/img-upload.svg";
import Image from "../Image";
import { IconAdd } from "../icons";
const InputImageUpLoad = ({
    name,
    id,
    formik,
    size = { width: 500, height: 300 },
    className = "",
}) => {
    return (
        <div>
            <label
                style={{
                    width: size.width,
                    height: size.height,
                }}
                className={`cursor-pointer rounded-3xl flex justify-center items-center bg-slate-100 group relative ${className}`}
            >
                <div className="w-full h-full flex justify-center items-center text-2xl text-secondary font-semibold">
                    {formik.values.file ? (
                        <PreviewImage file={formik.values.file} />
                    ) : (
                        <Image
                            src={`${imgUpLoad}`}
                            alt=""
                            className="w-[80%]"
                        />
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
                {!formik.values.file && (
                    <div
                        style={{
                            width: size.height / 5,
                            height: size.height / 5,
                            fontSize: size.height / 5,
                        }}
                        className={` absolute w-[30%] h-[30%] flex justify-center items-center bg-primary bg-opacity-50 transition-all rounded-full text-white invisible opacity-0 group-hover:visible group-hover:opacity-100`}
                    >
                        +
                    </div>
                )}
            </label>
            {formik.errors.file && (
                <div className="mt-2 text-base text-red-500  font-semibold text-center">
                    {formik.errors.file}
                </div>
            )}
        </div>
    );
};

export default InputImageUpLoad;

// validation
/*

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
validationSchema={Yup.object({
                        file: Yup.mixed()
                            .nullable()
                            .required("Image file is a required field")
                            .test(
                                "FILE_SIZE",
                                "Uploaded image file is too big",
                                (value) =>
                                    !value ||
                                    (value && value.size <= 1024 * 1204)
                            )
                            .test(
                                "FILE_FORMAT",
                                "Uploaded image file has unsupported format",
                                (value) =>
                                    !value ||
                                    (value &&
                                        SUPPORTED_FORMATS.includes(value?.type))
                            ),
                    })}

*/
