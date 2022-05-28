import Image from "next/image"
import wealthTrac from '../public/wealthTrac.png'
import staffingAid from '../public/staffingAid.png'
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
import styles from '../styles/Portfolio.module.css'
import woodBg from '../public/woodbg.jpeg'
import grainGrey from '../public/grainGrey.jpeg'
import NavBar from '../components/NavBar'
import {AiFillGithub} from "react-icons/ai"

export default function Ppage(){

  return (
    <>
  <div className="bg-fuchsia-800 min-h-screen">
    <div className="flex justify-center">
  <div className="w-3/4 h-full bg-slate-100 shadow-xl shadow-slate-300 min-h-screen ">
  <div className="flex justify-center ">
  <div className="grid grid-cols-1 w-11/12">
    
         
        <div className="sm:flex sm:justify-center m-5 ">
           <Image 
            className="rounded-xl"
            height={300}
            width={300}
            objectFit='contain'
             src={wealthTrac} />
        </div>
   

      <div className="flex justify-center h-6 m-4">
      <button className="border border-white w-24 sm:h-8 ">full site</button>
      </div>
     

      <div className="sm:flex sm:justify-center m-4">
      <button className=""><AiFillGithub size={40} /></button>
      </div>
     

      <div className="sm:flex sm:justify-evenly">
        <ul className="flex flex-col justify-evenly">
        <li> Next JS build</li>
        <li> Deployed with Vercel</li>
        <li> PostgresSQL Database (Prisma ORM)</li>
        <li> Styled with Tailwind CSS</li>
        <li> Server Side Generation (SEO)</li>
        </ul>
        </div>
    

        <div className="sm:flex sm:justify-center">
           <Image 
            className="rounded-xl"
            height={300}
            width={300}
            objectFit='contain'
             src={staffingAid} />
        </div>
      

      <div className="sm:flex sm:justify-center m-4">
      <button className=""><AiFillGithub size={40} /></button>
      </div>
      

      <div className="sm:flex sm:justify-evenly m-5">
        <ul className="flex flex-col justify-evenly">
        <li> Python with Flask</li>
        <li> Deployed with Heroku</li>
        <li> PostgresSQL DB using SQLA ORM</li>
        <li> Styled with Boostrap</li>
        <li> Reads Excel Files to aid with staffing</li>
        </ul>
        </div>
  
  </div>
  </div>
  </div>
  </div>
  </div>
    </>
  )
}


{/* <div className="sm:grid sm:grid-cols-3">
<div className="sm:flex sm:justify-center sm:h-64 sm:w-96 m-5 relative">
    <Image 
   className="rounded-xl"
  // width={200}
  // height={200}
    src={wealthTrac} />
</div>

<div></div>
<div>
<p className="sm:text-white sm:text-2xl sm:justify-center  sm:flex ">Next JS with PSQL databas</p>
</div>



</div> */}