import React from 'react';
import {BrowserRouter, Routes ,Route } from "react-router-dom";
import Main from './Main';
import { useState, useEffect } from 'react';
import NavBar from './Navbar';
import ContactUs from './ContactUs';
function App() {
  const [theme,setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }

  } , [theme]);

  const handleTheme = () =>{
    setTheme(theme === "dark" ? "light" :"dark");
  };


  return (
    <div className="bg-lightGray dark:bg-jaguar  dark:text-white text-black">    
      <NavBar handleTheme={handleTheme}/>

  
    </div>
  )
}

export default App;
