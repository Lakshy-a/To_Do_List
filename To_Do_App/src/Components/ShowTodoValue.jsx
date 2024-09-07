/* eslint-disable no-unused-vars */
import React from "react";

function ShowTodoValue({ todos, removeToDoValue, completedToDo,darkMode }) {
    const changeIsCompleted = (index) => {
        completedToDo(index);
    }

  return (
    <div className={` h-96 ${!darkMode ? "bg-white" : "bg-yellow-500"} flex flex-col items-center`}>
      <div className={`flex flex-col gap-2`}>
        {todos.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex h-12 w-fit items-center px-4 gap-4 shadow-lg ${!darkMode ? "bg-white" : "bg-black rounded-xl"}`}
            >
              <h2 onClick={() => {changeIsCompleted(index)}} className={`text-xl font-semibold w-[400px] border-0 focus:outline-none focus:border-none flex items-center ${!item.isCompleted ? "no-underline" : "line-through"} ${!darkMode ? "bg-white text-black" : " text-gray-500"}`}>
                {item.todoValue}
              </h2>
              <button
                onClick={() => {
                  removeToDoValue(index);
                }}
                className={`${!darkMode ? "bg-yellow-500 text-white" : "bg-black text-gray-500"} py-2 px-4 rounded-xl font-bold text-xl`}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowTodoValue;
