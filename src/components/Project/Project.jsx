import React from 'react';
import ProjectCard from './ProjectCard';
import portfolio from '../../assets/portfolio.png';
import zayno from '../../assets/zayno.png'
import zayro from '../../assets/zayro.png'

import {motion} from 'framer-motion';

// const ProjectCard = ({card}) => {
//   return (
// <div className=" lg:h-[500px] lg:w-[400px] h-[500px] w-[300px] border-2 border-white bg-black  text-white mx-10 mb-10 ">
//   <h1>{card.title}</h1>
//   <p>{card.description}</p>
// </div>
// );
// };

const Project = () => {
const cards=[{
   title:"PORTFOLIO",
   description:"Designed and developed a responsive personal portfolio website to showcase my skills and projects. The portfolio highlights my expertise in MERN stack development,featuring an interactive user interface. ",
   technology:"Technology : React, Javasript and Tailwind",
   ImgUrl:portfolio,
   websitelink:'#',
   githublink:'https://github.com/mohdayan12/Portfolio.git'
},
{
  title:"ZAYNO- ECOMMERCE",
   description:"A MERN-based e-commerce website for men’s, women’s, and kids’. Includes secure authentication, product management, image uploads, shopping cart, order tracking.",
   technology:'Technology : MERN STACK',
   ImgUrl:zayno,
   websitelink:'https://zayno-frontend.vercel.app',
   githublink:'https://github.com/mohdayan12/Zayno.git'
},
{
     title:"ZAYRO- AIRBNB PLATFORM",
   description:"Airbnb-like platform for browsing, listing, and booking properties. Features JWT authentication, Cloudinary uploads, advanced search, booking management, and responsive.",
   technology:"Technology : MERN STACK",
   ImgUrl:zayro,
   websitelink:'https://zayro-1.vercel.app',
   githublink:'https://github.com/mohdayan12/Zayro_1.git'
}];
  return (
    <div id="project"  className= " w-full h-min-screen mb-14 pt-16 ">
     <div className='flex justify-center'> 
     < motion.h1
       initial={{opacity:0, x:100}}
       whileInView={{opacity:1, x:0}}
       transition={{duration:1.5}}
       className=" text-white text-4xl mb-10 ">Project</motion.h1>
       </div>
      <div className="grid md:grid-cols-2  grid-cols-1  mx-10 xl:gap-24 xl:mx-24 lg:mx-16 lg:gap-10 md:mx-6 md:gap-4 "> 
       {cards.map((card,index)=>(
       <ProjectCard key={index } card={card}/>
       
       ))}

        
      </div>
    

    </div>
  );
};

export default Project
