/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Component_4() {
  const [data, setData] = useState({ name: "Lakshya", isBanned: false });

  const handleClick = () => {
    setData({...data, isBanned : !data.isBanned});
  }

  return <>
   <div className="flex flex-col justify-center items-center h-screen w-screen ">
   <h1>{data.name}</h1>
   <h1>{data.isBanned.toString()}</h1>
   <button onClick={handleClick} className= {`px-4 py-2 rounded-full mt-4 text-white ${data.isBanned ? 'bg-blue-500' : 'bg-red-500'}`}>{data.isBanned ? 'Ban Karo' : 'Unban Karo'}</button>
   </div>
  </>;
}

export default Component_4;
