/* eslint-disable no-unused-vars */
import React from "react";

function TodoCounter({ todos, darkMode }) {
  const notCompletedLength = todos.filter(
    (item, index) => !item.isCompleted
  ).length;

  const completedLength = todos.filter(
    (item, index) => item.isCompleted
  ).length;

  return (
    <div className={`w-full h-fit ${!darkMode ? 'bg-yellow-500 text-black' : 'bg-black text-gray-500'} py-6 flex justify-center gap-20 absolute bottom-0 `}>
      <h1 className="text-4xl font-bold">Total Todos: {notCompletedLength}</h1>
      <h1 className="text-4xl font-bold">Completed Todos: {completedLength}</h1>
    </div>
  );
}

export default TodoCounter;
