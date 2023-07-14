import React from "react";
import axios from "axios";
import "./App.scss";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [ todos, setTodos ] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api")
      .then((response) => {
        setTodos(response.data.data);
      })
      .catch((e) => console.log("Error : ", e));
  }, []);

  const handleAddTodo = (value) => {
    axios
      .post("/api/todos", { text: value })
      .then(() => {
        setTodos([...todos, { text: value }])
      })
      .catch((e) => console.log("Error : ", e));
  };

  return (
    <div className="App container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
            <h1>Todos</h1>
            <div className="todo-app">
              <AddTodo handleAddTodo={handleAddTodo} />
              <TodoList todos={todos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;