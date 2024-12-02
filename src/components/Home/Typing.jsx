import React from 'react'
import Typewriter from 'typewriter-effect';
const Typing = () => {
  return (
    <div>
       <Typewriter
        
           options={{
           strings:['WEB DEVELOPER', 'FULL STACK DEVELOPER' ,'UI/UX DESIGNER'],
           autoStart: true,
           loop: true,
           delay:100,
           deleteSpeed:100,
           pauseFor:100,
           cursor:"",

          }}
        />
    </div>
  )
}

export default Typing;
