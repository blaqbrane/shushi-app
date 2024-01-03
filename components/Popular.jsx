import React from 'react'
import { popularData } from './data'
import {motion} from 'framer-motion'
const Popular = () => {
  const container = {
    show:{
      transition:{
        staggerChildren:0.5
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
    <motion.div className='mt-16'
    initial={"hidden"}
    exit="exit"
    variants={child}
    whileInView={"show"}
    viewport={{once : false}}
    >
        <div>
            <h1 className='text-[#F63B3B] font-bold tracking-[2.25px] text-center text-[12px]'>CUSTOMER FAVORITES</h1>
            <h2 className='text-[black] font-bold text-3xl md:text-[2.5rem] text-center mt-1'>
            Popular Categories
            </h2>
            <div className='grid md:grid-cols-4 gap-x-[2.6rem]'>
                {
                    popularData.map((item) => (
                        <div key={item.id} className='flex flex-col mt-8 justify-center py-8 items-center bg-[#FFFFFF] card-shadow rounded-[38px]'>
                        <div className='w-[8.7rem] h-[8.7rem]  bg-[#c1f1c6] rounded-full flex justify-center items-center'>
                            <img src={item.imgss} alt=''/>
                        </div>
                        <h1 className='mt-4 text-2xl font-bold'>{item.name}</h1>
                        <p className='mt-4'>({item.num})</p>
                      </div>
                    ))
                }
               
            </div>
        </div>
    </motion.div>
  )
}

export default Popular