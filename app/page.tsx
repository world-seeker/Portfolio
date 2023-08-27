'use client'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Project from '@/components/Project'
import Skills from '@/components/Skills'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen  snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
         <Header/>
      <section id={"hero"} className='snap-start'>
         <Hero/>
      </section>
      <section id={"about"} className='snap-center'>
         <About/>
      </section>
      <section id={'experience'} className='snap-center '>
     
         <Experience/>
      </section>
     <section id={'skills'} className='snap-center'>
         <Skills/>
     </section>
     <section id={'projects'} className='snap-center'>
         <Project/>
     </section>
     <section id='contact' className='snap-start'>
      <Contact/>         
     </section>

     <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
         <div className='flex items-center justify-center'>
            <img
            className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0" 
            src="/fot.jpeg" alt="footer" />
         </div>
      </footer>
     </Link>



    </div>
  )
}
