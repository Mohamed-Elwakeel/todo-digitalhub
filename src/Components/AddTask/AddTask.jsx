import React, { useState } from "react";
import styles from "./AddTask.module.css";

export const AddTask = ({ onSubmit }) => {
    const [newTodo, setNewTodo] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newTodo === "") return;
        onSubmit(newTodo, description);
        setNewTodo("");
        setDescription("");
    }

    return (
        <form onSubmit={handleSubmit} className={styles.addTaskContainer}>
            <label className={styles.taskInputLabel} htmlFor="new-todo">
                Add new task
            </label>
            <input
                className={styles.taskInput}
                type="text"
                id="new-todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="What needs to be done?"
            ></input>
            <label className={styles.taskInputLabel} htmlFor="description">
                Add task description
            </label>
            <input
                className={`p-4 ${styles.taskInput}`}
                value={description}
                type="text"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write a description for your task..."
            ></input>
            <button className={styles.addTaskBtn}>Add</button>
        </form>
    );
};
