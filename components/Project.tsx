import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
type Props = {}

function Project({}: Props) {
  const projects = [1,2,3,4,5];
  return (
    <motion.div
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:1.5}}
          
    className='h-screen relative text-center items-center max-w-full mx-auto justify-evenly z-0 overflow-hidden flex-col flex '>
      <div className='absolute top-24 tracking-[18px] text-gray-500 uppercase text-2xl  '>
      Projects
      </div>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar
      scrollbar-track-y-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
        {projects. map((project,i)=>(
          <motion.div
            key={`project-${i}`}
            initial={{y:-300,opacity:0}} 
            transition={{duration:1.2}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen  '>
            <Image src="/jslogo.png" 
            height={100}
            width={100}alt="img" />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center '>
                <span className='underline decoration-[#F7AB0A]'>
                  Case Study {i + 1} of {projects.length}:
                </span>
                 instaClone 
              </h4>
              <p className='text-lg text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque dolorem odit laboriosam consequatur magni praesentium? Quas accusamus error deleniti, nostrum molestiae voluptas sit praesentium officia dolorum id modi? Dignissimos nesciunt tempore sit exercitationem modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ab ipsam veritatis at deserunt minus expedita enim dolore eveniet eum.

              </p>
            </div>
          </motion.div>
        ))}
      </div>
      

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 -skew-y-12 left-0 h-[500px] '>

        </div>
      </motion.div>
  )
}

export default Project