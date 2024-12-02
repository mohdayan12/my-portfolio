import React, { useState } from 'react' 
import  ayan from '../../assets/ayan.jpg'
import { RxCross2 } from "react-icons/rx";
import { CgMenu } from "react-icons/cg";
const Navbar = () => {

  const handleScroll=(id)=>{ 
  document.getElementById(id).scrollIntoView({
  
  behavior:'smooth',
  block:'start'
  });
  };
  let [open,setOpen]=useState(false);
  
  return (
    <>
    <nav className="fixed top-0 z-50 text-white w-full h-12 md:h-16 bg-transparent backdrop-blur backdrop-brightness-125 flex justify-between flex-wrap  ">
    <div className=" pl-7 md:pl-16 text-4xl  h-16 pt-[4px]" ><img src={ayan} className='overflow-hidden md:h-14 h-10'/></div>
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute  right-8 top-2 cursor-pointer md:hidden'>{open ?<RxCross2 />:<CgMenu/>} </div> 
    <ul className={`md:flex md:space-x-10 md:items-center justify-between md:pb-0 md:static md:z-auto md:w-auto md:pl-0
    absolute bg-slate-900 md:bg-transparent text-white right-0 pl-9 py-6 md:py-0 z-[-1] top-14 w-[200px] transition-all duration-500 ease-linear ${open ?'right-0 opacity-100':' opacity-0'} md:opacity-100`}>

      <li onClick={()=>handleScroll('home')} className="cursor-pointer hover:text-yellow-300 font-semibold md:text-base mb-5 md:mb-0 text-xl"> Home</li>
      <li onClick={()=>handleScroll('project')} className="cursor-pointer hover:text-yellow-300 font-semibold  md:text-base mb-5 md:mb-0 text-xl"> Projects</li>
      <li onClick={()=>handleScroll('skill')} className="cursor-pointer hover:text-yellow-300 font-semibold md:text-base md:mb-0 mb-5 text-xl"> Skills</li>
      <li onClick={()=>handleScroll('contact')}className="cursor-pointer hover:text-yellow-300 font-semibold md:text-base md:mb-0 mb-5 text-xl">Contact Us</li>
       <div className='md:pr-16'><button className='bg-yellow-500 text-white px-3 py-2 rounded-lg mb-5 text-xl md:mb-0'>CV/Resume</button></div>
    </ul>
   
    
   
   
   </nav>
   </>
  )
}

export default Navbar
