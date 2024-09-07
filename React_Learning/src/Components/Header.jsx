/* eslint-disable no-unused-vars */
import React from 'react'

function Header({songsData}) {
  return (
    <>
        <div className='w-full h-32 bg-white flex justify-between items-center px-8'>
            <div className='h-fit w-fit text-orange-400 text-2xl font-bold px-6 py-4 border-2 border-orange-500 rounded-xl'>Orange</div>
            <div className='h-fit w-fit px-6 py-4 rounded-lg bg-orange-400 text-white font-semibold text-xl'>Favourites: {"  "} {songsData.filter(
             (item, index) => {return item.isAdded}
            ).length}</div>
        </div>
    </>
  )
}

export default Header