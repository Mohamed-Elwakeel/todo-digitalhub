import React, { useState } from "react";
import styles from "./AddTask.module.css";

export const AddTask = ({ onSubmit }) => {
    const [newTodo, setNewTodo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newTodo === "") return

        onSubmit(newTodo);
        setNewTodo("")
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
            <button className={styles.addTaskBtn}>Add</button>
        </form>
    );
};
