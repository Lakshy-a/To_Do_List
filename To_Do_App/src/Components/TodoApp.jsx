/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import TodoCounter from "./TodoCounter";
import ShowTodoValue from "./ShowTodoValue";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const pushTodoValue = (todo) => {
    setTodos([...todos, { todoValue: todo, isCompleted: false }]);
  };

  const removeToDoValue = (removeIndex) => {
    const updatedArray = [...todos];
    updatedArray.splice(removeIndex, 1);
    setTodos(updatedArray);
  };

  const completedToDo = (completedIndex) => {
    setTodos(
      todos.map((todo, index) => {
        if (index == completedIndex)
          return { ...todo, isCompleted: !todo.isCompleted };
        return todo;
      })
    );
  };

  return (
    <div>
      <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <MainSection
        pushTodoValue={pushTodoValue}
        handleDarkMode={handleDarkMode}
        darkMode={darkMode}
      />
      <ShowTodoValue
        todos={todos}
        removeToDoValue={removeToDoValue}
        completedToDo={completedToDo}
        darkMode={darkMode}
      />
      <TodoCounter todos={todos} handleDarkMode={handleDarkMode} darkMode={darkMode}/>
    </div>
  );
}

export default TodoApp;
