import React from "react";
import { Formik, Form as FormFormik } from "formik";
import Button from "../Button";
import PropTypes from "prop-types";

const Form = ({
    className = "",
    onSubmit = () => {},
    initialValues,
    validationSchema,
    name,
    footer,
    children,
}) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => {
                return (
                    <FormFormik
                        className={`${
                            className ||
                            "max-w-[650px] w-full mx-auto flex flex-col gap-3 p-3 justify-center items-center"
                        }`}
                    >
                        {children(formik)}
                        <Button
                            isLoading={formik.isSubmitting}
                            type="submit"
                            className="h-[70px] max-w-[350px] mt-5 "
                        >
                            {name}
                        </Button>
                        {footer}
                    </FormFormik>
                );
            }}
        </Formik>
    );
};

Form.propTypes = {
    className: PropTypes.string,
    children: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    validationSchema: PropTypes.object,
    footer: PropTypes.node,
};

export default Form;
