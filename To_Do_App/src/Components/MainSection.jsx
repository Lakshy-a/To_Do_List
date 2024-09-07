/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function MainSection({pushTodoValue, handleDarkMode}) {
  const [todoValue, setTodovalue] = useState("");
  

  const handleInputChange = (e) => {
    setTodovalue(e.target.value);
  };

  const valueAddKaro = () => {
    pushTodoValue(todoValue);
    setTodovalue("");
    // alert("Hello");
  };

//   const removeToDoValue = (index) => {
//     const updatedArray = [...todos];
//     updatedArray.splice(index, 1);
//     setTodos(updatedArray);
//   };

  return (
    <div className="w-full h-full bg-white py-8 flex flex-col items-center ">
      <div className="flex h-20 w-fit items-center px-4 gap-4 shadow-xl">
        <input
          onChange={(e) => {
            handleInputChange(e);
          }}
          type="text"
          value={todoValue}
          className="text-xl font-semibold h-14 w-[450px] border-0 focus:outline-none focus:border-none"
        />
        <button
          onClick={valueAddKaro}
          className="bg-yellow-500 px-6 py-4 rounded-xl text-white text-xl font-semibold"
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default MainSection;
