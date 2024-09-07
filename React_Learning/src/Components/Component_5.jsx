/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Component_5() {
    const [arrayValues, setArrayValues] = useState([1, 2, 3, 4, 5]);

    const addElementHandler = () => {
        if(arrayValues.length == 0)
            setArrayValues([0]);

        setArrayValues([...arrayValues, arrayValues[arrayValues.length - 1] + 1])
    }

    const removeElementHandler = () => {
        setArrayValues(
            arrayValues.filter(
                (value, index) => index != arrayValues.length - 1
            )
        )
    }

  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        {arrayValues.map(
            (values, index) => <h1 className="text-white" key={index} >{values}</h1>
        )}
        <div className='flex gap-4 mt-4'>
            <button className='bg-green-500 px-4 py-2 rounded-full text-white' onClick={addElementHandler}>Add Element</button>
            <button className='bg-red-500 px-4 py-2 rounded-full text-white' onClick={removeElementHandler}>Remove Element</button>
        </div>
    </div>
  )
}

export default Component_5