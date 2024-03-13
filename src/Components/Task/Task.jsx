import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Chip } from "@mui/material";
import React, { useState } from "react";
import styles from "./Task.module.css";

export default function Task({ todo, deleteTodo, toggleTodo, editTodo, editDescription }) {
    const [editingTodo, setEditingTodo] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [editedTodoText, setEditedTodoText] = useState(todo.title);
    const [selectedStatus, setSelectedStatus] = useState(todo.status);
    const [editedDescription, setEditedDescription] = useState(todo.description);

    const handleEditChange = (e) => {
        setEditedTodoText(e.target.value);
    };

    const handleEditSubmit = () => {
        if (editedTodoText.trim() !== "") {
            editTodo(todo.id, editedTodoText);
            setEditingTodo(false);
        }
    };

    function handleDescriptionChange(e) {
        setEditedDescription(e.target.value);
    }

    function handleDescriptionSubmit() {
        if (editedDescription.trim() !== "") {
            editDescription(todo.id, editedDescription);
            setIsEditingDescription(false);
        }
    }

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            handleEditSubmit();
            handleDescriptionSubmit();
        }
    };

    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        setSelectedStatus(newStatus);
        toggleTodo(todo.id, newStatus);
    };

    return (
        <div className={styles.taskContainer}>
            <div className="d-flex align-items-center flex-column  py-3">
                <li className={styles.taskItem}>
                    <div className="d-flex flex-column">
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
                            // <div className="d-flex flex-column">
                            <div className="d-flex">
                                <h3
                                    className={`${styles.taskText} ${todo.status === "Finished" ? styles.checked : ""
                                        }`}
                                    onDoubleClick={() => {
                                        setEditingTodo(true);
                                    }}
                                >
                                    {todo.title}
                                </h3>
                                <EditIcon
                                    className={styles.editBtn}
                                    onClick={() => {
                                        setEditingTodo(true);
                                    }}
                                />
                            </div>
                        )}
                        {isEditingDescription ? (
                            <input
                                type="text"
                                value={editedDescription}
                                onChange={handleDescriptionChange}
                                onBlur={handleDescriptionSubmit}
                                onKeyUp={handleKeyUp}
                                autoFocus
                            />
                        ) : (
                            <div className="d-flex">
                                <p
                                    className={`${styles.taskDescription} ${todo.status === "Finished" ? styles.checked : ""
                                        }`}
                                    onDoubleClick={() => {
                                        setEditingTodo(true);
                                    }}
                                >
                                    {todo.description}
                                </p>
                                <EditIcon
                                    className={styles.editBtn}
                                    onClick={() => {
                                        setIsEditingDescription(true);
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </li>
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
                        <option value="Not Started" defaultValue={true}>
                            Not Started
                        </option>
                        <option value="In Progress">In Progress</option>
                        <option value="Finished">Finished</option>
                    </select>
                    <DeleteForeverIcon
                        className={styles.deleteBtnTask}
                        onClick={() => deleteTodo(todo.id)}
                    />
                </div>
            </div >
        </div>
    );
}
