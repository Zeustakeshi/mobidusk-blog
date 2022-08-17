import React, { useEffect } from "react";
import { Form, Field } from "../../component/form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "../../firebase-app/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import AuthenticationPage from "./AuthenticationPage";
import * as Yup from "yup";
import { useAuth } from "../../context/authContext";
import { useApp } from "../../context/appContext";

const initialFormValues = {
    email: "",
    fullName: "",
    password: "",
};

const SignUpPage = () => {
    const navigate = useNavigate();
    const { userInfo } = useAuth();
    const { isMobile } = useApp();
    useEffect(() => {
        if (userInfo) {
            navigate("/");
        }
        document.title = "Register";
    }, [navigate, userInfo]);
    const handleSubmit = async (values, action) => {
        await toast.promise(
            async () => {
                await createUserWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password
                );
                await updateProfile(auth.currentUser, {
                    displayName: values.fullName,
                });
                await setDoc(doc(db, "users", auth.currentUser.uid), {
                    fullName: values.fullName,
                    email: values.email,
                    password: values.password,
                    avatar: "",
                    habits: [],
                });
            },
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

        action.resetForm(initialFormValues);
        navigate("/");
        action.setSubmitting(false);
    };
    return (
        <AuthenticationPage>
            <Form
                name="Đăng kí"
                initialValues={initialFormValues}
                onSubmit={handleSubmit}
                validationSchema={Yup.object({
                    fullName: Yup.string()
                        .min(5, "Tên phải có ít nhất 5 kí tự")
                        .max(30, "Tên không được vượt quá 30 kí tự")
                        .required("Tên không được bỏ trống"),
                    email: Yup.string()
                        .email("Email không hợp lệ!")
                        .required("Email không được bỏ trống"),
                    password: Yup.string()
                        .required("Mật khẩu không được bỏ trống")
                        .matches(
                            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                            "Mật khẩu hợp lệ bao gồm 8 kí tự, có một kí tự viết hoa, một kí tự viết thường, một số, một kí tự đặc biệt "
                        ),
                })}
                footer={
                    <div className="mt-2 md:mt-4 text-slate-500 md:text-base text-xs font-semibold">
                        <span>Bạn đã là một thành viên? </span>
                        <NavLink
                            to="/sign-in"
                            className="text-sm md:text-lg text-primary"
                        >
                            Đăng nhập ngay
                        </NavLink>
                    </div>
                }
            >
                <Field.Input
                    label="Tên"
                    name="fullName"
                    type="text"
                    placeholder="Vui lòng nhập tên của bạn"
                    inputClassName=""
                />
                <Field.Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Vui lòng nhập email"
                />
                <Field.Input
                    label="Mật khẩu"
                    name="password"
                    type="password"
                    placeholder="Vui lòng nhập mật khẩu"
                />
            </Form>
        </AuthenticationPage>
    );
};

export default SignUpPage;
