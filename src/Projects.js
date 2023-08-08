import React from 'react'
import moon from './images/moon.png'
import project from './images/project.png'
function Projects() {
  return (
        
       <div className="grid w-full  h-screen " id="secound">
        
        <div  className='mt-24 z-10 flex flex-col items-center	gap-12'>

       <div className="card flex flex-col md:flex-row w-4/5 md:w-3/5 h-80 md:h-72 shadow-2xl  ">
         <img src={project} className='md:w-2/5 h-3/5 md:h-full '></img>
         <div className='bg-lightGray h-full p-8 md:w-3/5 h-2/5 md:h-full rounded-tr-3xl rounded-br-3xl shadow-2xl '>
         <h1 >sugar-and-thunder</h1>
         </div>
       </div>  

    <a className=" flex flex-col md:flex-row  w-4/5 md:w-3/5 h-80 md:h-72 shadow-2xl  " href='https://endearing-arithmetic-8d667a.netlify.app/'>
         <img src={project} className='md:w-2/5 h-3/5 md:h-full '></img>
         <div className='bg-lightGray p-8 md:w-3/5 h-2/5 md:h-full rounded-tr-3xl rounded-br-3xl shadow-2xl h-full'>
         <h1 >Cross Road Restaurant</h1>
         </div>
       </a>
    </div>
    </div>
    
  )
}

export default Projects;