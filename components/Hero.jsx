import React from 'react'
import sushi1 from '/sushi1.png'
import sushi2 from '/sushi2.png'
import sushi3 from '/sushi3.png'
import { BiSolidRightArrow } from 'react-icons/bi'
import {motion} from 'framer-motion'
const Hero = () => {
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
  const child_h = {
    hidden: {x:100,opacity:0},
    show:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        ease:'easeInOut',
      }
    }
  }
  const child_p = {
    hidden: {x:-100,opacity:0},
    show:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        ease:'easeInOut',
      }
    }
  }

  
  return (
    <motion.div
      initial={"hidden"}
      exit="exit"
      variants={container}
      whileInView={"show"}
      viewport={{once:false}}
     className='mt-48 md:mt-28 flex flex-col md:flex-row items-center justify-between'>
       <div className='-mt-20'>
             <motion.h1
             initial={"hidden"}
             exit="exit"
             variants={child_h}
             whileInView={"show"}
             viewport={{once:false}}
            className='font-bold text-center md:text-left text-3xl md:text-[3rem] leading-[48px] md:leading-[56px]'>Sushi Bliss, Every <br className='hidden md:block'/> Roll a Flavorful <span className='text-[#39DB4A]'>Kiss</span></motion.h1>
            <motion.p
                initial={"hidden"}
                exit="exit"
                variants={child_p}
                whileInView={"show"}
                viewport={{once:false}}
            className='mt-6 md:mt-10 text-center md:text-left text-[#4A4A4A] leading-[28px] '>
            Masters of Maki: Elevate Your Taste Buds with Our Sushi <br className='hidden md:block'/> Creations, Where Tradition Meets Innovation!
            </motion.p>
            <motion.div
            initial={"hidden"}
            exit="exit"
            variants={child_p}
            whileInView={"show"}
            viewport={{once:false}}
             className='mt-10 flex justify-center md:justify-start items-center gap-x-6'>
                <button className='text-white py-[10px] shadow-[#c5c4c4] shadow-md px-6 rounded-[28px] bg-[#39DB4A]'>Order Now</button>
                <div className='flex items-center gap-x-4'>
                    Watch Video
                    <button className='flex justify-center items-center w-9 h-9 rounded-full bg-[#FFFFFF] play-shadow'>
                        <BiSolidRightArrow size={19}/>
                    </button>
                </div>
            </motion.div>
       </div>
       <motion.div
               initial={"hidden"}
               exit="exit"
               variants={child}
               whileInView={"show"}
               viewport={{once:false}}
       className='relative md:-mt-12'>
        <img src={sushi1} alt='food' width={650}/>
        <img src={sushi2} alt='food' className='hidden md:block absolute top-20 -left-16'/>
        <img src={sushi2} alt='food' width={150} className='md:hidden block absolute top-20 left-1'/>
        <img src={sushi3} alt='food' className='absolute bottom-0'/>
       </motion.div>
    </motion.div>
  )
}

export default Hero