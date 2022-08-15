import { useField } from "formik";
import React from "react";
import TextEditor from "../../../component/TextEditor";

const ProfileAddPostEditor = () => {
    const [field, , helper] = useField("content");
    return <TextEditor content={field.value} setContent={helper.setValue} />;
};

export default ProfileAddPostEditor;
