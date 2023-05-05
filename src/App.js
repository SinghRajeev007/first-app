import axios from 'axios';
import React, { useEffect, useState } from 'react';

 export default function App() {
  const[photo, setPhoto]=useState("")
 useEffect(() => {
    fetchPhoto()
  }, []);
   function fetchPhoto(){
    axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then((res) => setPhoto(res.data.message))
    .catch((err) => console.log(err));
   }



  return (
    <div>
      <button onClick={fetchPhoto}>Pic</button>
       <img src={photo}/>
    </div>
  );
}
