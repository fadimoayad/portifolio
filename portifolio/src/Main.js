import React from "react";
import ContactUs from "./ContactUs";
function Main(){
    return(
      <div>
        <div className="flex relative h-screen w-full overflow-hidden" id="first">
        <div className="fadi lg:w-[400px] lg:h-[400px] rounded-full top-72 left-10 absolute z-0"></div>
        <div className="fad w-[700px] h-[700px] rounded-full -top-44 -right-44  absolute z-0"></div>
        <div className="fadi w-[350px] h-[350px] rounded-full top-96 right-80  absolute z-0"></div>

       <div className="flex flex-col  ml-36 mt-24 ">
        <h1 className=" text-6xl font-normal mb-2 mt-14 font-extrabold z-10">Hi,</h1>
       <h1 className=" text-6xl font-normal mb-2  font-extrabold	z-10">I'm Fadi,</h1>
       <h1 className=" text-6xl font-normal mb-2 font-bold	z-10">Web Developer</h1>
       <h1 className=" text-lg font-normal mb-2 font-thin		z-10">Frontend Web Developer</h1>
        <div className="mt-8 z-20">
      <a href="/ContactUs"  > <button className="border border-black	dark:border-white text-xl font-normal px-10 py-2" >Contact Me</button></a>
        </div>
      
       </div>
        
      
       </div>
       <div className="flex justify-center ">
        <a href="#first" className="absolute bottom-20">down</a>
       </div>

       <div className="flex">
        <div >

        </div>
       </div>
       </div>
      
    )
}

export default Main;