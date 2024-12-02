import React from 'react';
import ayan from '../../assets/ayan.jpg';
import Typing from './Typing';
import{motion} from 'framer-motion';

const Home = () => {
  
  return (
   
    <div  id='home' className="md:flex w-full mb-24  md:justify-center md:items-center pt-20  ">
        <div className="text-white w-full lg:w-1/2  flex flex-col   pl-10">
            <motion.h1
           initial={{x:-100,opacity:0}}
           animate={{x:0,opacity:1}}
           transition={{duration:2,delay:0.5}}
           

            className="text-4xl mb-4 font-thin xl:text-6xl ">HI I'M <span className=" text-yellow-300">MOHD AYAN</span>
           </motion.h1>
           
           <motion.span 
           initial={{x:-100,opacity:0}}
           animate={{x:0,opacity:1}}
           transition={{duration:1,delay:1}}
           className="text-3xl mb-6 font-normal  xl:text-4xl 
           bg-[linear-gradient(to_right,_#6b46c1_10%,_#ec4899_40%)] bg-clip-text  text-transparent lg:mb-10">
            <Typing/>
            </motion.span>
            
            <motion.p
             initial={{x:-100,opacity:0}}
             animate={{x:0,opacity:1}}
             transition={{duration:2,delay:1.5}} 
            className=" text-[25px] xl:text-2xl  font-light tracking-wide ">
              I am a passionate MERN STACK developer.I have honed my skills in front-end technologies like React and Javascript
               as well as back-end technologies like Node.js,Express.js and MongoDB.My role is to integrate
               these technologies to creates seamless user experience.
            </motion.p>
            
        </div>
       
         <div  className="lg:w-1/2 w-full mt-8 md:mt-0  flex flex-col justify-center items-center  ">
         <div className="relative w-[90%]  lg:w-[70%] overflow-visible flex justify-center ">
         <motion.img
           animate={{
            y:[0,-20,0]
           }}
           transition={{
            duration:6,
            
            repeat:Infinity,
            ease:'easeInOut',
           }}
         className="relative w-[80%]  rounded-full shadow-md shadow-slate-300 z-10" src={ayan} />
         </div>
        
         </div>    
    </div>
   
   
    
  )
}

export default Home
