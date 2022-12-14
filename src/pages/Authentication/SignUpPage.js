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
                name="????ng k??"
                initialValues={initialFormValues}
                onSubmit={handleSubmit}
                validationSchema={Yup.object({
                    fullName: Yup.string()
                        .min(5, "T??n ph???i c?? ??t nh???t 5 k?? t???")
                        .max(30, "T??n kh??ng ???????c v?????t qu?? 30 k?? t???")
                        .required("T??n kh??ng ???????c b??? tr???ng"),
                    email: Yup.string()
                        .email("Email kh??ng h???p l???!")
                        .required("Email kh??ng ???????c b??? tr???ng"),
                    password: Yup.string()
                        .required("M???t kh???u kh??ng ???????c b??? tr???ng")
                        .matches(
                            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                            "M???t kh???u h???p l??? bao g???m 8 k?? t???, c?? m???t k?? t??? vi???t hoa, m???t k?? t??? vi???t th?????ng, m???t s???, m???t k?? t??? ?????c bi???t "
                        ),
                })}
                footer={
                    <div className="mt-2 md:mt-4 text-slate-500 md:text-base text-xs font-semibold">
                        <span>B???n ???? l?? m???t th??nh vi??n? </span>
                        <NavLink
                            to="/sign-in"
                            className="text-sm md:text-lg text-primary"
                        >
                            ????ng nh???p ngay
                        </NavLink>
                    </div>
                }
            >
                <Field.Input
                    label="T??n"
                    name="fullName"
                    type="text"
                    placeholder="Vui l??ng nh???p t??n c???a b???n"
                    inputClassName=""
                />
                <Field.Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Vui l??ng nh???p email"
                />
                <Field.Input
                    label="M???t kh???u"
                    name="password"
                    type="password"
                    placeholder="Vui l??ng nh???p m???t kh???u"
                />
            </Form>
        </AuthenticationPage>
    );
};

export default SignUpPage;
