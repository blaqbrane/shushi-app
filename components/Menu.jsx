import React, { useRef } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { menuData } from './data'
import {motion} from 'framer-motion'
const Menu = () => {
  const containerRef = useRef(null)
  const handelNext = () => {
    const container = containerRef.current;
    const cardWidth = container.querySelector('.cards').offsetWidth
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    if(container.scrollLeft >= maxScrollLeft){
      container.scrollLeft = 0
    }else{
      container.scrollLeft += Number(cardWidth) +60 ;
    }
  }
  const handelPrev = () => {
    const container = containerRef.current;
    const cardWidth = container.querySelector('.cards').offsetWidth 
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    if(container.scrollLeft === 0){
      container.scrollLeft = maxScrollLeft
    }else{
      container.scrollLeft -= Number(cardWidth) + 60 ;
    }
  }
  const container = {
    show:{
      transition:{
        staggerChildren:0.2
      }
    }
  }
  const child = {
    hidden: {y:100,opacity:0},
    show:{
      y:0,
      opacity:1,
      transition:{
        duration:1,
        ease:'easeInOut',
      }
    }
  }
  return (
    <motion.section className='mt-20'
    initial={"hidden"}
    exit="exit"
    variants={child}
    whileInView={"show"}
    viewport={{once : false}}
    >
      <div>
        <h4 className='text-[#F63B3B]  text-[12px] font-bold tracking-[2px] mb-4'>SPECIAL DISHES</h4>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl md:text-[2.5rem] font-bold leading-[38px] md:leading-[45px]'>Best Dishes <br/> From Our Menu</h1>
          <div className='flex justify-between items-center gap-x-4'>
            <button onClick={handelPrev } className='flex justify-center transition-all duration-700 ease-in-out items-center w-10 h-10 rounded-full text-[black] bg-[#EFEFEF] hover:text-[white] hover:bg-[#39DB4A]'><IoIosArrowBack/></button>
            <button onClick={handelNext} className='flex justify-center items-center w-10 h-10 rounded-full text-[#FFFFFF] bg-[#39DB4A] rotate-180'><IoIosArrowBack/></button>
          </div>
        </div>
        <div ref={containerRef} className=' w-[1160px] md:w-[1160px] new-scroll overflow-x-scroll'>
        <div className='flex  whitespace-nowrap gap-x-12 mt-10 w-[2200px] md:w-[1700px] pl-2 pb-2'>
          {
            menuData.map((menu) => (
              <div key={menu.id} className='relative cards bg-[#FFFFFF] w-[300px] md:w-[350px] card-shadow rounded-[20px] py-8 px-6'>
              <div className='flex flex-col justify-center items-center'>
                <img src={menu.imgss} alt='' className='w-[400px] h-[320px] object-contain'/>
              </div>
              <div className='absolute top-0 right-0 px-5 py-[0.9rem] text-[#FFFFFF] rounded-tr-[20px] rounded-bl-[20px] bg-[#39DB4A]'>
                <FaRegHeart/>
              </div>
              <div className='-mt-6'>
                <div className='text-[black] mt-1'>
                  <h2 className='font-bold text-xl'>{menu.title}</h2>
                  <p className='text-[gray] text-[16px]'>{menu.desc}</p>
                </div>
                <div className='mt-3 flex flex-row justify-between items-center'>
                  <h2 className='font-bold text-xl'><span className='text-[#ff6c6c] text-[12px]'>$</span>{menu.price}.00</h2>
                  <p className='flex items-center font-bold text-xl'><FaStar className='text-[yellow]'/>{menu.rating}</p>
                </div>
              </div>
          </div>

            ))
          }
          
        </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Menu