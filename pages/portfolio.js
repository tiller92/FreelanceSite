import Image from "next/image"
import wealthTrac from '../public/wealthTrac.png'
import staffingAid from '../public/staffingAid.png'
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

