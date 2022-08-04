import React, { useEffect } from "react";
import { Form, InputField } from "../../component/form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "../../firebase-app/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import AuthenticationPage from "./AuthenticationPage";
import * as Yup from "yup";
import { useAuth } from "../../context/authContext";

const initialFormValues = {
    email: "",
    fullName: "",
    password: "",
};

const SignUpPage = () => {
    const navigate = useNavigate();
    const { userInfo } = useAuth();
    useEffect(() => {
        if (userInfo) {
            navigate("/");
        }
        document.title = "Register";
    }, []);
    const handleSubmit = async (values, action) => {
        await toast.promise(
            createUserWithEmailAndPassword(auth, values.email, values.password),

            {
                pending: "Plase Wait ...",
                success: "Registration success!",
                error: {
                    render({ data }) {
                        const errorMess = data.message.includes(
                            "auth/email-already-in-use"
                        )
                            ? "Email already exists"
                            : "Registration failed!";
                        return errorMess;
                    },
                },
            }
        );

        const colRef = collection(db, "users");
        await addDoc(colRef, {
            fullName: values.fullName,
            email: values.email,
            password: values.password,
        });
        await updateProfile(auth.currentUser, {
            displayName: values.fullName,
        });
        action.setSubmitting(false);
        action.resetForm(initialFormValues);
        navigate("/");
    };
    return (
        <AuthenticationPage>
            <Form
                name="Sign Up"
                initialValues={initialFormValues}
                onSubmit={handleSubmit}
                validationSchema={Yup.object({
                    fullName: Yup.string()
                        .min(5, "Full name must contain 5 characters")
                        .max(30, "Full name must be 30 character or less")
                        .required("Full name is required field"),
                    email: Yup.string()
                        .email("Email must be a valid email")
                        .required("Email is required field"),
                    password: Yup.string()
                        .required("Please Enter your password")
                        .matches(
                            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                            "Password must contain 8 characters, one uppercase, one lowercase, one number and one special case Character"
                        ),
                })}
                footer={
                    <div className="mt-4 text-slate-500 text-base font-semibold">
                        You are a member?{" "}
                        <NavLink to="/sign-in" className="text-lg text-primary">
                            Login Now
                        </NavLink>
                    </div>
                }
            >
                {() => (
                    <>
                        <InputField
                            label="Full name"
                            name="fullName"
                            type="text"
                            placeholder="Please enter your full name"
                        />
                        <InputField
                            label="Email address"
                            name="email"
                            type="email"
                            placeholder="Please enter your email"
                        />
                        <InputField
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Please enter your password"
                        />
                    </>
                )}
            </Form>
        </AuthenticationPage>
    );
};

export default SignUpPage;
