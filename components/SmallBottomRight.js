import { useEffect, useState } from 'react'
import {FaCode} from 'react-icons/fa'
export default function Sbtmr(){
  const [iconSize,setSize] = useState(60)
  const [position, setPosition] = useState(45)
 
  return (
    <>
    <div className='sm:flex sm:justify-center sm:bg-violet-500 sm:bg-cover '>
    <div className='
     sm:flex sm:flex-row
     sm:relative
       sm:invisible '>
    <FaCode color='black' className='m-2 sm:flex sm:justify-center'  size={iconSize} />
    </div>
    </div>
    </>

  )
}