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
import style from '../styles/BottomRightHome.module.css'
import { useEffect, useState } from 'react'

export default function Sbtmr(){
  const [iconSize,setSize] = useState(40)
  const [position, setPosition] = useState(45)
 
  return (
    <>
    <div className='flex justify-center bg-violet-500'>
    <div className='
     flex flex-col
     
     relative
       sm:invisible '>
    <IoLogoJavascript color='black' className='m-2' size={iconSize}/>
    <SiPython color='white' className='m-2' size={iconSize} />
    

    <SiVercel color='black' className='m-2' size={iconSize}  />
    <SiNextdotjs color='white' className='m-2' size={iconSize}  />
    <SiReact color='black' className='m-2' size={iconSize} />


    <SiPostgresql color='white' className='m-2'  size={iconSize} />
    </div>
    <div className='
     flex flex-col
     relative
       sm:invisible '>
    <DiHeroku color='white' className='m-2' size={iconSize}  />
    <SiPrisma color='black' className='m-2' size={iconSize}  />



    <SiTailwindcss color='white' className='m-2' size={iconSize}  />
    <BsBootstrap color='black' className='m-2' size={iconSize}  />


    <SiFlask color='white' className='m-2' size={iconSize}  />
    <SiNodedotjs color='black' className='m-2'  size={iconSize} />
    </div>
    </div>
    </>

  )
}