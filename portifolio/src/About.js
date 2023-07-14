import React from "react";
import webDeveloper from  './images/contactPage/webDeveloper.png'
import webDeveloper2 from  './images/contactPage/webDeveloper2.png'
function About(){
    return(
        <div className="flex flex-col relative  h-full w-full  overflow-hidden">
           
            <div className="flex justify-center">
            <h1 className='text-3xl lg:text-8xl mt-24 mb-20 font-normal lg:leading-[147px] uppercase z-10'>about me</h1>
            </div>

            <div className="flex flex-col ">
                <div className="flex flex-col items-center gap-12 md:flex-col lg:flex-row  md:justify-center ">

                    <div className="mx-6 flex flex-col  z-20  lg:w-1/2 lg:mx-0 mb-32 ">
                        <h1 className="uppercase text-2xl lg:text-5xl font-normal lg:leading-[100px] mt-14 ">fadi moayed</h1>
                        <p className="text-md md:text-lg lg:text-2xl ">As a junior web developer and junior DBA, 
                        I bring a diverse skill set and a passion for creating efficient
                         and user-friendly web solutions. My name is Fadi, and I am based in Baghdad.</p>
                    </div>

                    <div className="w-1/2 flex justify-end lg:-mt-20 lg:-ml-20 ">
                    <div className='ed absolute z-10 w-[230px] h-[250px] lg:w-[430px] lg:h-[350px]  blur-[78px]  rounded-full'> </div> 
                    <div className='bg-azureBlue bg-opacity-80 absolute z-0 w-[298px] h-[250px] lg:w-[498px] lg:h-[350px] -m-28 blur-[78px] rounded-full'> </div> 
                    <div className='bg-olive bg-opacity-80 absolute z-0 w-[298px] h-[250px] lg:w-[498px] lg:h-[350px] mr-20 blur-[78px] rounded-full'> </div> 
                    <img src={webDeveloper} className="w-[441px] h-[421px] z-10 -mt-28 lg:mt-0 lg:mr-10"/>
                    </div>

                </div>

                <div className="flex flex-col-reverse  items-center lg:flex-row mt-20">
                    <div className=" w-1/2 mb-8">
                        
                    <div className="flex ml-10">
                    <div className='ed absolute z-10 blur-[78px] rounded-full w-[300px] h-[400px] ml-28'> </div> 
                    <div className='bg-azureBlue bg-opacity-80 absolute z-0 blur-[78px] rounded-full w-[300px] h-[400px] -m-20'> </div> 
                    <div className='bg-olive bg-opacity-80 absolute z-0 blur-[78px] rounded-full w-[300px] h-[400px] mt-20'> </div> 
                    <img src={webDeveloper2} className="w-[441px] h-[421px] z-10 "/>
                    </div>

                    </div>

                    <div className="mx-6 mb-40 lg:w-1/2 lg:mx-0 ">
                    <h1 className="uppercase text-2xl lg:text-5xl font-normal lg:leading-[100px] mt-14">Web Development</h1>
                        <p className="text-md md:text-lg lg:text-2xl">In addition to my hands-on experience,
                         I have also completed a 300-hour Front-End Bootcamp, where I honed my skills and learned from industry experts. 
                         This program allowed me to gain a deeper understanding of the front-end development process, from design to deployment. 
                         It was also an opportunity for me to practice my skills and work on real-world projects,
                         helping me to gain the confidence and expertise I need to succeed as a front-end developer</p>
                    </div>
                </div>

             
            </div>
        </div>
    )
}

export default About;