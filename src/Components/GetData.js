import React, { useEffect, useState } from 'react';
import axios from 'axios';



function GetData() {
    const [users,setUsers] =useState([])
   
    useEffect(()=>{
        async function fetchData (){
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setUsers(response.data)
         }
        fetchData()
        },[])

    return (
        <div >
            
            <ol>{users.map(details=><li key={details.id}>{details.title}</li>)}</ol>
        </div>
        
    );
}

export default GetData;