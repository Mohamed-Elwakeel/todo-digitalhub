import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Chip } from "@mui/material";
import React, { useState } from "react";
import styles from "./Task.module.css";

export default function Task({ todo, deleteTodo, toggleTodo, editTodo }) {
    const [editingTodo, setEditingTodo] = useState(false);
    const [editedTodoText, setEditedTodoText] = useState(todo.title);
    const [selectedStatus, setSelectedStatus] = useState(todo.status);

    const handleEditChange = (e) => {
        setEditedTodoText(e.target.value);
    };

    const handleEditSubmit = () => {
        if (editedTodoText.trim() !== "") {
            editTodo(todo.id, editedTodoText);
            setEditingTodo(false);
        }
    };

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            handleEditSubmit();
        }
    };

    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        setSelectedStatus(newStatus);
        toggleTodo(todo.id, newStatus);
        // console.log('newStatus', newStatus)
    };

    // useEffect(() => {
    //     // console.log(selectedStatus)
    // }, [selectedStatus])

    return (
        <div className={styles.taskContainer}>
            <div className="d-flex align-items-center justify-content-center py-3">
                <li className={styles.taskItem}>
                    {editingTodo ? (
                        <input
                            type="text"
                            value={editedTodoText}
                            onChange={handleEditChange}
                            onBlur={handleEditSubmit}
                            onKeyUp={handleKeyUp}
                            autoFocus
                        />
                    ) : (
                        <div className="d-flex flex-column">
                            <h3
                                className={`${styles.taskText} ${todo.status === "Finished" ? styles.checked : ""
                                    }`}
                                onDoubleClick={() => {
                                    setEditingTodo(true);
                                }}
                            >
                                {todo.title}
                            </h3>
                            <p
                                className={`${styles.taskDescription} ${todo.status === "Finished" ? styles.checked : ""
                                    }`}
                                onDoubleClick={() => {
                                    setEditingTodo(true);
                                }}
                            >
                                {todo.description}
                            </p>
                        </div>
                    )}
                </li>
            </div>
            <div className={styles.btnSection}>
                <Chip
                    color={`${todo.status === "Finished" ? "success" : todo.status === "In Progress" ? "warning" : "error"}`}
                    label={selectedStatus}
                    className={`${styles.statusChip}`}
                />
                <select
                    name="todo status"
                    className={styles.statusSelect}
                    value={selectedStatus}
                    onChange={handleStatusChange}
                >
                    <option value="Not Started" selected>
                        Not Started
                    </option>
                    <option value="In Progress">In Progress</option>
                    <option value="Finished">Finished</option>
                </select>
                <EditIcon
                    className={styles.editBtn}
                    onClick={() => {
                        setEditingTodo(true);
                    }}
                />
                <DeleteForeverIcon
                    className={styles.deleteBtnTask}
                    onClick={() => deleteTodo(todo.id)}
                />
            </div>
        </div>
    );
}
