import React from 'react'
import FrontedSkill from './FrontedSkill';
import SkillSet from './SkillSet';

const AllSkills = () => {
  return (
    <div className="flex justify-center items-center  mt-32  lg:items-start lg:justify-center flex-wrap">
          <div  className="lg:w-[45%]  w-[90%] lg:mr-[2%] bg-gradient-to-r from-black via-slate-800 to-black  rounded-md  border-[1px] border-slate-500">
            <FrontedSkill/> 
         </div>
         <div className="w-[90%] lg:w-[45%] md:mt-10 lg:mt-0  bg-gradient-to-r from-black via-slate-800 to-black    mt-4 rounded-md border-[1px] border-slate-500">
         <SkillSet/>
        
         <div className="flex flex-wrap justify-between items-start mx-5 mt-16">
              <div className="lg:w-[48%] w-full lg:mb-10 mb-6 border-[1px] border-white rounded-tr-[30px] rounded-bl-[30px]  ">
               <h1 className='text-yellow-600 text-2xl pl-4'>Git =</h1>
               <p className='text-white pl-4 pb-2'>A version control system that manages code changes, enables collaboration, and tracks project history efficiently. </p>
               </div>
              <div className="lg:w-[48%]  w-full  border-[1px] mb-6 border-white rounded-tr-[30px] rounded-bl-[30px]">
              <h1 className='text-yellow-600 text-2xl pl-4'>Postman =</h1>
              <p className='text-white pl-4 pb-2'> A tool for API testing, development, and automation, simplifying debugging and integration of RESTful API.</p>
              </div>
              <div className="lg:w-[48%]  w-full  border-[1px] mb-6 border-white rounded-tr-[30px] rounded-bl-[30px]">
              <h1 className='text-yellow-600 text-2xl pl-4'>Github =</h1>
              <p  className='text-white pl-4 pb-2'>Github is a platform version control where  developer share, review, and manage code repositories effectively. </p>
              </div>
               <div  className="lg:w-[48%] w-full mb-6 border-[1px] border-white rounded-tr-[30px] rounded-bl-[30px]">
               <h1 className='text-yellow-600 text-2xl pl-4'>DSA with Java =</h1>
               <p  className='text-white pl-4 pb-2'>It used to solve computational problems efficiently using Java programming ,  concepts and syntex.</p>
               </div>
         </div> 
          </div>
         
        
          

          
          
       
      </div>
  )
}

export default AllSkills
