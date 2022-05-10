import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../assets/banner.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${banner})`}}>
      <div className='headerContainer'><h1>Home</h1>
      <p>Food Corner</p>
     <Link to='/menu'> <button>
        Order Now</button></Link></div> 
    </div>
  )
}

export default Home
