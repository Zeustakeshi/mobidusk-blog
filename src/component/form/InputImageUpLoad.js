import React from "react";
import PreviewImage from "./PreviewImage";
import imgUpLoad from "../../assets/image/img-upload.png";
import Image from "../Image";

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
                    height: size.height || "auto",
                }}
                className={`cursor-pointer rounded-3xl flex justify-center items-center bg-green-bright group relative ${className}`}
            >
                <div className="w-full h-full flex justify-center items-center text-2xl text-secondary font-semibold rounded-[inherit]">
                    {formik.values[name] ? (
                        <PreviewImage file={formik.values[name]} />
                    ) : (
                        <div className="w-[40%]">
                            <Image
                                src={`${imgUpLoad}`}
                                alt=""
                                // className="w-[60%]"
                            />
                        </div>
                    )}
                </div>
                <input
                    hidden
                    type="file"
                    name={name}
                    id={id || name}
                    onChange={(e) => {
                        formik.setFieldValue(name, e.target.files[0]);
                    }}
                />
                {!formik.values[name] && (
                    <div
                        style={
                            (typeof size.height === "number" && {
                                width: size.height / 5,
                                height: size.height / 5,
                                fontSize: size.height / 5,
                            }) ||
                            {}
                        }
                        className={` absolute w-[80px] h-[80px] text-6xl flex justify-center items-center bg-primary bg-opacity-50 transition-all rounded-full text-white invisible opacity-0 group-hover:visible group-hover:opacity-100`}
                    >
                        +
                    </div>
                )}
            </label>
            {formik.errors[name] && formik.touched[name] && (
                <div className="mt-3 text-base text-red-500  font-semibold text-center">
                    {formik.errors[name]}
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
