import { useField } from "formik";
import React from "react";
import TextEditor from "../../../component/TextEditor";

const ProfileAddPostEditor = () => {
    const [field, , helper] = useField("content");

    return (
        <TextEditor
            className="col-span-2 p-8"
            setContent={helper.setValue}
            content={field.value}
        />
    );
};

export default ProfileAddPostEditor;
