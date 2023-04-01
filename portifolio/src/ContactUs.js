import { addDoc, collection } from 'firebase/firestore';
import React,{ useState } from 'react';
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { db } from './firebase';

function ContactUs(){
// const [name, setName]= useState("");
// const [Email, setEmail]= useState("");
// const [Message, setMesaage]= useState("");

// const coll=collection(db, "contacts")

// const HandleSubmit=(e)=>{
//     e.preventDefault();
//     addDoc(coll,{
//         name:name,
//         Email:Email,
//         Message:Message,
//     })
// .then(()=>{
//     alert("message has been sent")
// })
// .catch((err)=>{
//     alert(err.message)
// })

// setName("")
// setMesaage("")
// setEmail("")
// }


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
        <div className="dark:bg-black bg-lightGray">
           
        <form className='flex flex-col items-center justify-center z-0' ref={form} onSubmit={sendEmail}>
            <h1 className='text-8xl mt-8 mb-4 font-normal leading-[147px]'>CONTACT ME</h1>
            <input type="text" name="user_name" placeholder='Your Name...'  className='w-3/4 rounded-xl m-2.5 p-4 z-10 bg-lightGray' /*value={name}
            onChange={(e)=> setName(e.target.value) }*//> 

            <input type="email" name="user_email" placeholder='Your Email...'  className='w-3/4 rounded-xl m-2.5 p-4 z-10 bg-lightGray' />

            <textarea placeholder='Your Message...' name='message' className='w-3/4 rounded-2xl m-2.5 pb-36 pl-4 z-10 pt-4 bg-lightGray'></textarea>

            <button type='submit' className='bg-white px-8 py-4 rounded-2xl font-bold text-black capitalize bg-lightGray'>SUBMIT</button>
        </form>
        <div className="fad rounded-full w-60 h-60 absolute left-2/4 top-60 z-0">
            
            </div>
    
            <div className="fadi rounded-full w-60 h-60 absolute left-1/4 top-60 z-0">
                
                </div>
    
        </div>
    )
}

export default ContactUs;