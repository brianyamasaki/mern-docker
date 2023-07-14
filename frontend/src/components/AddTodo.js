import React from "react";

const AddTodo = ({handleAddTodo}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.value;
    if (value.length > 0) {
      handleAddTodo(value);
      e.target.reset();
    }
  };

  
  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="new-todo form-group"
    >
      <input
        type="text"
        name="value"
        required
        minLength={1}
        className="form-control"
      />
      <button className="btn btn-primary" type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;