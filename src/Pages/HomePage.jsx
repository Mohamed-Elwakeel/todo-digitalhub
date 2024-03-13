import React, { useEffect, useState } from "react";
import { AddTask } from "../Components/AddTask/AddTask";
import TaskList from "../Components/TaskList/TaskList";


export default function HomePage() {
    const [todos, setTodos] = useState(() => {
        const values = localStorage.getItem("TASKS")
        if (values === null) {
            return []
        } else {
            return JSON.parse(values)
        }
    });

    useEffect(() => {
        localStorage.setItem("TASKS", JSON.stringify(todos))
    }, [todos])

    // Add todo input function
    function addTodo(title, description) {
        setTodos(currentTodos => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title, description, status: "Not Started" },
            ]
        })
    }

    // Delete todo for list
    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }

    // Toggle between the status of todo
    function toggleTodo(id, newStatus) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, status: newStatus };
                }
                return todo;
            });
        });
    }

    // Edit the todo text 
    function editTodo(id, newTitle) {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, title: newTitle };
                }
                return todo;
            });
        });
    }

    // Edit the todo description
    function editDescription(id, newDescription) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, description: newDescription };
                }
                return todo;
            });
        });
    }

    return (
        <div className="App">
            <div className="App">
                <div className="todoCard">
                    <AddTask onSubmit={addTodo} />
                    <TaskList
                        todos={todos}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                        editDescription={editDescription}
                    />
                </div>
                <div className="appInfo">
                    <div>Created with: React JS, Material UI, and CSS3</div>
                    <div>Coded by: Mohamed Elwakeel</div>
                </div>
            </div>
        </div>
    );
}
