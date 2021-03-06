import Image from "next/image"
import wealthTrac from '../public/wealthTrac.png'
import staffingAid from '../public/staffingAid.png'
import {AiFillGithub} from "react-icons/ai"
import { useRouter } from "next/router"
import {AiFillHome} from 'react-icons/ai'

export default function Ppage(){
  const router = useRouter()
  return (
    <>
  <div className="bg-slate-800 min-h-screen">
    <div className="flex justify-center">
  <div className="w-2/4 h-full bg-slate-100 shadow-xl shadow-slate-300 min-h-screen ">
    <button className="relatvie m-5 sm:absolute" 
      onClick={()=>{
        router.push('/')
      }}
      >  
    
  <AiFillHome size={30} /></button>
  <div className="flex justify-center ">
  <div className="grid grid-cols-1 w-11/12">
        <div className="sm:flex sm:justify-center m-5 ">
          <a target="_blank " href="https://www.wealthtrackpro.com">
           <Image 
            className="rounded-xl"
            height={300}
            width={300}
            objectFit='contain'
             src={wealthTrac} />
             </a>
        </div>
   
      <div className="flex justify-center h-6 m-4">
      <button target='_blank' onClick={()=>{window.open('https://www.wealthtrackpro.com')}}  className="border border-white w-24 sm:h-8 ">Full Site</button>
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
        <li> Leverages Excel Files to aid with staffing</li>
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

