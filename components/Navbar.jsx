import React from 'react'
import { MdOutlineKeyboardArrowDown,MdSearch } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { RiMenu3Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

import { useState } from 'react';
import { navArray } from './data';
import logo from '/LOGO.png'
import cart from '/cart.png'
import {motion} from 'framer-motion'
const Navbar = () => {
    const[activeTab, setActiveTab] = useState('Home')
    const[navList, setNavList] = useState(navArray)
    const[isOpen, setIsOpen] = useState(false)

    const handleToggle = (nav,id) => {
        setNavList((prevlist )=> {
            return prevlist.map((item) => {
                return item?.id === id ? {...item, showDrop:!item?.showDrop} :item
            })
        })
        setActiveTab(nav)
    }
    
  return (
    <header className='px-6 md:px-[4.5rem] 2xl:-ml-20 2xl:max-w-[1700px] left-0 md:left-0 md:right-0 2xl:right-auto 2xl:left-auto 2xl:mx-auto py-6 fixed top-0  w-full bg-[#FFFFFF] z-50'>
        <nav className='flex flex-row items-center justify-between text-[18px] '>
           <a href='/' className='hidden md:block'> <img src={logo} alt='logo' className='hidden md:block'/></a>
           <a href='/'> <img src={logo} alt='logo' width={100} className='flex md:hidden '/></a>
            <ul className='hidden lg:flex flex-row items-center gap-x-6'>
                {
                    navList.map((item) => (

                        <>
                        <li key={item.id} onClick={() => handleToggle(item.nav,item.id)} className={`font-bold flex flex-row cursor-pointer items-center hover:text-[#36CC45] ${item.nav === activeTab && 'text-[#36CC45]'}`}>
                            {item.nav}
                            {
                                item.navLinks &&
                                <span>
                                    {item?.showDrop ? <MdOutlineKeyboardArrowDown size={24} className='text-[#36CC45] rotate-180 mt-1'/>
                                    :
                                    <MdOutlineKeyboardArrowDown size={24} className='text-[#36CC45] mt-1'/>}
                                </span>
                            }
                        </li>
                        {
                            item.navLinks && item.nav === activeTab ?
                            <div className={`z-50 bg-white px-6 py-3 card-shadow rounded-md ${activeTab === 'Services' ? 'translate-x-[16.6rem]' :'translate-x-[4.6rem]'} absolute top-24 `}>
                                <div className='bg-white px-3 py-3 rotate-45 z-0 absolute -top-2 '/>
                                <div className='z-50'>
                                    <div>{item.droptab.map((tabs) => (
                                        <p key={tabs} className='text-[#555555] cursor-pointer'><span className='text-[#36CC45]'>*</span> {tabs.item}</p>
                                    ))}</div>
                                </div>
                            </div>
                            : ''
                        }
                        </>
                    ))
                }
             
            </ul>
            {/* mobile */}
            {isOpen && 
             <motion.ul initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1, ease:'easeInOut'}} className='fixed md:hidden left-0 top-0 w-[60%] bg-[#FFFFFF] card-shadow px-6 py-4 h-screen'>
                 {
                    navList?.map((item) => (

                        <>
                        <li key={item.id}  onClick={() => handleToggle(item.nav,item.id)} className={`flex mb-6 flex-row cursor-pointer items-center hover:text-[#36CC45] ${item.nav === activeTab && 'text-[#36CC45]'}`}>
                            {item.nav === 'Home' ? <a href='/'>{item.nav}</a>
                            :
                            item.nav
                            }
                            {
                                item.navLinks &&
                                <span>
                                    {item.showDrop ? <MdOutlineKeyboardArrowDown size={24} className='text-[#36CC45] rotate-180 mt-1'/>
                                    :
                                    <MdOutlineKeyboardArrowDown size={24} className='text-[#36CC45] mt-1'/>}
                                </span>
                            }
                        </li>
                        {
                            item?.showDrop && item.navLinks   && item.nav === activeTab ?
                            <div className={`z-50 bg-white px-6 py-3 card-shadow rounded-md ${item.showDrop && activeTab === 'Services' ? 'translate-y-[7rem] translate-x-[0.01rem]' :'translate-x-[0.01rem] translate-y-[0.8rem]'} absolute top-24 `}>
                                <div className='bg-white px-3 py-3 rotate-45 z-0 absolute -top-2 '/>
                                <div className='z-50'>
                                    <div>{item?.droptab?.map((tabs) => (
                                        <p key={tabs?.item} className='text-[#555555] cursor-pointer'><span className='text-[#36CC45]'>*</span> {tabs.item}</p>
                                    ))}</div>
                                </div>
                            </div>
                            : ''
                        }

                        </>
                 ))}
                 <div className=' fixed bottom-3 flex bg-[#39DB4A] cursor-pointer text-[16px] text-[#ffffff] items-center rounded-[28px] gap-x-2 py-3 px-6'>
                    <TbPhoneCall size={24}/> 
                    <h3>Connect</h3>
                </div>
            
             </motion.ul>
            }
            <div className='flex items-center gap-x-4 md:gap-x-8'>
                <MdSearch className='cursor-pointer' size={26}/>
                <div className='relative cursor-pointer'>
                    <img src={cart} alt='cart'/>
                    <p className='bg-[#39DB4A] flex justify-center items-center w-6 h-6 absolute text-[16px] text-[#FFFFFF]  -top-2 left-3 rounded-full'>8</p>
                </div>
                <div  onClick={() => setIsOpen(!isOpen)} className='block md:hidden w-6'>
                   {isOpen ? <FaTimes size={24}/> : <RiMenu3Fill size={24} className=''/>}
                </div>
                <div className='hidden  bg-[#39DB4A] cursor-pointer text-[20px] text-[#ffffff] md:flex items-center rounded-[28px] gap-x-2 py-3 px-6'>
                    <TbPhoneCall size={24}/> 
                    <h3>Connect</h3>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar