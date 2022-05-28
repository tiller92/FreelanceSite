import {SiNextdotjs} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {SiPrisma} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {DiHeroku} from 'react-icons/di'
import {SiNodedotjs} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiFlask} from 'react-icons/si'
import {BsBootstrap} from 'react-icons/bs'
import {SiTailwindcss} from 'react-icons/si'
import {SiVercel} from 'react-icons/si'
import { useEffect, useState } from 'react'




export default function SpinningIcon(){
  const ICONS = [SiNextdotjs,IoLogoJavascript,SiPrisma,SiPostgresql,SiReact, DiHeroku,SiNodedotjs,SiPython,SiFlask,BsBootstrap, SiTailwindcss,SiVercel]
 
  const [count,setCount]= useState(0)
  const [icon, setIcon] = useState(ICONS[0])
  const [size, setSize] = useState(70)



  useEffect(() => {
    if(count >= 5){
      setCount(0)
    }
    const interval = setInterval(() => {
      setIcon(ICONS[count])
      setCount(count+= 1)
      console.log('This will run every second!', count);
    }, 2000);
    return () => clearInterval(interval);
  }, [count]);
  

    
 if(count == 0){
   return (
     <>
     <div className='sm:flex sm:mx-5 sm:relative sm:w-1/2 sm:justify-evenly  md:flex md:w-1/2 md: justify-evenly lg:flex lg:w-1/2  xl:flex xl:top-10  xl:w-1/2 xl:justify-evenly  xl:relative 2xl:flex 2xl:justify-center 2xl:top-70 2xl:relative
     
      '>
       <SiNextdotjs color='white' size={size}/>
     </div>
     </>
   )
 }
 if(count == 1){
  return (
    <>
    <div className='sm:flex sm:mx-5 sm:relative sm:w-1/2 sm:justify-evenly md:flex md:w-1/2 md: justify-evenly lg:flex lg:w-1/2   xl:flex xl:top-10  xl:w-1/2 xl:justify-center  xl:relative 2xl:flex 2xl:justify-center 2xl:top-70 2xl:relative
    '>
      <IoLogoJavascript color='white' size={size}/>
    </div>
    </>
  )
}
if(count == 2){
  return (
    <>
    <div className='sm:flex sm:mx-5 sm:relative sm:w-1/2 sm:justify-evenly md:flex md:w-1/2 md: justify-evenly lg:flex lg:w-1/2   xl:flex xl:top-10  xl:w-1/2 xl:justify-center  xl:relative 2xl:flex 2xl:justify-center 2xl:top-70 2xl:relative
    '>
      <SiPrisma color='white' size={size}/>
    </div>
    </>
  )
}
if(count == 3){
  return (
    <>
   <div className='sm:flex sm:mx-5 sm:relative sm:w-1/2 sm:justify-evenly md:flex md:w-1/2 md: justify-evenly lg:flex lg:w-1/2    xl:flex xl:top-10 xl:w-1/2 xl:justify-center   xl:relative 2xl:flex 2xl:justify-center 2xl:top-70 2xl:relative
   '>
      <SiVercel color='white' size={size}/>
    </div>
    </>
  )
}
if(count == 4){
  return (
    <>
    <div className='sm:flex sm:mx-5 sm:relative sm:w-1/2 sm:justify-evenly md:flex md:w-1/2 md: justify-evenly lg:flex  lg:w-1/2   xl:flex xl:top-10 xl:w-1/2 xl:justify-center   xl:relative 2xl:flex 2xl:justify-center 2xl:top-70 2xl:relative
    '>
      <SiTailwindcss color='white' size={size}/>
    </div>
    </>
  )
}
if(count == 5){
  return (
    <>
     <div className='sm:flex sm:mx-5 sm:relative sm:w-1/2 sm:justify-evenly md:flex md:w-1/2 md: justify-evenly lg:flex lg:w-1/2    xl:flex xl:top-10 xl:w-1/2 xl:justify-center   xl:relative 2xl:flex 2xl:justify-center 2xl:top-70 2xl:relative
     '>
      <SiVercel color='white' size={size}/>
    </div>
    </>
  )
}

}