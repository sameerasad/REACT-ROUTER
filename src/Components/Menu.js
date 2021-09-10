
import React from 'react'; 
import {Link} from "react-router-dom"
import "./App.css"


 
export const Menu = (props) =>{
   // console.log(props);
    const {firstHeading,secondHeading,thirdHeading,fourthHeading,fifthHeading,sixthHeading}= props;
 //console.log(firstHeading,secondHeading,thirdHeading);

    function name(){
        return "sameer"
    }
return(
    <div className="menu">
       <Link to="Home"> {firstHeading} </Link>
       <Link to="Blogs"> {secondHeading} </Link>
       <Link to="AboutUS"> {thirdHeading} </Link>
       <Link to="LoginForm"> {fourthHeading} </Link>
       <Link to="details">{fifthHeading}</Link>
       <Link to ="Content">{sixthHeading}</Link>
       
    </div>
)
};
 


