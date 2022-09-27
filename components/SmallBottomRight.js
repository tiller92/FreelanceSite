import { useEffect, useState } from 'react'
import {FaCode} from 'react-icons/fa'
export default function Sbtmr(){
  const [iconSize,setSize] = useState(60)
  const [position, setPosition] = useState(45)
 
  return (
    <>
    <div className='sm:flex sm:relative sm:bg-violet-500 sm:bg-cover '>
    <div className='
     sm:flex
     sm:relative
       sm:invisible '>
    <FaCode color='white' className='sm:m-2 sm:flex sm:justify-center sm:relative '  size={iconSize} />
    </div>
    </div>
    </>

  )
}