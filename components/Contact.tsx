import React from 'react'
import { PhoneIcon ,MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/solid'
import {useForm, SubmitHandler} from 'react-hook-form'


type Inputs = {
  name:string;
  email:string;
  subject:string;
  message:string;
}
type Props = {}

function Contact({}: Props) {

     const {register,handleSubmit} = useForm<Inputs>();
     const onSubmit:SubmitHandler<Inputs>=(formData)=>{
      window.location.href=`mailto:swapnil1726@gmail.com?subject=${formData.subject}&body=Hi,my name is ${formData.name}. ${formData.message} (${formData.email})`
     };
  return (
    <div className='h-screen flex-col md:text-left md:flex-row max-w-7xl p-10  relative items-center flex text-center justify-evenly mx-auto '>
        <h3 className='absolute text-4xl text-gray-500 tracking-[18px] top-24 uppercase' >Contact</h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center '>i have got just what you need.[""]
            <span className='underline decoration-[#F7AB0A]/50 '>
              Let's Talk
            </span>
            </h4>
              <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] w-7 h-7 animate-pulse'/> 
                <p className='text-2xl'>+919009153333</p>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                  <EnvelopeIcon className='w-7 h-7 text-[#F7AB0A] animate-pulse'/>
                  <p className='text-2xl'>swapnil1726@gmail.com</p>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                  <MapPinIcon className='h-7 w-7 text-[#F7AB0A] animate-pulse' />
                  <p className='text-2xl'>123 developer state</p>
                </div>
              </div> 
              <form 
                 onSubmit={handleSubmit(onSubmit)}
               className="flex flex-col space-y-2 w-fit mx-auto"
               action=""> 
                <div className='flex space-x-2'>
                  <input 
                  {...register('name')}
                  placeholder='Name'
                  className="contactInput" type="text" />
                  <input 
                  {...register("email")}
                  placeholder='Email'
                  className="contactInput"  type="email" />
                </div>
                <input 
                {...register('subject')}
                placeholder='Subject'
                className="contactInput"  type="text" />
                <textarea  
                {...register('message')}
                placeholder='Message'
                className="contactInput"/>
                <button
              
                type='submit'
                className='px-10 py-5 bg-[#F7AB0A] text-black font-bold text-lg rounded-md'>Submit</button>
              </form>

              
        </div>
    </div>
  )
}

export default Contact