import Image from "next/image"
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"
import BottomRightHome from '../components/BottomRightHome'
import { useRouter } from "next/router"

export default function Intro(){
  const router = useRouter()

  return (

    <>
    <div className="m-3 transition-transform origin-bottom-left duration-300">
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
    <AiFillGithub className="m-3" size={40} color="white"/>
    <AiOutlineLinkedin className="m-3" size={40} color="white"/>
    <button
     onClick={()=>{router.push('/portfolio')}}
     className="
     font-sans-apple-system
      text-purple-500
       bg-white rounded-full
       p-1 m-3 w-36"
     >Portfolio</button>
     </div>
     <button
     onClick={()=>{console.log('route to next page')}}
     className="
     font-sans-apple-system
      text-purple-500
       bg-white rounded-full
       p-1 m-3 w-36"
     >Contact</button>

     </div>
    
    </>
  )
}