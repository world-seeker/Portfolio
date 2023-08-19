import { motion } from 'framer-motion'
import React from 'react'
import Skill from './atoms/skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:p-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center '>
        <h3 className='absolute top-24 uppercase  tracking-[18px] 
        text-gray-500'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency proficiency</h3>
     
        <div className="grid grid-cols-4 gap-5">
            <Skill directionLeft={false}/>
            <Skill directionLeft={false}/>
            <Skill directionLeft={false}/>
            <Skill directionLeft={false}/>
            <Skill directionLeft={false}/>
            <Skill directionLeft={false}/>
            <Skill directionLeft={false}/>
            <Skill directionLeft={false}/>
            <Skill directionLeft={false}/>
            <Skill directionLeft={false}/>
            <Skill directionLeft={false}/>
            <Skill directionLeft={false}/>
            <Skill directionLeft={false}/>
            <Skill directionLeft={false}/>
        </div>


    </motion.div>

  )
}

export default Skills