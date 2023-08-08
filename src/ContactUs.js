import { addDoc, collection } from 'firebase/firestore';
import React,{ useState } from 'react';
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { db } from './firebase';

function ContactUs(){
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_57geprg', 'template_xakbx3n', form.current, 'g1EWg_I6lo2ZRVgkO')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent")
      }, (error) => {
          console.log(error.text);
          alert(error.text);
      });
  };




    return(
       
        <div className=" relative dark:bg-black bg-lightGray h-screen w-full overflow-hidden ">

          <div className='flex  justify-center '>
  <div className='bg-redShade absolute bg-opacity-80 z-0 w-[450px] h-[300px] lg:w-[817px]
   lg:h-[488px] -ml-40 mt-40  md:-ml-48 md:mt-52 blur-[78px] rounded-full overflow-hidden'> </div>  

  <div className='bg-olive absolute bg-opacity-80 z-0 w-[400px] h-[300px] lg:w-[717px] 
  lg:h-[388px] -ml-60 mt-52 md:-ml-72 md:mt-52 lg:-ml-96 lg:mt-80 blur-[78px] rounded-full overflow-hidden'> </div>  

  <div className='ed absolute z-0 w-[430px] h-[300px] lg:w-[664px] lg:h-[500px]  blur-[78px]
   ml-[350px] mt-40 md:ml-[400px] md:mt-52 lg:ml-[500px] lg:mt-52 rounded-full overflow-hidden'> </div>  

  <div className='bg-azureBlue bg-opacity-80 absolute z-0 w-[360px] h-[290px] lg:w-[544px]
   lg:h-[290px] -ml-[500px] mt-52  lg:-ml-[700px] lg:mt-72  blur-[78px] rounded-full overflow-hidden'> </div>   

  </div>

        <form className='flex flex-col items-center justify-center z-10 mb-14 ' ref={form} onSubmit={sendEmail}>

            <h1 className='text-3xl md:text-4xl md:mt-10 lg:text-8xl lg:mt-14 mb-10 font-normal leading-[147px]'>CONTACT ME</h1>
            <input type="text" name="user_name" placeholder='Your Name...'  
            className='placeholder:text-sm lg:placeholder:text-lg w-4/5 lg:w-3/5 rounded-xl m-2.5 p-2 lg:p-4 z-10 bg-lightGray' /> 

            <input type="email" name="user_email" placeholder='Your Email...'  
            className='placeholder:text-sm lg:placeholder:text-lg w-4/5 lg:w-3/5 rounded-xl m-2.5 p-2 lg:p-4  z-10 bg-lightGray' />

            <textarea placeholder='Your Message...' name='message' 
            className='placeholder:text-sm lg:placeholder:text-lg w-4/5 lg:w-3/5 rounded-2xl m-2.5 md:pb-24 lg:pb-36 p-2 lg:p-4  z-10 pt-4 bg-lightGray'></textarea>

            <button type='submit' className='bg-white px-7 lg:px-8 py-2 lg:py-4  rounded-2xl font-bold
             text-black capitalize bg-lightGray mt-4 z-10'>SUBMIT</button>
        </form>
       
         
        {/* <div className='flex flex-col items-center mt-80 z-10'>
        <h1>Erbil, Iraq</h1>
        <h1>fadimoayad99@yahoo.com</h1>
        <h1>07508182944</h1>
        </div> */}

    

        
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
        </div> 
    
    )
}

export default ContactUs;