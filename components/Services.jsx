import React from 'react'
import service1 from '/service1.png'
import service2 from '/service2.png'
import service3 from '/service3.png'
import service4 from '/service4.png'
import {motion} from 'framer-motion'
const Services = () => {
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
    <motion.section className='mt-16 md:mt-40'
    initial={"hidden"}
    exit="exit"
    variants={child}
    whileInView={"show"}
    viewport={{once : false}}
    >
      <div className='flex flex-col md:flex-row justify-between'>
      <div className='md:w-1/2'>
          <h4 className='text-[#F63B3B] text-center md:text-left text-[13px] mt-8 font-bold tracking-[2px] '>OUR STORY AND SERVICES</h4>
          <h1 className='text-3xl md:text-[3rem] text-center md:text-left font-bold leading-[40px] md:leading-[56px] mt-6 md:mt-10'>Our Culinary Journey <br className='hidden md:block'/> And Services</h1>
          <p className='text-[#555555] text-center md:text-left max-w-[34rem] mt-6 md:mt-10 text-xl md:text-2xl'>
          Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
          </p>
          <button className='flex mx-auto md:flex-none md:mx-0 text-white py-[10px] my-6 shadow-[#c5c4c4] shadow-md px-8 rounded-[28px] bg-[#39DB4A]'>Explore</button>
        </div>
        <div className='grid md:grid-cols-2 md:w-1/2 gap-x-6 gap-y-10  md:ml-16'>
          <div className='flex flex-col justify-center items-center bg-[#FFFFFF] rounded-[20px] card-shadow px-0 md:px-2 py-8'>
              <img src={service1} alt='/'/>
              <h1 className='text-[#5FE26C] mt-2 text-xl font-bold'>CATERING</h1>
              <p className='text-[#90BD95] text-[18px] px-[2.7rem] mt-3 text-center '> Delight your guests with our flavors and  presentation</p>
          </div>
          <div className='flex flex-col justify-center items-center bg-[#FFFFFF] rounded-[20px] card-shadow px-2 py-4'>
             <img src={service2} alt='/'/>
              <h1 className='text-[#5FE26C] mt-2 text-xl font-bold'>FAST DELIVERY</h1>
              <p className='text-[#90BD95] text-[18px] px-[2rem] mt-3 text-center '>We deliver your order promptly to your door</p>
          </div>
          <div className='flex flex-col justify-center items-center bg-[#FFFFFF] rounded-[20px] card-shadow px-2 py-8'>
              <img src={service3} alt='/'/>
              <h1 className='text-[#5FE26C] mt-2 text-xl font-bold'>ONLINE ORDERING</h1>
              <p className='text-[#90BD95] text-[18px] px-[2rem] mt-3 text-center '> Explore menu & order with ease using our Online Ordering </p>
          </div>
          <div className='flex flex-col justify-center items-center bg-[#FFFFFF] rounded-[20px] card-shadow px-2 py-4'>
              <img src={service4} alt='/'/>
              <h1 className='text-[#5FE26C] mt-2 text-xl font-bold'>GIFT CARDS</h1>
              <p className='text-[#90BD95] text-[18px] px-[1.5rem] mt-3 text-center '> Give the gift of exceptional dining with Foodi Gift Cards</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Services