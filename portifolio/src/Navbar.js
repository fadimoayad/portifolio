import React from 'react';

function NavBar(props){
    return (
        <div className="flex  top-0 left-0  bg-opacity-10 ">
        <ul className="flex  text-center gap-4 ml-4">
            <li ><a className=" hover:text-yellow-600 " >Home</a></li>
            <li ><a className=" hover:text-yellow-600" >About Me</a></li>
            <li ><a className=" hover:text-yellow-600" >PROJECTS</a></li>
            <li ><a className=" hover:text-yellow-600" >CONTACT</a></li>
            <li ><a className=" hover:text-yellow-600" >RESUME</a></li>
            <li onClick={props.handleTheme}><a>dark</a></li>
        </ul>
    </div>
    )
}

export default NavBar;