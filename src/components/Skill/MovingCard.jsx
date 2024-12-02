import React from 'react'
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import {motion} from 'framer-motion';
import IconCard from './IconCard';

const MovingCard = () => {
  return (
        
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-200}}
        transition={{duration:2}}
        className="flex  flex-wrap justify-center items-center mt-12 mb-7 gap-4 ">
        
        <IconCard duration={3} icon={<SiReact className='text-7xl text-cyan-500'/>   }/>
        <IconCard duration={3.5} icon={<SiNodedotjs className="text-7xl text-[#52bd3d]"/>}/>
        <IconCard duration={3} icon={<SiExpress className="text-7xl text-white"/>}/>
        <IconCard duration={3.5} icon={<SiMongodb className="text-7xl text-[#52bd3d]"/>}/>
        <IconCard duration={3.5} icon={<SiTailwindcss className="text-7xl text-cyan-500"/>}/>
        <IconCard duration={3} icon={<SiMysql className="text-7xl text-[#52bd3d]"/>}/>
 
       </motion.div>
  )
}

export default MovingCard
