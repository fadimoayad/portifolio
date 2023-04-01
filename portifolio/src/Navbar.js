import React from 'react';
import { Route, Routes, Link, Router, BrowserRouter } from 'react-router-dom';
import Main from './Main';
import ContactUs from './ContactUs';
import About from './About';
function NavBar(props){
    return (
        <BrowserRouter>
        <nav className="flex pr-2 pl-8  gap-4 py-2 bg-black  dark:bg-lightGray text-white  dark:text-black">
        
            <Link to="/" className=" hover:text-yellow-600 ">Home</Link>
            <Link to="About" className=" hover:text-yellow-600" >About</Link>
            <Link to="ContactUs" className=" hover:text-yellow-600" >Contact</Link>
            <Link className=" hover:text-yellow-600" >Resume</Link>
            
        <div onClick={props.handleTheme} className="ml-auto	"><a>dark</a></div>
      
    </nav>
       <Routes>
            <Route path='/' element=""></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
            <Route path="/About" element={<About />}></Route>
        </Routes> 
        </BrowserRouter>
    )
}

export default NavBar;