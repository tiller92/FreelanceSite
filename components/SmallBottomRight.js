import { useEffect, useState } from 'react'
import {FaCode} from 'react-icons/fa'
export default function Sbtmr(){
  const [iconSize,setSize] = useState(100)
  const [position, setPosition] = useState(45)
 
  return (
    <>
    <div className='flex justify-center relative top-10 sm:bg-violet-500 sm:bg-cover '>
    <FaCode color='white' className='m-4 '  size={iconSize} />
    </div>
    </>

  )
}