import React from 'react';
import { motion } from 'framer-motion';


// Reusable Card Component
const IconCard = ({ duration,icon}) => {
    return (
        <motion.div
            initial={{y:-10}}
            animate={{
                y: [10, -10], 
            }}
            transition={{
                duration: duration,
                
                 // Total duration of the animation
                repeat: Infinity, // Repeat indefinitely
                repeatType: "reverse", // Loop the animation
                ease: "linear",
            }}
            style={{
                width: '120px',
                height: '120px',
                background:'linear-gradient(to right, rgba(0,0,0,0.7),rgba(30,41,59,0.7) 50% 60%,rgba(0,0,0,0.7))',
                borderRadius: '10px',
                display: 'flex',
                flexWrap:'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '10px 5px',
                border:'1px solid white',
                boxShadow: '0 2px 4px #fff',
            }}
        >{icon}
         
        </motion.div>
    );
}; export default IconCard
