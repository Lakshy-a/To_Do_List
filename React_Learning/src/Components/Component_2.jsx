/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Component_2() {
  const [values, setValues] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const clickHandler = () => 
    {
        setValues((newValue) =>
            newValue.filter((value, index) => {
                return index !== newValue.length - 1;
            })
        );
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {values.map((item) => (
          <h1 key={item}>{item}</h1>
        ))}
        <button
          onClick={clickHandler}
          className="px-4 py-2 bg-black text-white rounded-full mt-4"
        >
          Hatao
        </button>
      </div>
    </>
  );
}

export default Component_2;
