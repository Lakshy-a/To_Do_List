/* eslint-disable no-unused-vars */
import React from 'react'

const favouritesHandleKaro = (favouritesHandle, index) => {
    favouritesHandle(index);
}

function Add_To_Favourites({songsData, favouritesHandle, index}) {
    const {songName, artistName, songImage, isAdded} = songsData;
  return (
    <>
        <div className=' w-fit h-fit py-16 flex justify-center items-center flex-wrap'>
            <div className='border-2 border-orange-500 w-fit h-28 bg-white rounded-lg p-1'>
                <div className='flex w-48 h-3/4 rounded-lg overflow-hidden'>
                    <div className='w-1/2 h-full bg-black'>
                        <img src={songImage} alt={songName} className='h-full w-full object-cover'/>
                    </div>
                    <div className='px-2'>
                        <div className='font-bold text-lg'>{songName}</div>
                        <div className='font-semibold text-sm'>{artistName}</div>
                    </div>
                </div>
                <div className='relative w-full h-fit flex justify-center'>
                    <button className={`absolute px-4 py-1 rounded-full ${!isAdded ? 'bg-orange-500' : 'bg-blue-500'} top-4 text-white font-semibold text-sm`} onClick={() => {favouritesHandleKaro(favouritesHandle, index)}}>{!isAdded ? "Add To Favourites" : "Added"}</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Add_To_Favourites