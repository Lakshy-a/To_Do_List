/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Component_1 from "./Components/Component_1";
import Component_2 from "./Components/Component_2";
import Component_3 from "./Components/Component_3";
import Component_4 from "./Components/Component_4";
import Component_5 from "./Components/Component_5";
import SwipeCard from "./Components/SwipeCard";
import ProfileCard from "./Components/ProfileCard";
import ProfileCard1 from "./Components/ProfileCard1";
import Add_To_Favourites from "./Components/Add_To_Favourites";
import Header from "./Components/Header";

function App() {
  const data = [
    {'name':"Lakshya", 'profession': 'Associate Engineer', image: 'https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA=', friends: false},
    {'name':"Umang", 'profession': 'Nurse', image: 'https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0fGVufDB8fDB8fHww', friends: false},
    {'name':"Milan", 'profession': 'Developer', image: 'https://media.istockphoto.com/id/1150096021/photo/smiling-mature-manager-sitting-at-creative-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=EeyO5sFhpLAVxaUqbzZdQDRCLU4negYbSGYO6UJwc1Q=', friends: false},
    {'name':"Aryan", 'profession': 'Shopify Developer', image: 'https://media.istockphoto.com/id/1413204314/photo/happy-man-at-supermarket-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=3sOzyYdhm9m6nzAYfJ_ZopRu0Jkva4cXpS1Mv-0FLhk=', friends: false}
  ]

  const songsArray = [
    {songName: "ABC", artistName: "DEF", songImage: "https://plus.unsplash.com/premium_photo-1681182425863-b44293a645d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29uZ3N8ZW58MHx8MHx8fDA%3D", isAdded: false},
    {songName: "GHI", artistName: "JKL", songImage: "https://images.unsplash.com/photo-1564554606401-524277241f2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvbmdzfGVufDB8fDB8fHww", isAdded: false},
    {songName: "MNO", artistName: "PQR", songImage: "https://images.unsplash.com/photo-1633329102203-36effd2ca47d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvbmdzfGVufDB8fDB8fHww", isAdded: false},
    {songName: "STU", artistName: "VWX", songImage: "https://images.unsplash.com/photo-1516916759473-600c07bc12d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvbmdzfGVufDB8fDB8fHww", isAdded: false},
  ]

  const [realData, setRealData] = useState(data);
  const [songsData, setSongsData] = useState(songsArray);

  const clickFunction = (cardIndex) => {
    setRealData(
      (previous) => {
        return previous.map(
          (item, index) => {
            if(index == cardIndex){
              return {...item, friends: !item.friends}
            }
            return item;
          }
        )
      }
    )
  }

  const handleFavourites = (favouriteIndex) => {
    setSongsData(
      (previous) => {
        return previous.map(
          (item, index) => {
            if(index == favouriteIndex){
              return {...item, isAdded: !item.isAdded}
            }
            return item;
          }
        )
      }
    )
  }

  return (
    <>
      {/* <div className="w-screen h-screen bg-gray-600 flex justify-center items-center flex-wrap gap-6">
        {realData.map(
          (item, index) => {
            return <ProfileCard1 key={index} clickfunction={clickFunction} cardIndex={index} realData={item}/>
          }
        )}
      </div> */}

      <div className="w-screen h-screen bg-white">
        <Header songsData={songsData}/>
        <div className="w-full h-fit flex items-center justify-center flex-wrap gap-8">
          {songsData.map(
            (item, index) => {
              return <Add_To_Favourites favouritesHandle={handleFavourites} index={index} songsData={item} key={index}/>
            }
          )}
        </div>
      </div>
    </>
  );
}

export default App;
