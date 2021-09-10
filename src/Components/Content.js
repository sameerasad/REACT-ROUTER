import React, { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function Content() {

    const [image, setImage]=useState([])

    useEffect(()=>{
      async function getResponse(){
          const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
          setImage(response.data)
          console.log(response.data)
      }
      getResponse()
    },[])
   
   
return (
        <>
        
    
        {
        image.map(images=><div className="card" key={images.id}>
          <img src={images.url} alt={images.alt}  /> 
          <div className="container">
          <h4><b></b></h4>
          <p>{images.titles}</p>
          </div>
</div>)
}
    
  
 

  </>
   );
}

export default Content;