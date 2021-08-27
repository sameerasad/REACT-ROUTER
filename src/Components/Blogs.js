import React from "react";
import { Link } from 'react-router-dom';


const data  = [{id:1,name:"technology"},{id:2,name:"fashion"}, {id:3,name:"lifestyle"}]

const Blogs = () =>{
  

    return <>
    <h1>Blogs</h1>
    <ul>{data.map(blog=>(<li key={ blog.id }><Link to={ `/blogs/${blog.id}`} >{blog.name}</Link></li>))}</ul>
           </>
   
}
export default Blogs;