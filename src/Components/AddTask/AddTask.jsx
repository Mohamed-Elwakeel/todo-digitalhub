import React from "react";
import styles from "./AddTask.module.css";

export const AddTask = () => {
    return (
        <form className={styles.addTaskContainer}>
            <div>
                <label htmlFor="new-item">Add new task</label>
                <input
                    className={styles.taskInput}
                    type="text"
                    id="new-item"
                    placeholder="What needs to be done?"
                ></input>
            </div>
            <button className={styles.addTaskBtn}>Add</button>
        </form>
    );
};
