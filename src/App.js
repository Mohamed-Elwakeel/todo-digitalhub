import "./App.css";
import { AddTask } from "./Components/AddTask/AddTask";

function App() {
  return (
    <div className="App">
      <div className="App">
        <div className="todoCard">
          <div className="App-header">
            <header>Todo List</header>
          </div>
          <AddTask />
        </div>
        <div className="appInfo">
          <div>Created with: React JS, Material UI, CSS3, & Redux toolkit</div>
          <div>Coded by: Mohamed Elwakeel</div>
        </div>
      </div>
    </div>
  );
}

export default App;
