import React from "react";
import { Form, InputImageUpLoad } from "../../../component/form";
import ManagerLayout from "../../../component/layout/ManagerLayout";

const ManagerDashboardPage = () => {
    return (
        <ManagerLayout>
            <div className="w-full h-full flex justify-start p-10 items-center">
                <Form
                    initialValues={{
                        file: "",
                    }}
                    onSubmit={(values, action) => {
                        setTimeout(() => {
                            console.log(values);
                            action.setSubmitting(false);
                        }, 100);
                    }}
                    name="submit"
                    className="items-center gap-10 flex flex-col w-full"
                    // validationSchema={() => {}}
                >
                    {(formik) => (
                        <InputImageUpLoad
                            name="file"
                            formik={formik}
                        ></InputImageUpLoad>
                    )}
                </Form>
            </div>
        </ManagerLayout>
    );
};

export default ManagerDashboardPage;
