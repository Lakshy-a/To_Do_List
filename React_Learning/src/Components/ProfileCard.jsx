import React from "react";

const handleClick = (cardIndex, clickFunction) => {
    clickFunction(cardIndex);
}

function ProfileCard({ values, cardIndex, clickFunction }) {
    const { image, name, profession, friends } = values;

    return (
        <div className="h-fit bg-white w-fit rounded-t-xl overflow-hidden">
            <div className="w-full h-40">
                <img src={image} alt={`${name}'s profile`} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center items-center py-2 gap-1">
                <h2 className="text-lg font-bold text-gray-900">{name}</h2>
                <h2 className="text-md font-bold text-gray-900">{profession}</h2>
                <button 
                    onClick={() => handleClick(cardIndex, clickFunction)} 
                    className={`${!friends? 'bg-blue-500' : 'bg-green-500'} rounded-full px-4 py-2 mt-2 text-white`}
                >
                    {!friends ? "Add Friend" : "Friends"}
                </button>
            </div>
        </div>
    );
}

export default ProfileCard;
