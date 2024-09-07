/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function MainSection({ pushTodoValue, darkMode }) {
  const [todoValue, setTodovalue] = useState("");

  const handleInputChange = (e) => {
    setTodovalue(e.target.value);
  };

  const valueAddKaro = () => {
    pushTodoValue(todoValue);
    setTodovalue("");
  };

  return (
    <div className={`w-full h-full ${!darkMode ? "bg-white" : "bg-yellow-500"} py-8 flex flex-col items-center`}>
      <div className={`flex h-20 w-fit items-center px-4 gap-4 shadow-xl ${!darkMode ? "" : ""}`}>
        <input
          onChange={(e) => {
            handleInputChange(e);
          }}
          type="text" placeholder="Type Something Here..."
          value={todoValue}
          className={`text-xl font-semibold h-14 w-[450px] border-0 focus:outline-none focus:border-none px-4 rounded-xl ${!darkMode ? "bg-white text-black" : "bg-black text-gray-500"}`}
        />
        <button
          onClick={valueAddKaro}
          className={`${!darkMode ? "bg-yellow-500 text-white" : "bg-black text-gray-500"} px-6 py-4 rounded-xl  text-xl font-semibold`}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default MainSection;
