
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"
import { useRouter } from "next/router"
import Link from "next/link"
import { useState } from "react"
import Contact  from "../components/Contact"

export default function Intro(){
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (

    <>
    <div className=" transition-transform origin-bottom-left duration-300">
    <h1 className="
    text-white
    text-8xl
    font-sans-apple-system
    font-semibold
    p-2
    ">
         Ryan Tiller</h1>
         <h1 className="
    text-white
    text-3xl
    font-sans-apple-system
    p-2
    "
    >Software Developer</h1>
    <div className="flex">
    <a href="https://github.com/tiller92" target='_blank' rel="noreferrer" > <AiFillGithub className="m-3" size={40} color="white"/></a>
  
    {/* <AiOutlineLinkedin className="m-3" size={40} color="white"/> */}

    <button
    onClick={()=>{router.push('/portfolio')}}
     className="
     font-sans-apple-system
      text-purple-500
       bg-white rounded-full
       p-1 m-3 w-36"
     >Projects</button>
  
     </div>
     
  <div onClick={()=>{
    setOpen(!open)}}>
     <Contact open={open}/>
  </div>
     </div>
    
    </>
  )
}