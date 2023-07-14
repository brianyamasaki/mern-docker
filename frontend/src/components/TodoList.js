import React from "react";

const TodoList = ({todos}) => {

  const [activeIndex, setActiveIndex ] = React.useState(0);

  const handleActive = (index) => {
    setActiveIndex(index);
  }

  const renderTodos = (todos) => {
    return (
      <ul className="list-group">
        {todos.map((todo, i) => (
          <li
            className={
              "list-group-item cursor-pointer " +
              (i === activeIndex ? "active" : "")
            }
            key={i}
            onClick={() => {
              handleActive(i);
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    );
  }

  return todos.length > 0 ? (
    renderTodos(todos)
  ) : (
    <div className="alert alert-primary" role="alert">
      No Todos to display
    </div>
  );
}

export default TodoList;