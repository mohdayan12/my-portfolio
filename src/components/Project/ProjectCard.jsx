
import { TfiWorld } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({card}) => {
  return (
    <div className=" xl:h-[36rem] rounded-xl md:h-[41rem] h-[40rem]  bg-gradient-to-r from-black via-slate-800 to-black text-white mt-10 overflow-hidden" >
      <div className=' md:h-[43rem] h-[42rem] hover:-translate-y-2 hover:transition-all  relative hover:bg-slate-950 '>
        <div  className="p-8 h-[280px] overflow-hidden rounded-lg mb-4 ">
          <img src={card.ImgUrl} className="rounded-lg h-[230px] w-full" />
        </div>
        <div className='flex justify-between  mx-10'>
        <div className='flex flex-col '>
          <h1 className='md:text-3xl text-xl text-yellow-600'>{card.title}</h1>
          <h1 className="text-red-600 text-lg font-bold pr-5"> {card.technology}</h1>
          </div>
          <div className='flex justify-center items-center lg:text-3xl text-xl'>
            <span className='bg-slate-800 mr-4 p-2 rounded-full text-yellow-500'><a href={card.websitelink} target='_blank' >  <TfiWorld/></a></span>
            <span className='bg-slate-800 p-2 rounded-full text-yellow-500'><a href={card.githublink} target="_blank" >  <FaGithub /></a></span>
          </div>
         
        </div>
         <p className='lg:text-xl  text-lg  tracking-wider font-light px-6 pt-10  '>{card.description}</p>
           
           
      </div>
    </div>
  )
}

export default ProjectCard
