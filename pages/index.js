import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import Intro from '../components/Intro'
import BottomRightHome from '../components/BottomRightHome'
import SmallBottomRightHome from '../components/SmallBottomRight'
import SpinningIcon from '../components/SpinningIcon'

export default function Home() {
  return (
   <>
 
   <div className={style.home}>
    <Intro/>
    <SmallBottomRightHome className='sm:invisible' />
    </div>
    <div className='flex hidden sm:block sm:bg-stone-700 sm:h-screen'>
    <BottomRightHome />
    <SpinningIcon/>
    </div>
    
   </>  
  )
}
