import React from 'react'
import { Footer, Hero, Menu, Navbar, Popular, Services, Testimonial } from '.'


const Home = () => {
  return (
    <div className='px-3'>
      <Navbar/>
      <Hero/>
      <Popular/>
      <Menu/>
      <Testimonial/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Home