import { useState } from "react";
import "./App.css";
import { AddTask } from "./Components/AddTask/AddTask";
import TaskList from "./Components/TaskList/TaskList";

function App() {
  const [todos, setTodos] = useState([]);

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
          // console.log(todo.status)
          return { ...todo, status: newStatus };
        }
        return todo;
      });
    });
  }

  // Edit the todo text and description
  function editTodo(id, newTitle) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, title: newTitle };
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
          <TaskList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
        </div>
        <div className="appInfo">
          <div>Created with: React JS, Material UI, and CSS3</div>
          <div>Coded by: Mohamed Elwakeel</div>
        </div>
      </div>
    </div>
  );
}

export default App;
