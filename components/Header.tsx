import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

function Header({}: Props) {
  return (
    <>
    <div className='sticky top-0 flex items-start justify-between max-w-7xl 
    xl:items-center mx-auto z-20 p-5 '>
     
        <motion.div
        initial={{
          x:-500,
          opacity:0,
          scale:0.5,
        }}
        animate={{
          x:0,
          opacity:1,
          scale:0.8,
        }}
        transition={{
          duration:1,
        }}
        className='flex flex-row items-center space-x-8 '>
        <SocialIcon
      
         url=""
         bgColor='gray'
         fgColor=''
         />
         <SocialIcon
         url=""
         bgColor='gray'
         fgColor=''
         />
         <SocialIcon
         url=""
         bgColor='gray'
         fgColor=''
         />
        </motion.div>
         
         <motion.div
            initial={{
              x:500,
              opacity:0,
              scale:0.5,
            }}
            animate={{
              x:0,
              opacity:1,
              scale:0.8,
            }}
            transition={{
              duration:1,
            }}
         className='flex flex-row items-center cursor-pointer'>
        
        <SocialIcon
        url='#contact'
         network="email"
         bgColor='transparent'
         fgColor='gray'
         />
         <Link href={"contact"}>
         <p className='font-bold uppercase text-sm md:inline-flex hidden'>get in touch</p>
         </Link>
         </motion.div>
    
    </div>
    </>
  )
}

export default Header