import React from "react";
import DropDown from "../../../component/dropdown/Dropdown";
import { Form, InputCheckboxField } from "../../../component/form";
import ManagerLayout from "../../../component/layout/ManagerLayout";

const ManagerDashboardPage = () => {
    return (
        <ManagerLayout>
            <div className="w-full h-full flex justify-start p-10 items-center">
                <Form
                    initialValues={{
                        category: "",
                        checked: [],
                    }}
                    onSubmit={(values, action) => {
                        setTimeout(() => {
                            console.log(values);
                            action.setSubmitting(false);
                        }, 100);
                    }}
                    name="submit"
                    className="items-center gap-10 flex flex-col w-full"
                >
                    {(formik) => (
                        <div className="w-full mb-10">
                            <DropDown
                                className="mb-10 p-3 max-w-[300px]"
                                initItem={"danh mục"}
                                contentClassName="p-2"
                                items={[
                                    "kiến thức",
                                    "khoa học",
                                    "kinh tế",
                                    "kĩ năng",
                                    "khám phá",
                                    "công nghệ",
                                    "nghệ thuật",
                                ]}
                                handleChooseItem={(item) => {
                                    formik.setFieldValue("category", item);
                                }}
                            />
                            <InputCheckboxField
                                className="w-full mb-10"
                                name="checked"
                                value="hello1"
                                positonCheckbox="right"
                                size={25}
                            >
                                <div className="flex-1">hello 1</div>
                            </InputCheckboxField>
                            <InputCheckboxField
                                className="w-full"
                                name="checked"
                                value="hello2"
                                positonCheckbox="right"
                                type="secondary"
                                size={18}
                                colorActive="tomato"
                            >
                                <div className="flex-1">hello 2</div>
                            </InputCheckboxField>
                        </div>
                    )}
                </Form>
            </div>
        </ManagerLayout>
    );
};

export default ManagerDashboardPage;
