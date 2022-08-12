import React from "react";
import { useField } from "formik";
import ImageUpLoad from "../imageUpload/ImageUpload";

const InputImageUpLoad = ({
    name,
    id,
    size = { width: 500, height: 300 },
    className = "",
}) => {
    const [field, meta, helpers] = useField(name);
    return (
        <div>
            <ImageUpLoad
                name={name}
                id={id}
                file={field.value}
                handleChange={(e) => {
                    helpers.setValue(e.target.files[0]);
                }}
                className={className}
                size={size}
            />
            {meta.error && meta.touched && (
                <div className="mt-3 text-base text-red-500  font-semibold text-center">
                    {meta.error}
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
