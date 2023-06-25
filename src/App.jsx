import React from 'react'
React
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlingCard from './components/HeadlingCard'
import Food from './components/Food'
import './index.css'


function App() {
  return (
    <div className='overflow-x-hidden'>
     <Navbar/>
     <Hero/>
     <HeadlingCard/>
     <Food/>
    </div>
  )
}

export default App
