/* eslint-disable no-unused-vars */
import React from "react";

function ShowTodoValue({ todos, removeToDoValue, completedToDo,handleDarkMode }) {
    const changeIsCompleted = (index) => {
        completedToDo(index);
    }

  return (
    <div className="w-full h-full bg-white py-8 flex flex-col items-center ">
      <div className={`mt-4`}>
        {todos.map((item, index) => {
          return (
            <div
              key={index}
              className="flex h-20 w-fit items-center px-4 gap-4 shadow-lg"
            >
              <h2 onClick={() => {changeIsCompleted(index)}} className={`text-xl font-semibold w-[400px] border-0 focus:outline-none focus:border-none flex items-center ${!item.isCompleted ? "no-underline" : "line-through"}`}>
                {item.todoValue}
              </h2>
              <button
                onClick={() => {
                  removeToDoValue(index);
                }}
                className="bg-yellow-500 py-2 px-4 rounded-xl text-white font-bold text-xl"
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
