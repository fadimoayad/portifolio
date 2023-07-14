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
       
        <div className="flex  relative dark:bg-black bg-lightGray h-full w-full overflow-hidden ">
                   
            <div className='bg-redShade absolute bg-opacity-80 z-0 w-[817px] h-[488px] top-80 left-32 blur-[78px] rounded-full overflow-hidden'> </div>  

            <div className='bg-olive absolute bg-opacity-80 z-0 w-[717px] h-[388px] top-96 left-[480px] blur-[78px] rounded-full overflow-hidden'> </div>  

            <div className='ed absolute z-0 w-[664px] h-[400px] top-[230px] left-[690px] blur-[78px] rounded-full overflow-hidden'> </div>  

            <div className='bg-azureBlue bg-opacity-80 absolute z-0 w-[544px] h-[290px] top-80 left-10 blur-[78px] rounded-full overflow-hidden'> </div>        

        <form className='flex flex-col items-center justify-center z-10 mb-14 ' ref={form} onSubmit={sendEmail}>

            <h1 className='text-8xl mt-8 mb-10 font-normal leading-[147px]'>CONTACT ME</h1>
            <input type="text" name="user_name" placeholder='Your Name...'  className='w-4/5 rounded-xl m-2.5 p-4 z-10 bg-lightGray' /*value={name}
            onChange={(e)=> setName(e.target.value) }*//> 

            <input type="email" name="user_email" placeholder='Your Email...'  className='w-4/5 rounded-xl m-2.5 p-4 z-10 bg-lightGray' />

            <textarea placeholder='Your Message...' name='message' className='w-4/5 rounded-2xl m-2.5 pb-36 pl-4 z-10 pt-4 bg-lightGray'></textarea>

            <button type='submit' className='bg-white px-8 py-4  rounded-2xl font-bold text-black capitalize bg-lightGray mt-4 z-10'>SUBMIT</button>
        </form>
        <div className='flex flex-col items-center mt-80 z-10'>
        <h1>Erbil, Iraq</h1>
        <h1>fadimoayad99@yahoo.com</h1>
        <h1>07508182944</h1>
        </div>

        {/* <div className='flex flex-col items-center'>
        <h1 className='z-10 mb-4'>OR</h1>
        <hr className='p-4 w-1/2'/>
        <div></div>
        </div> */}
        </div> 
    
    )
}

export default ContactUs;