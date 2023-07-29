import React from 'react'
import moon from './images/moon.png'
import project from './images/project.png'
function Projects() {
  return (
        
       <div className="grid w-full  h-screen " id="secound">
           {/* <div className="fs lg:w-[400px] lg:h-[400px] rounded-full top-72 left-10 absolute z-0"></div>
        <div className="f w-[700px] h-[700px] rounded-full -top-44 -right-44  absolute z-0"></div>
        <div className="circle shadow-yellow-300 w-[350px] h-[350px] rounded-full top-96 right-80  absolute z-0"></div> */}


                 
{/* <div className='bg-redShade absolute bg-opacity-80 z-0 w-[817px] h-[488px] top-80 left-32 blur-[78px] rounded-full overflow-hidden'> </div>  

<div className='bg-olive absolute bg-opacity-80 z-0 w-[717px] h-[388px] top-96 left-[480px] blur-[78px] rounded-full overflow-hidden'> </div>  

<div className='ed absolute z-0 w-[664px] h-[400px] top-[230px] left-[690px] blur-[78px] rounded-full overflow-hidden'> </div>  

<div className='bg-azureBlue bg-opacity-80 absolute z-0 w-[544px] h-[290px] top-80 left-10 blur-[78px] rounded-full overflow-hidden'> </div>         */}

        <div  className='mt-24 z-10 flex flex-col items-center	gap-12'>

       <div className="card flex flex-col md:flex-row w-4/5 md:w-3/5 h-80 md:h-72 shadow-2xl  ">
         <img src={project} className='md:w-2/5 h-3/5 md:h-full '></img>
         <div className='bg-lightGray h-full p-8 md:w-3/5 h-2/5 md:h-full rounded-tr-3xl rounded-br-3xl shadow-2xl '>
         <h1 >sugar-and-thunder</h1>
         </div>
       </div>  


       <div className="card flex flex-col md:flex-row  w-4/5 md:w-3/5 h-80 md:h-72 shadow-2xl  ">
         <img src={project} className='md:w-2/5 h-3/5 md:h-full '></img>
         <div className='bg-lightGray p-8 md:w-3/5 h-2/5 md:h-full rounded-tr-3xl rounded-br-3xl shadow-2xl h-full'>
         <h1 >Cross Road Restaurant</h1>
         </div>
       </div>    
   
    </div>
    </div>
    
  )
}

export default Projects;