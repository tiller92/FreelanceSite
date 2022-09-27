import { useEffect, useState } from 'react'
import {FaCode} from 'react-icons/fa'
export default function Sbtmr(){
  const [iconSize,setSize] = useState(100)
  const [position, setPosition] = useState(45)
 
  return (
    <>
    <div className='sm:flex sm:justify-center sm:bg-violet-500 sm:bg-cover '>
    <div>
    <FaCode color='white' className='sm:m-2 '  size={iconSize} />
    </div>
    </div>
    </>

  )
}