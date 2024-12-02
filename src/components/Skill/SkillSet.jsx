import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState,useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const Skill = ({ name, percentage }) => {
 const [animatedValue, setAnimatedValue] = useState(0);
 const [ref, inView]= useInView({triggerOnce:false,})
 

  useEffect(() => {
      if(inView){
      setAnimatedValue(percentage);
      }
      else{
      setAnimatedValue(0);
      }
    
  }, [percentage,inView]);
  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="lg:w-24 lg:h-24 w-20 h-20">
        <CircularProgressbar
          value={animatedValue}
          text={`${animatedValue}%`}
          styles={buildStyles({
            textColor: "#fff", // Tailwind green-400
            pathColor: "#4ADE80",
            trailColor: "#F44336", // Tailwind green-100
            pathTransitionDuration:2,
          })}
        />
      </div>
      <p className="text-center text-base font-normal text-white">{name}</p>
    </div>
  );
};

const SkillSet = () => {
  const skills = [
    
    { name: "Tailwind CSS", percentage: 70 },
    { name: "Node.js", percentage: 75 },
    { name: "Express", percentage: 65 },
    { name: "MongoDB", percentage: 60 },
  ];

  return (
    <div className="px-8 lg:pt-20 pt-8">
     
      <div className=" grid lg:grid-cols-4  md:grid-cols-3  grid-cols-2 lg:gap-10  gap-5">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
      
    </div>
  );
};

export default SkillSet