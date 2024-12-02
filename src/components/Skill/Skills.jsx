import React from 'react'
import {motion} from 'framer-motion';

import AllSkills from './AllSkills';
import MovingCard from './MovingCard';
 

const Skills = () => {
  
  return (
    <div  id="skill" className='pt-16'>
    <div className=' flex w-full justify-center'>< motion.h1
         
          initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:2}}
          className=" text-white text-4xl  ">Skills</motion.h1></div>
    <MovingCard/>
    <AllSkills/>
      
    </div>
  )
}

export default Skills
