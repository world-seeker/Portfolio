import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center  flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-10 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        
        <motion.div
          initial={{
            y:200,
            opacity:0
          }}
           transition={{duration:1.2}}
           whileInView={{opacity:1,y:0}}
           viewport={{once:true}}
           >
              <Image
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover'
                src={"/main.jpeg"}
                height={100}
                width={100}
                alt='s'/>
        </motion.div>
        

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO Of Networking</h4>
            <p className='font-bold text-2xl mt-1'>Lorem ips</p>
            <div className='flex space-x-2 my-2'>
                  {/** TechUsed */}
                <Image
                  className='h-10 w-10 rounded-full object-cover'
                  src={'/jslogo.png'}
                  width={100}
                  height={100}
                  alt='logo'
                  />
                   <Image
                  className='h-10 w-10 rounded-full object-cover'
                  src={'/jslogo.png'}
                  width={100}
                  height={100}
                  alt='logo'
                  />
                   <Image
                  className='h-10 w-10 rounded-full object-cover'
                  src={'/jslogo.png'}
                  width={100}
                  height={100}
                  alt='logo'
                  />
              
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work...-Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg h-40 overflow-scroll p-5'>
                <li>sumarry poinyt sumarry poinyt sumarry poinyt sumarry poinyt</li>
                <li>sumarry poinyt sumarry poinyt sumarry poinyt sumarry poinyt</li>
                <li>sumarry poinyt sumarry poinyt sumarry poinyt sumarry poinyt</li>
                <li>sumarry poinyt sumarry poinyt sumarry poinyt sumarry poinyt</li>
                <li>sumarry poinyt sumarry poinyt sumarry poinyt sumarry poinyt</li>
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard