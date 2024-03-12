import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import styles from "./TaskList.module.css";

export default function TaskList({ todos, deleteTodo, toggleTodo, editTodo }) {
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editedTodoText, setEditedTodoText] = useState("");

    const handleEditChange = (e) => {
        setEditedTodoText(e.target.value);
    };

    const handleEditSubmit = (id) => {
        if (editedTodoText.trim() !== "") {
            editTodo(id, editedTodoText);
            setEditingTodoId(null);
            setEditedTodoText("");
        }
    };

    const handleKeyUp = (e, id) => {
        if (e.key === "Enter") {
            handleEditSubmit(id);
        }
    };

    return (
        <ul className={styles.listContainer}>
            {/* {todos.length === 0 && "No Todos available"} */}
            {todos.map((todo) => {
                return (
                    <div className={styles.taskContainer} key={todo.id}>
                        <li className={styles.taskItem}>
                            <input
                                className={styles.taskCheck}
                                type="checkbox"
                                checked={todo.completed}
                                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                            />
                            {editingTodoId === todo.id ? (
                                <input
                                    type="text"
                                    value={editedTodoText}
                                    onChange={handleEditChange}
                                    onBlur={() => handleEditSubmit(todo.id)}
                                    onKeyUp={(e) => handleKeyUp(e, todo.id)}
                                />
                            ) : (
                                <p
                                    className={`${styles.taskText} ${todo.completed ? styles.checked : ""
                                        }`}
                                    onDoubleClick={() => {
                                        setEditingTodoId(todo.id);
                                        setEditedTodoText(todo.title);
                                    }}
                                >
                                    {todo.title}
                                </p>
                            )}
                        </li>
                        <EditIcon
                            className={styles.editBtn}
                            onClick={() => {
                                setEditingTodoId(todo.id);
                                setEditedTodoText(todo.title);
                            }}
                        />
                        <DeleteForeverIcon
                            className={styles.deleteBtnTask}
                            onClick={() => deleteTodo(todo.id)}
                        />
                    </div>
                );
            })}
        </ul>
    );
}
