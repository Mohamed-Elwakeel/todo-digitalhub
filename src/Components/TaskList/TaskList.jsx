import React from "react";
import Task from "../Task/Task";
import styles from "./TaskList.module.css";

export default function TaskList({ todos, deleteTodo, toggleTodo, editTodo }) {

    return (
        <ul className={styles.listContainer}>
            {/* {todos.length === 0 && "No Todos available"} */}
            {todos.map((todo) => (
                <Task
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                />
            ))}
        </ul>
    );
}
