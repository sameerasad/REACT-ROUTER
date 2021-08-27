import React from "react";
import { Route,Link } from "react-router-dom";
import Blogs from './Blogs';


const BlogsDetail=(props)=>{
    console.log(props.match.params);

function handleSave(){
    //navigate to blogs
    <Route path="/Blogs" component={Blogs}  ></Route>
}
    return<>
        <h1>BlogsDetail {props.match.params.id}!</h1>

        <button onClick={()=>handleSave()}><Link to="/Blogs">Save</Link></button>

        </>

}

export default BlogsDetail;