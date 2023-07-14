import React,{ useRef }  from 'react';
import { Route, Routes, Link, Router, BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Main from './Main';
import ContactUs from './ContactUs';
import About from './About';
import f from './images/contactPage/f.pdf'
import sun from './images/sun.png'
import moon from './images/moon.png'


function NavBar(props){
    const navRef =useRef(null);

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <BrowserRouter>
        
        <nav className="flex pr-2 pl-8  gap-6 py-2 bg-zinc-900  dark:bg-lightGray text-white  dark:text-black
         w-auto sticky top-0 z-30" ref={navRef}>
        
            <Link to="/" className=" hover:text-yellow-600 ">Home</Link>
            <Link to="About" className=" hover:text-yellow-600" >About</Link>
            <Link to="ContactUs" className=" hover:text-yellow-600" >Contact</Link>
            <a className=" hover:text-yellow-600" download={f} href={f}>Resume</a>
          
        <div onClick={props.handleTheme} className='flex gap-2 cursor-pointer'>
        <img src={sun} className='h-6 w-6 hidden dark:block '/>

            <img src={moon} className='h-6 w-6 dark:hidden'/>         
            </div>

            <button className=' ml-auto  mt-1 lg:hidden ' onClick={showNavBar}>
        <FontAwesomeIcon icon={faBars} className='w-5 h-5'></FontAwesomeIcon>
        </button>

            {/* <div className='ml-auto flex gap-2 mr-2'>                      
        <a href='https://github.com/fadimoayad ' target="_blank">
                    <svg  className='cursor-pointer' width="25px" height="25px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">

            <defs>

        </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" >
                <g  id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000" className='cursor-pointer fill-white dark:fill-black  '>
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">

        </path>
                    </g>
                </g>
            </g>
        </svg>
        </a>

        <a href='https://www.linkedin.com/in/fadi-moayad-8702801b3' target="_blank">
        <svg className='fill-white dark:fill-black' width="25px" height="25px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">

        <rect x="0" fill="none" width="20" height="20"/>

        <g>

        <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"/>

        </g>

        </svg>
        </a>

        </div> */}
      
    </nav>
       <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
            <Route path="/About" element={<About />}></Route>
        </Routes> 
        </BrowserRouter>
    )
}

export default NavBar;