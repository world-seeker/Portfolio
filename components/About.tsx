import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
type Props = {}

function About({}: Props) {
  return (
     <motion.div
     initial={{opacity:0 }}
     whileInView={{opacity:1}}
     transition={{duration:1.5}}
     className='flex flex-col relative text-center md:text-left h-screen  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl'>About</h3>
       <div></div>
       <motion.div
       initial={{
        x:-200,
        opacity:0,
       }}
       transition={{
        duration:1.2,
       }}
       whileInView={{
        x:0,
        opacity:1,
       }}
       viewport={{once:true}}
       className=''
        >
          <Image
            className='mb-0 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            src='/main.jpeg'
            height={280}
            width={280}
            alt=''
           />
      </motion.div>

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
         Lorem ipsum dolor sit  elit. Id, culpa?
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident labore nam expedita minima officiis, consequatur placeat repellat atque nulla cum dolore sit consequuntur ad, sequi, ut rem quasi deserunt nisi assumenda vero est. Aperiam, optio.</p>
      </div>
    </motion.div>
  )
}

export default About