/* eslint-disable no-unused-vars */
import React from 'react'

const handleFriendsClick = (clickfunction, cardIndex) => {
    clickfunction(cardIndex);
}

function ProfileCard1({realData, clickfunction, cardIndex}) {
    const {name, profession, image, friends} = realData;
  return (
    <>
        <div className='h-fit w-48  rounded-t-xl overflow-hidden'>
            <div className='w-full h-36 '>
                <img src={image} alt='profile_1' className='h-36 w-fit object-cover'/>
            </div>
            <div className='bg-white flex flex-col justify-center items-center'>
                <div className='mt-2 font-bold'>{name}</div>
                <div className='font-semibold text-md'>{`(${profession})`}</div>
                <button onClick={() => handleFriendsClick(clickfunction, cardIndex)} className={`${!friends ? 'bg-blue-500' : 'bg-green-500'} text-white px-4 py-2 rounded-full mt-2 mb-4`}>{!friends ? 'Add Friend' : 'Friends'}</button>
            </div>
        </div>
    </>
  )
}

export default ProfileCard1