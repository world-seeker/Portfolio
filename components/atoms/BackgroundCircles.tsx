import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <AnimatePresence>
         <motion.div 
           initial={{
            opacity:0,
           }}
           animate={{
            scale:[1,2,2,3,1],
            opacity:[0.1,0.2,0.4,0.8,0.1,0.1],
            borderRadius:['20%','20%','50%','80%','20%']
           }}
           transition={{
            duration:2.5,
           }}
                    
          className='relative flex justify-center items-center'>
           <div className='absolute border border-[#333333] rounded-full w-[200px]  h-[200px] mt-52 animate-ping '/>
           <div className='absolute border border-[#333333] rounded-full w-[300px]  h-[300px] mt-52 '/>
           <div className='absolute border border-[#333333] rounded-full w-[500px]  h-[500px] mt-52 '/>
           <div className='absolute rounded-full border border-[#F7AB0A] opacity-20 w-[650px]  h-[650px] mt-52 animate-pulse'/>
           <div className='absolute rounded-full border border-[#333333] w-[800px]  h-[800px] mt-52'/>
        </motion.div>
        </AnimatePresence>
  )
}

export default BackgroundCircles