import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './atoms/ExperienceCard'

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div 
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:1.2}}
     className='h-screen flex relative overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
        <h3 className='absolute text-2xl top-24  uppercase text-gray-500 tracking-[18px] '>experience</h3>
        
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
        </div>
    </motion.div>
  )
}

export default Experience