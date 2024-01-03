import React from 'react'
import logo from '/LOGO.png'
import {FiFacebook, FiTwitter} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
import {CiYoutube} from 'react-icons/ci'
const Footer = () => {
  const handleScroll = () => {
    window.scrollTo(0,0)
  }
  return (
    <footer className='bg-[#FFFFFF] mt-28'>
      <div className='grid md:grid-cols-4 gap-x-20'>
          <div className='flex flex-col gap-y-4'>
            <img src={logo} alt='' width={100} className='flex mx-auto md:flex-none md:mx-0'/>
            <p className='text-[#555555] text-center md:text-left md:max-w-[12rem] text-[16px] font-[500]'>
            Savor the artistry where every dish is a culinary masterpiece
            </p>
          </div>
          <ul className='hidden md:block leading-[35px]  text-center mt-4 md:mt-0'>
            <li className='text-black font-bold '>Useful links</li>
            <a href='/'><li className='text-[#555555] mt-4'>About us</li></a>
            <a href='/'><li className='text-[#555555] '>Events</li></a>
            <a href='/'> <li className='text-[#555555] '>Blogs</li></a>
            <a href='/'> <li className='text-[#555555] '>FAQ</li></a>
           
          </ul>
          <ul className='hidden md:block leading-[35px] text-left'>
            <li className='text-black font-bold '>Main Menu</li>
            <a href='/'><li onClick={handleScroll} className='text-[#555555] mt-4'>Home</li></a>
            <a href='/'><li className='text-[#555555] '>Offers</li></a>
            <a href='/'><li className='text-[#555555] '>Menus</li></a>
            <a href='/'> <li className='text-[#555555] '>Reservation</li></a>
          </ul>
          <div className='flex items-center md:hidden justify-between mt-4 md:mt-0'>
         <ul className='leading-[35px]  text-center  md:mt-0'>
            <li className='text-black font-bold '>Useful links</li>
            <a href='/'><li className='text-[#555555] mt-4'>About us</li></a>
            <a href='/'><li className='text-[#555555] '>Events</li></a>
            <a href='/'> <li className='text-[#555555] '>Blogs</li></a>
            <a href='/'> <li className='text-[#555555] '>FAQ</li></a>
           
          </ul>
          <ul className='leading-[35px] text-left'>
            <li className='text-black font-bold '>Main Menu</li>
            <li onClick={handleScroll} className='text-[#555555] mt-4'>Home</li>
            <a href='/'><li className='text-[#555555] '>Offers</li></a>
            <a href='/'><li className='text-[#555555] '>Menus</li></a>
            <a href='/'> <li className='text-[#555555] '>Reservation</li></a>
          </ul>
         </div>
          <ul className='leading-[35px] text-center mt-4 md:mt-0 md:text-left'>
            <li className='text-black font-bold '>Contact Us</li>
            <li className='text-[#555555] mt-4'>example@gmail.com</li>
            <li className='text-[#555555] '>+64 958 248 966</li>
            <li className='text-[#555555] '>Social Media</li>
          </ul>
          {/* mobile */}
         
      </div>

      <div className='mt-16 flex flex-col md:flex-row items-center gap-x-24 pb-4'>
        <div className='flex gap-x-10 items-center mb-4 md:mb-0'>
          <a href='https://facebook.com'>
            <div className='flex flex-col text-[#FFFFFF] items-center justify-center w-10 h-10 rounded-full bg-[#39DB4A] transition-all duration-700 ease-in-out hover:bg-[#39DB4A] hover:text-[#FFFFFF]'><FiFacebook/></div>
          </a>
          <a href='https://instagram.com'>
            <div className='flex flex-col text-[black] items-center justify-center w-10 h-10 rounded-full bg-[#EDFFEF] transition-all duration-700 ease-in-out hover:bg-[#39DB4A]  hover:text-[#FFFFFF]'><FaInstagram/></div>
          </a>
          <a href='https://twitter.com'>
            <div className='flex flex-col text-[black] items-center justify-center w-10 h-10 rounded-full bg-[#EDFFEF] transition-all duration-700 ease-in-out hover:bg-[#39DB4A] hover:text-[#FFFFFF]'><FiTwitter/></div>
          </a>
          <a href='https://youtube.com'>
            <div className='flex flex-col text-[black] items-center justify-center w-10 h-10 rounded-full bg-[#EDFFEF] transition-all duration-700 ease-in-out hover:bg-[#39DB4A] hover:text-[#FFFFFF]'><CiYoutube/></div>
          </a>
        </div>
        <p>
        Copyright &copy; 2023 Dscode | All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer