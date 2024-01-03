import chef from '/chef.png'
import chef2 from '/chef2.png'
import people from '/people.png'
import {  FaStar } from 'react-icons/fa'
import {motion} from 'framer-motion'
const Testimonial = () => {
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
      <div className='flex flex-col-reverse md:flex-row justify-between'>
        <div className='relative mt-10 md:mt-0'>
          <img src={chef} alt='' width={460}/>
          <img src={chef2} alt='' className='absolute -bottom-32 -right-[6.5rem]'/>
          
        </div>
        <div>
          <h4 className='text-[#F63B3B] text-center md:text-left text-[13px] mt-10 md:mt-6 font-bold tracking-[2px] mb-4'>TESTIMONIALS</h4>
          <h1 className='text-3xl md:text-[3rem] text-center md:text-left font-bold leading-[40px] md:leading-[56px] mt-6 md:mt-12'>What Our Customers <br className='hidden md:block'/> Say About Us</h1>
          <p className='text-[#555555] text-center md:text-left max-w-xl mt-6 md:mt-10 text-xl md:text-2xl'>
          “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
          </p>
          <div className='flex items-center justify-center md:justify-start gap-x-6 md:gap-x-12 mt-6'>
            <img src={people} alt='' className='hidden md:block'/>
            <img src={people} alt='' width={100} className='md:hidden block'/>
            <div >
              <h1 className='text-[black] font-bold text-lg md:text-xl'>Customer Feedback</h1>
              <p className='flex items-center mt-2'><FaStar className='text-[yellow]'/>4.9 <span className='text-[gray] ml-2'> (18.6k Reviews)</span></p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Testimonial