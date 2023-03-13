import React,{ useState } from 'react';
import { db } from './firebase';

function ContactUs(){
const [name, setName]= useState("");
const [Email, setEmail]= useState("");
const [Message, setMesaage]= useState("");

const HandleSubmit=(e)=>{
    e.preventDefault();

    db.collection("contacts").add({
        name:name,
        Email:Email,
        Message:Message
}).then(()=>{
    alert("message has been sent")
})
.catch((err)=>{
    alert(err.message)
})

setName("")
setMesaage("")
setEmail("")
}


    return(
        <form onSubmit={HandleSubmit}>
            <label>Name</label>
            <input type="text" name="name" placeholder='Name' value={name}
            onChange={(e)=> setName(e.target.value) }/>

            <label>Email</label>
            <input type="email" name="email" placeholder='Email'  value={Email}
            onChange={(e)=> setEmail(e.target.value) }/>

            <label>Message</label>
            <textarea placeholder='Message' value={Message}
            onChange={(e)=> setMesaage(e.target.value) }></textarea>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default ContactUs;