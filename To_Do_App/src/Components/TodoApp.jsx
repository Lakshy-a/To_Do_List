/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import TodoCounter from "./TodoCounter";
import ShowTodoValue from "./ShowTodoValue";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  
  const handleDarkMode = () => {
    {!darkMode ? <MdOutlineDarkMode /> : <MdLightMode />}
    setDarkMode(!darkMode)
};

  const pushTodoValue = (todo) => {
    setTodos([...todos, {todoValue: todo, isCompleted:false}]);
  };

  const removeToDoValue = (removeIndex) => {
    const updatedArray = [...todos];
    updatedArray.splice(removeIndex, 1);
    setTodos(updatedArray);
  };

  const completedToDo = (completedIndex) => {
    setTodos(
        todos.map(
            (todo, index) => {
                if(index == completedIndex)
                    return {...todo, isCompleted: !todo.isCompleted}
                return todo
            }
        )
    );
  };

  return (
    <div>
      <Header handleDarkMode={handleDarkMode}/>
      <MainSection pushTodoValue={pushTodoValue} handleDarkMode={handleDarkMode}/>
      <ShowTodoValue todos={todos} removeToDoValue={removeToDoValue} completedToDo={completedToDo} handleDarkMode={handleDarkMode}/>
      <TodoCounter todos={todos} handleDarkMode={handleDarkMode}/>
    </div>
  );
}

export default TodoApp;
