/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Header({handleDarkMode}) {
    // const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeHeader = () => {handleDarkMode};

  return (
    <div className="w-full h-fit bg-yellow-500 py-6 relative">
      <h1 className="text-center text-4xl font-bold">TODO LIST</h1>
      <span className="absolute text-3xl cursor-pointer left-2/3 bottom-7" onClick={handleDarkModeHeader}>
        
      </span>
    </div>
  );
}

export default Header;
