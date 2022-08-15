import { useField } from "formik";
import React from "react";
import TextEditor from "../../component/TextEditor";

const ProfilePostEditor = () => {
    const [field, , helper] = useField("content");
    return <TextEditor content={field.value} setContent={helper.setValue} />;
};

export default ProfilePostEditor;
