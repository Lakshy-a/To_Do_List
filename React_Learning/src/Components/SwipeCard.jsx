/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

function SwipeCard() {
  const [val, setVal] = useState(false);

  return (
    <>
      <div className='h-96 w-96 bg-white rounded-xl overflow-hidden flex relative'>
        {/* Image 1 */}
        <img
          className={`shrink-0 h-full w-full ${val ? "-translate-x-[100%]" : "translate-x-0"} transition-transform duration-700`}
          src="https://images.unsplash.com/photo-1720884413532-59289875c3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
          alt="Some image"
        />

        {/* Image 2 */}
        <img
          className={`shrink-0 h-full w-full absolute top-0 ${val ? 'translate-x-0' : 'translate-x-[100%]'} transition-transform duration-700`}
          src="https://images.unsplash.com/phto-1710609942195-b9dab8f48fc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
          alt=" image"
        />

        {/* Arrow Button */}
        <span
          className='cursor-pointer absolute bottom-10 right-44 text-3xl rounded-full px-3 py-3 bg-[#dadada7b]' 
          onClick={() => setVal(!val)}
        >
          {val ? <FaArrowLeftLong /> : <FaArrowRightLong />}
        </span>
      </div>
    </>
  )
}

export default SwipeCard;
