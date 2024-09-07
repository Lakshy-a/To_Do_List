/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Component_1() {
  const [values, setValues] = useState({ Name: "Lakshya", Banned: false });

  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col gap-4 justify-center items-center text-3xl">
      <h1>{values.Name}</h1>
      <h1>{values.Banned.toString()}</h1>
      <button
        onClick={() => {
          setValues({ ...values, Banned: !values.Banned });
        }}
        className={`px-4 py-2 rounded-full text-white ${
          values.Banned ? "bg-blue-600" : "bg-red-600"
        }`}
      >
        Ban Karo
      </button>
    </div>
  );
}

export default Component_1;
