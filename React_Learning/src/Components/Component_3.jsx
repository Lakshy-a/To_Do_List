/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Component_2() {
  const [values, setValues] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const addElement = () => {
    setValues([...values, values.push([values.length - 1] + 1)]);
  };

  const removeElement = () => {
    setValues(
        values.filter( value => 
            value !== values[values.length-1] 
        )
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {values.map((value, index) => (
          <h1 key={index}>{value}</h1>
        ))}
        <div className="flex gap-2">
          <button
            onClick={addElement}
            className="px-4 py-2 bg-black text-white rounded-full mt-4">
            Lagao
          </button>
          <button
            onClick={removeElement}
            className="px-4 py-2 bg-black text-white rounded-full mt-4">
            Hatao
          </button>
        </div>
      </div>
    </>
  );
}

export default Component_2;
