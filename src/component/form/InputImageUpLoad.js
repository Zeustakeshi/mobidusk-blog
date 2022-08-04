import React from "react";
import PreviewImage from "./PreviewImage";
import imgUpLoad from "../../assets/image/img-upload.svg";
import Image from "../Image";
const InputImageUpLoad = ({ name, id, formik }) => {
  return (
    <div>
      <label className="cursor-pointer w-[500px] h-[300px] border border-secondary rounded-md flex justify-center items-center ">
        <div className="w-full h-full flex justify-center items-center text-2xl text-secondary font-semibold">
          {formik.values.file ? (
            <PreviewImage file={formik.values.file} />
          ) : (
            <div className="w-[300px] h-[300px]">
              <Image srcSet={`${imgUpLoad} 1x`} alt="" />
            </div>
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
