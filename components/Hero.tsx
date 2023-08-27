import React from 'react'
import { Cursor , useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './atoms/BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link';


type Props = {}

function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words:['Hey! The Name\'s Swapnil ','Guy-Who-Loves-To-Code','<Swapnil Pandey/>'],
        loop:true,
        delaySpeed:2000,
    });
return(<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
    <BackgroundCircles/>
    <Image
    className='relative  rounded-full h-32 w-32 mx-auto object-cover' 
    src={'/main.jpeg'} 
    width={100} 
    height={0}
    alt={''}/>
    <div className='z-20'>
    <h2 className='text-gray-500 uppercase pb-2 tracking-[15px] '>SOFTWARE ENGINEER</h2>
    <div className='relative top-2'>
         <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className='mr-3'>{text}</span> 
            <Cursor cursorColor='[#F7AB0A]'/>
        </h1>
    </div>
    <div className='pt-5'>
        <Link href="#about">
        <button className='heroButton'>
            About
        </button>
        </Link>
       
        <Link href="#experience">
        <button className='heroButton'>
            Experience
        </button>
        </Link>
        
        <Link href="#skills">
        <button className='heroButton'>
            SKill's
        </button>
        </Link>
       
        <Link href="#projects">
        <button className='heroButton'>
            Projects
        </button>
        </Link>
       

    </div>
    </div>
    </div>)
  
}

export default Hero