import React from 'react';
import {Menu}from './Menu';
import {Route ,Switch} from "react-router-dom"
import Home from './Home';
import Blogs from './Blogs';
import AboutUS from './AboutUs';

import Add from './Calc';
import BlogsDetail from './BlogsDetail';
import LoginForm from './LoginForm';
import GetData from './GetData';
import Content from './Content';


function App() {

  return (
    <>
    <Menu firstHeading="Home" secondHeading="blogs" thirdHeading="contact us" fourthHeading ="Sign In"  fifthHeading='Details' sixthHeading="See content"/>
    <Switch>
    <Route path="/Blogs/:1d" component={BlogsDetail} />
    <Route path="/Home" component={Home} />
    <Route path ="/Blogs"  component={(props)=><Blogs sortBy="newest" {...props} />}/>
    <Route path ="/AboutUs" component ={AboutUS} />
    <Route path ="/LoginForm" component = {LoginForm} />
    <Route path="/details" component={GetData}  />
    <Route path ="/Content" component={Content} />
  </ Switch>
  </>
  );
}

export default App;
