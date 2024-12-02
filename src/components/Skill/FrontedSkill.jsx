import React from 'react'
import { useState,useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

const skillsData = [
  { name: 'JavaScript', percentage: 90 },
  { name: 'React', percentage: 85 },
  { name: 'CSS', percentage: 80 },
  { name: 'TALIWIND', percentage: 75 },
  { name:'HTML', percentage:80},
  { name:'REDUX',percentage:50}
];

const SkillBar = ({ skill }) => {
  const [ref, inView] = useInView({triggerOnce:false});
  const [width, setWidth] = useState(0);

  useEffect(() => {
 
    if (inView) {
      setWidth(skill.percentage);
      
    }
  }, [inView, skill.percentage]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-light text-2xl text-white tracking-wider ">{skill.name}</span>
        <span className="font-light text-2xl text-white  tracking-wider">{inView ? skill.percentage : 0}%</span>
      </div>
      <div className="md:h-10 rounded-lg h-6 bg-slate-900">
        <div
          className={`h-full bg-gradient-to-r from-green-300 to-red-500  rounded-lg transition-all duration-1000 ease-linear  delay-100  `}
          style={{
            width: inView?`${width}%`:0
          
          }}
        />
      </div>
    </div>
  );
};

const FrontedSkill = () => {
  return (
    <section className="p-8">
    
      {skillsData.map((skill, index) => (
        <SkillBar key={index} skill={skill} />
      ))}
    </section>
  )
}

export default FrontedSkill
