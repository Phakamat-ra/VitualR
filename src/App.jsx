import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Feature from './components/Feature'
import Workflows from './components/Workflows'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import Footers from './components/Footers'







const App = () => {
  return (
   <>
   <Navbar/>
   <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection/>
      <Feature/>
      <Workflows/>
      <Pricing/>
      <Reviews/>
      <Footers/>
    </div>
   
   </>
  )
}

export default App