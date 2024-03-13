import { useFormik } from 'formik';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        // Initial values for the input fields
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: yup.object({
            email: yup.string().email("Invalid email address").required("Required"),
            password: yup.string().required("Required"),
        }),

        onSubmit: (values) => {
            console.log("signIn", JSON.stringify(values, null, 2))
            navigate("/")

        }
    })

    return (
        <div className={styles.loginContainer}>
            <header>Sign In</header>
            <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
                <button type="submit">Sign In</button>
            </form>
            <Outlet />
        </div>
    )
}

export default LoginPage
