import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type Your New ToDo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some(
            //if any of our todos text has text equal to the current input value
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(input);
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create ToDo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (state) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
