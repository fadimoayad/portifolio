import React from 'react';

function SideBar(){
    return (
<div className="flex rounded-2xl items-center top-0 left-0 h-screen  bg-opacity-10 ">
        <ul className="flex-col space-y-20 text-center px-4 ">
            <li ><a className="text-white hover:text-yellow-600 " >Home</a></li>
            <li ><a className="text-white hover:text-yellow-600" >About Me</a></li>
            <li ><a className="text-white hover:text-yellow-600" >PROJECTS</a></li>
            <li ><a className="text-white hover:text-yellow-600" >CONTACT</a></li>
            <li ><a className="text-white hover:text-yellow-600" >RESUME</a></li>
        </ul>
    </div>
)
}

export default SideBar;