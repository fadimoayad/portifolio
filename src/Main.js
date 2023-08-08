import React from "react";
import ContactUs from "./ContactUs";
import f from './images/contactPage/f.pdf'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moon from './images/moon.png'
import Projects from "./Projects";

function Main(){
    return(
      <div className="w-full relative overflow-hidden ">
        <div className="fad w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] rounded-full -top-44  -right-44  absolute z-0"></div>
        <div className="fadi w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] rounded-full top-72 -left-10 lg:left-10 absolute z-0"></div>
        <div className="fadi collapse lg:visible lg:w-[350px] lg:h-[350px] lg:rounded-full top-96 lg:right-80  absolute z-0"></div>

       
        
       <div className="flex flex-col mt-10 ml-6 lg:ml-36 lg:mt-24 text-xl lg:text-6xl">
       <h1 className=" font-normal mb-2 mt-14 font-extrabold z-10">Hi,</h1>
       <h1 className=" font-normal mb-2  font-extrabold	z-10">I'm Fadi,</h1>
       <h1 className=" font-normal mb-2 font-bold	z-10">Web Developer</h1>
       <h1 className="text-xl lg:text-lg font-normal mb-2 font-thin		z-10">Frontend Web Developer</h1>
        <div className="mt-8 z-20">
        <a className=" hover:text-yellow-600" download={f} href={f}> 
         <button className="border border-black	dark:border-white text-sm lg:text-xl font-normal px-4  lg:px-10 py-2" >Download Resume</button>
         </a>
        </div>

        </div>
        <a href="#secound" className="absolute left-1/2 mt-14 "><FontAwesomeIcon icon={faArrowDown} bounce  size="xl" ></FontAwesomeIcon></a>

        <div id="secound" className=" mt-48 ">
        <Projects className="bubbles:hidden"/>
        </div>

       </div>
      
    )
}

export default Main;