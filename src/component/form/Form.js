import { Form as FormFormik, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Button from "../Button";

const Form = ({
    className = "",
    onSubmit = () => {},
    initialValues,
    validationSchema,
    buttonSubmitClassName = "",
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
                            "md:max-w-[650px] w-full mx-auto flex flex-col gap-2 md:gap-3 md:p-3 justify-center items-center"
                        }`}
                    >
                        {children}
                        <Button
                            isLoading={formik.isSubmitting}
                            type="submit"
                            className={` h-[50px] max-w-none mt-3  md:h-[70px] md:max-w-[350px] md:mt-5 ${buttonSubmitClassName}`}
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
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    validationSchema: PropTypes.object,
    footer: PropTypes.node,
};

export default Form;
