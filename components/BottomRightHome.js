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
import FreeLanceinfo from '../components/FreeLanceInfo'

export default function Btmr(){
  const [iconSize,setSize] = useState(50)
  const [position, setPosition] = useState(45)
 
  return (
    <>
    <div className='sm:grid sm:grid-cols-4'>
      <div></div>
      <div></div>
      <div className='sm:h-64'></div>
      <div></div>

      <div></div>
      <div></div>
      <div className='sm:col-span-2 sm:justify-center sm:h-40
    hidden
     sm:relative
     sm:flex sm:flex-row      
       sm:visible '>
    <IoLogoJavascript color='white' className='mx-2' size={iconSize}/>
    <SiPython color='white' className='mx-2' size={iconSize} />
    <SiVercel color='white' className='mx-2' size={iconSize}  />
    <SiNextdotjs color='white' className='mx-2' size={iconSize}  />
    <SiReact color='white' className='mx-2' size={iconSize} />
    <SiPostgresql color='white' className='mx-2'  size={iconSize} />
    </div>    




<div></div>
<div></div>
<div className=' sm:col-span-2 sm:flex sm:justify-center sm:
hidden
 sm:relative
sm:flex-row      
   sm:visible '>
<DiHeroku color='white' className='mx-2' size={iconSize}  />
<SiPrisma color='white' className='mx-2' size={iconSize}  />
<SiTailwindcss color='white' className='mx-2' size={iconSize}  />
<BsBootstrap color='white' className='mx-2' size={iconSize}  />
<SiFlask color='white' className='mx-2' size={iconSize}  />
<SiNodedotjs color='white' className='mx-2'  size={iconSize} />
</div> 


<div className=''></div>
<div></div>
<div></div>
<div></div>

{/* <FreeLanceinfo />
<div></div>
<div></div>
<div></div>
  */}


    </div>
    
    </>

  )
}

{/* <div className='
hidden
 sm:relative
 sm:flex sm:flex-col       
   sm:visible '>


<DiHeroku color='white' className='mx-2' size={iconSize}  />
<SiPrisma color='white' className='mx-2' size={iconSize}  />



<SiTailwindcss color='white' className='mx-2' size={iconSize}  />
<BsBootstrap color='white' className='mx-2' size={iconSize}  />


<SiFlask color='white' className='mx-2' size={iconSize}  />
<SiNodedotjs color='white' className='mx-2'  size={iconSize} />
</div> */}