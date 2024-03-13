import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import styles from "./AddTask.module.css";

export const AddTask = ({ onSubmit }) => {
    // const [newTodo, setNewTodo] = useState("");
    // const [description, setDescription] = useState("");

    const formik = useFormik({
        // Initial values for the input fields
        initialValues: {
            todoTitle: "",
            todoDescription: "",
        },

        validationSchema: yup.object({
            todoTitle: yup
                .string("Enter you todo title")
                .trim()
                .min(3, "Must be more than 3 characters")
                .required("Required")
                .matches(/^[a-zA-Z ]*$/, "You must enter your todo title"),
            todoDescription: yup
                .string("Enter you todo description")
                .trim()
                .min(3, "Must be more than 3 letters")
                .required("Required")
                .matches(/^[a-zA-Z0-9 ]{3,30}$/, "You must enter your todo description"),
        }),
        onSubmit: (values, { setSubmitting }) => {
            onSubmit(values.todoTitle, values.todoDescription);
            setSubmitting(false);
        },
    });

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if (newTodo === "") return;
    //     onSubmit(newTodo, description);
    //     setNewTodo("");
    //     setDescription("");
    // }

    return (
        <form onSubmit={formik.handleSubmit} className={styles.addTaskContainer}>
            <label className={styles.taskInputLabel} htmlFor="new-todo">
                Add new task
            </label>
            <input
                className={styles.taskInput}
                type="text"
                id="new-todo"
                placeholder="What needs to be done?"
                {...formik.getFieldProps("todoTitle")}
            />
            {formik.touched.todoTitle && formik.errors.todoTitle ? (
                <div className={styles.formikError}>{formik.errors.todoTitle}</div>
            ) : null}
            <label className={styles.taskInputLabel} htmlFor="description">
                Add task description
            </label>
            <input
                className={`p-4 ${styles.taskInput}`}
                type="text"
                id="description"
                placeholder="Write a description for your task..."
                {...formik.getFieldProps("todoDescription")}
            />
            {formik.touched.todoDescription && formik.errors.todoDescription ? (
                <div className={styles.formikError}>{formik.errors.todoDescription}</div>
            ) : null}
            <button className={styles.addTaskBtn}>Add</button>
        </form>
    );
};
