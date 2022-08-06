import React, { useEffect } from "react";
import { Form, Field } from "../../component/form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebase-app/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import * as Yup from "yup";
import { useAuth } from "../../context/authContext";

const initialFormValues = {
    email: "",
    password: "",
};

const languageData = {
    en: {
        formTitle: "Log in",
        notifyPending: "Please wait ...",
        notifyLoginSuccess: "Login success!",
        notifyLoginFail: {
            accountNotFound: "Couldn't find your account!",
            loginFail: "Login failed!",
        },
        emailField: {
            label: "Email address",
            placeholder: "Please Enter your email",
            error: {
                invalid: "Email must be a valid email",
                required: "Email is required field",
            },
        },
        passwordField: {
            label: "Password",
            placeholder: "Please Enter your password",
            error: {
                invalid:
                    "Password must contain 8 characters, one uppercase, one lowercase, one number and one special case Character",
                required: "Password is required field",
            },
        },
        formDirectional: {
            text: " You don't have an account?",
            link: "Create Your Account",
        },
    },
    vi: {
        formTitle: "Đăng nhập",
        notifyPending: "Vui Lòng đợi ...",
        notifyLoginSuccess: "Đăng nhập thành công!",
        notifyLoginFail: {
            accountNotFound: "Tài khoản không tồn tại!",
            loginFail: "Đăng nhập thất bại!",
        },
        emailField: {
            label: "Email",
            placeholder: "Vui lòng nhập email",
            error: {
                invalid: "Email không hợp lệ",
                required: "Email là không được bỏ trống ",
            },
        },
        passwordField: {
            label: "Mật khẩu",
            placeholder: "Vui lòng nhập mật khẩu",
            error: {
                required: "Mật khẩu không hợp lệ",
                invalid:
                    "Mật khẩu hợp lệ bao gồm 8 kí tự, có một kí tự viết hoa, một kí tự viết thường, một số, một kí tự đặc biệt ",
            },
        },
        formDirectional: {
            text: "Bạn là thành viên mới?",
            link: "Tạo tài khoản ngay",
        },
    },
};

const SignInPage = () => {
    const lang = languageData.vi;
    const navigate = useNavigate();
    const { userInfo } = useAuth();
    useEffect(() => {
        document.title = lang.formTitle;
        if (userInfo) {
            navigate("/");
        }
    }, [lang.formTitle]);
    const handleSubmit = async (values, action) => {
        await toast.promise(
            signInWithEmailAndPassword(auth, values.email, values.password),
            {
                pending: lang.notifyPending,
                success: lang.notifyLoginSuccess,
                error: {
                    render({ data }) {
                        const errorMess = data.message.includes(
                            "auth/user-not-found"
                        )
                            ? lang.notifyLoginFail.accountNotFound
                            : lang.notifyLoginFail.loginFail;
                        return errorMess;
                    },
                },
            }
        );
        action.setSubmitting(false);
        action.resetForm(initialFormValues);
        navigate("/");
    };
    return (
        <AuthenticationPage>
            <Form
                name={lang.formTitle}
                initialValues={initialFormValues}
                onSubmit={handleSubmit}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email(lang.emailField.error.invalid)
                        .required(lang.emailField.error.required),
                    password: Yup.string()
                        .required(lang.passwordField.error.required)
                        .matches(
                            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                            lang.passwordField.error.invalid
                        ),
                })}
                footer={
                    <div className="mt-4 text-slate-500 text-base font-semibold">
                        {lang.formDirectional.text + " "}
                        <NavLink to="/sign-up" className="text-lg text-primary">
                            {lang.formDirectional.link}
                        </NavLink>
                    </div>
                }
            >
                {() => (
                    <>
                        <Field.Input
                            label={lang.emailField.label}
                            name="email"
                            type="email"
                            placeholder={lang.emailField.placeholder}
                        />
                        <Field.Input
                            label={lang.passwordField.label}
                            name="password"
                            type="password"
                            placeholder={lang.passwordField.placeholder}
                        />
                    </>
                )}
            </Form>
        </AuthenticationPage>
    );
};

export default SignInPage;
