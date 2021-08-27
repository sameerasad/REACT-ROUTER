import React from 'react';
import {Menu}from './Menu';
import {Route ,Switch} from "react-router-dom"
import Home from './Home';
import Blogs from './Blogs';
import AboutUS from './AboutUs';
import Add from './Calc';
import BlogsDetail from './BlogsDetail';



function App() {

  return (
    <>
    <Menu firstHeading="Home" secondHeading="blogs" thirdHeading="contact us" />
    <Switch>
    <Route path="/Blogs/:1d" component={BlogsDetail} />
    <Route path="/Home" component={Home} />
    <Route path ="/Blogs"  component={(props)=><Blogs sortBy="newest" {...props} />}/>
    <Route path ="/AboutUs" component ={AboutUS} />
  </ Switch>
 <h1>SUM : {Add(2,3)}</h1>
    </>
  );
}

export default App;
