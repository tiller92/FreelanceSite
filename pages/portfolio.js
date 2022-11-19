import Image from "next/image"
import wealthTrac3 from '../public/wealthtrac3.png'
import staffingAid from '../public/staffingAid.png'
import congressStock from '../public/congress-stock.jpg'
import crates from '../public/crates.png'
import {AiFillGithub} from "react-icons/ai"
import { useRouter } from "next/router"
import {AiFillHome} from 'react-icons/ai'
import {FaRust } from "react-icons/fa";

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
  <p className="text-4xl mt-5 flex justify-center text-slate-800">wealthtrackpro.com</p>
<div className="sm:flex sm:justify-center ">
          <a target="_blank " href="https://www.wealthtrackpro.com">
           <Image 
           alt="wealthTracker image"
            className="rounded-xl cursor-pointer"
            height={300}
            width={300}
            objectFit='contain'
             src={wealthTrac3} />
             </a> 
        </div>
      <div className="flex justify-center h-7 m-3 mb-8">
      <button  target='_blank' onClick={()=>{window.open('https://www.wealthtrackpro.com')}}  className="border rounded-full border-white w-24 sm:h-8 bg-slate-800 text-slate-50 mr-4">Full Site</button>
      <button target='_blank' onClick={()=>{window.open('https://github.com/tiller92/WealthTrackProPublicRepo')}}   className=""><AiFillGithub size={35} /></button>
      </div>
     
      <div className="sm:flex sm:justify-evenly sm:border-b-8 border-dashed">
        <ul className="flex flex-col justify-center mb-4">
        <li className="flex justify-center"> Next JS</li>
        <li className="flex justify-center"> Vercel</li>
        <li className="flex justify-center"> PostgreSQL Database (Prisma ORM)</li>
        <li className="flex justify-center"> Tailwind CSS</li>
        <li className="flex justify-center" > JSON API</li>
        <li className="flex justify-center"> Personal Finance </li>
        </ul>
      </div>
      
      <p className="text-4xl mt-5 flex justify-center text-slate-800">Riptree CLI</p>
<div className="sm:flex sm:justify-center">
           <Image 
           alt="crates image"
            className="rounded-xl cursor-pointer"
            height={300}
            width={300}
            objectFit='contain'
             src={crates} />
        </div>

      <div className="sm:flex sm:justify-center m-4">
      <button target='_blank' onClick={()=>{window.open('https://github.com/tiller92/file_digger')}} className=""><AiFillGithub size={40} /></button>
      <button target='_blank' onClick={()=>{window.open('https://crates.io/crates/riptree')}} className=" m-1"><FaRust size={40} /></button>
      </div>
      


      <div className="sm:flex sm:justify-evenly sm:border-b-8 border-dashed">
        <ul className="flex flex-col justify-evenly mb-4">
        <li className="flex justify-center"> CLI tool</li>
        <li className="flex justify-center"> Rust Crate</li>
        <li className="flex justify-center"> Uses recursion to display and search directories</li>
        <li className="flex justify-center"> No dependencies</li>
        </ul>
      </div>
   

      <p className="text-4xl mt-5 flex justify-center text-slate-800">congress-stock-tracker.herokuapp.com</p>
<div className="sm:flex sm:justify-center">
        <a target="_blank " href="https://congress-stock-tracker.herokuapp.com/"></a>
           <Image 
           alt="congress stock image"
            className="rounded-xl cursor-pointer"
            height={300}
            width={300}
            objectFit='contain'
             src={congressStock} />
        </div>
        <div className="flex justify-center h-6 m-4">
      <button target='_blank' onClick={()=>{window.open('https://congress-stock-tracker.herokuapp.com/')}}  className="border border-white w-24 sm:h-8 bg-slate-800 mr-4 text-slate-50 ">Full Site</button>
  
      <button onClick={()=>{window.open('https://github.com/tiller92/capstone-ryan')}} className=""><AiFillGithub size={35} /></button>
      </div>
      
      <div className="sm:flex sm:justify-evenly sm:border-b-8 border-dashed">
        <ul className="flex flex-col justify-evenly mb-4">
        <li className="flex justify-center"> Python Flask</li>
        <li className="flex justify-center"> Deployed with Heroku</li>
        <li className="flex justify-center"> PostgresSQL DB using SQL ORM</li>
        <li className="flex justify-center"> Styled with Boostrap</li>
        <li className="flex justify-center"> House Stock Watcher JSON API</li>
        </ul>
        </div>


        <p className="text-4xl mt-5 flex justify-center text-slate-800">Respiratory Staffing Aid</p>
        <div className="sm:flex sm:justify-center">
           <Image 
           alt="rt-assigment tracler image"
            className="rounded-xl cursor-pointer"
            height={300}
            width={300}
            objectFit='contain'
             src={staffingAid} />
        </div>
      
      <div className="sm:flex sm:justify-center m-4">
      <button target='_blank' onClick={()=>{window.open('https://github.com/tiller92/rt-assignment-tracker')}} className=""><AiFillGithub size={40} /></button>
      </div>
      
      <div className="sm:flex sm:justify-evenly sm:border-b-8 border-dashed">
        <ul className="flex flex-col justify-evenly mb-4">
        <li className="flex justify-center"> Python Flask</li>
        <li className="flex justify-center"> Deployed with Heroku</li>
        <li className="flex justify-center"> PostgresSQL DB using SQLA ORM</li>
        <li className="flex justify-center"> Styled with Boostrap</li>
        <li className="flex justify-center"> Leverages Excel Files to aid with staffing</li>
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

