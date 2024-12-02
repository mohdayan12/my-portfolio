import React,{useState} from 'react'
import{motion} from 'framer-motion';
import { TfiEmail } from "react-icons/tfi";
import { IoMdContact } from "react-icons/io";
import ImageCon from '../../assets/contactImage.jpg';


import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";


const Contacts = () => {
const [username, setUsername]= useState("");
const [email, setEmail]= useState("");
const [message, setMessage]= useState("");
const [errMsg, setErrMsg]= useState("");
const [successMsg, setSuccessMsg]= useState("");

const emailValidation=()=>{
return String(email).toLocaleLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
}


const handleSend=()=>{
if(username===""){
setErrMsg("username required");
}
else if(!emailValidation(email)){
setErrMsg("Give a valid Email");
}
else if(message ===""){
setErrMsg("Message required");
}
else{
setSuccessMsg("Your message is send successfully");
setUsername("");
setEmail("");
setMessage("");
setErrMsg(""); 




}
}
  return (
 <div  id="contact" className=' w-full h-min-screen pt-16 '>
   <div className='flex justify-center w-full '>
    <motion.h1 initial={{opacity:0, x:-100}}
           whileInView={{opacity:1,x:0}}
           transition={{duration:1.5 }}
    className='text-4xl text-white'> Get In Touch
    </ motion.h1>
   </div>
   
    <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-center lg:items-start mt-10 mb-5'> 
       <div className=" lg:w-[45%] lg:mr-[2%]  w-[90%] border-[1px] border-white   bg-gradient-to-r from-black via-slate-800 to-black mb-5 lg:mb-0  rounded-md" style={{ boxShadow: '1px 1px 10px rgb(255,255,255)' }}>
         <div className="flex flex-col items-center mt-4">
            <div className="relative mt-10 w-4/5">
              <IoMdContact className='absolute  ml-3 h-12 pt-[4px]  text-[20px] text-yellow-600'/>
              <input onChange={(e)=>setUsername(e.target.value)} value={username} 
              className={`${errMsg==="username required" && "outline-[red]"} pl-10 h-12 w-full mb-6 rounded-2xl  outline-none  hover:ring-1 ring-yellow-600 text-lg  bg-slate-700  text-white`} type="text" placeholder='Name' />
            </div>
            <div className="relative mt-10  w-4/5 ">
              <TfiEmail className='absolute ml-3 h-12 pt-[4px]  text-[18px] text-yellow-600'/>
              <input  onChange={(e)=>setEmail(e.target.value)}  value={email} 
              className= {`${errMsg === "Give a valid Email" && "outline-[red]"} pl-10 h-12 w-full mb-6 rounded-2xl outline-none hover:ring-1  ring-yellow-600 text-lg bg-slate-700 text-white`} type="email" placeholder='Email' />
            </div>
    
            <div className='w-4/5 my-10'>
              <textarea onChange={(e)=>setMessage(e.target.value)} value={message }  placeholder=" Message" 
              className={`${errMsg === "Message required" && "outline-[red]"} w-full h-40 rounded-2xl outline-none hover:ring-1 ring-yellow-600 px-2 pt-2 text-lg bg-slate-700 text-white `}></textarea>
            </div>
    
      
      <button  onClick={handleSend} type="submit" className=" h-12 w-4/5 bg-yellow-600 text-white  text-xl font-semibold  tracking-wide rounded-2xl ">Send Me</button>
        <div className='h-10  w-full'>
         {errMsg && (<p className="text-[red] text-2xl text-center pt-1 animate-bounce  ">{errMsg}</p>)}
         {successMsg &&(<p className="text-[green] text-2xl text-center pt-1 animate-bounce "> {successMsg}</p>)}
        </div>
        </div>
          
         
        
    </div>
    <div className=" lg:w-[45%] w-[90%]  border-[1px] border-white rounded-md bg-gradient-to-r from-black via-slate-800 to-black " style={{ boxShadow: '1px 1px 10px rgb(255,255,255)'}}>
        <div className='lg:h-52 h-32 w-full flex  justify-center items-center mt-5'>
          <img  className=" lg:h-52 w-[90%] h-32 rounded-sm" src={ImageCon}/>
        </div>
    <div className="mt-6 w-[90%] mx-9 text-base font-thin text-white tracking-wider">
    If you have any query and having a any idea in your mind, feel free to send me a message. You can contact anytime.</div>
    <div className='relative'>
      <div className='mt-6'>
        <div className="flex ml-12">
          <TfiEmail className="text-2xl text-yellow-600 mb-4"/>
          <p className="pl-4 text-white font-thin tracking-wider">mohdayanmalik7@gmail.com </p>
        </div>
        <div className="flex ml-12">
          < FiPhoneCall className='text-2xl text-yellow-600 mb-4 font-thin'/>
          <p className="pl-4 text-white font-thin tracking-wider">+91 8476971464</p>
        </div>
        <div className="flex ml-12 ">
          < SlLocationPin className="text-2xl text-yellow-600 "/>
          <p className="pl-4 text-white font-thin tracking-wider">Pilibhit , India </p>
        </div>
      </div>
      <div className=" "> <p className=" lg:text-3xl text-xl text-yellow-600 font-normal text-center mt-3">Find me </p>
      </div>
     
     <div className="w-full  h-10   flex  justify-center items-center space-x-6 text-2xl text-white mt-4 mb-10"> 
       <span className='p-2  rounded-full hover:bg-black cursor-pointer'> <a href="https://x.com/mohd_ayanmalik " target='_blank'> <FaXTwitter /></a></span>
       <span  className='p-2  rounded-full hover:bg-black cursor-pointer'><a href='https://www.instagram.com/_mohd.ayan__/profilecard/?igsh=MWpoZzY1ZjdpZW4wOA==' target="_blank"><SlSocialInstagram/></a>  </span> 
       <span className='p-2  rounded-full hover:bg-black cursor-pointer'> <a href='https://www.linkedin.com/in/mohd-ayan-273a61282' target="_blank"><FaLinkedinIn /> </a></span> 
       <span className='p-2  rounded-full hover:bg-black cursor-pointer'> <a href="https://wa.me/qr/I4OXBSZ45YZ5G1" target="_blank">< FaWhatsapp/></a></span>  
      
      
      
      </div>
      </div>
      
    </div>
    
</div>
    
    </div>
  )
}

export default Contacts
