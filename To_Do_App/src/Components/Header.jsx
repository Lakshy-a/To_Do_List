/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Header({darkMode, handleDarkMode}) {
    // const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeHeader = () => {handleDarkMode()};

  return (
    <div className={`w-full h-fit ${!darkMode ? "bg-yellow-500" : "bg-black"} py-6 relative`}>
      <h1 className={`text-center text-4xl font-bold ${!darkMode ? "text-black" : "text-gray-500"}`}>TODO LIST</h1>
      <span className={`absolute text-3xl cursor-pointer left-2/3 bottom-7 ${!darkMode ? "text-black" : "text-gray-500"}`} onClick={handleDarkModeHeader}>
      {!darkMode ? <MdOutlineDarkMode /> : <MdLightMode />}
      </span>
    </div>
  );
}

export default Header;
