import React from 'react'
import Navbar from '../component/navbar/Navbar'
import User from '../Svg/imageIsaiah.png'


function Home() {
  return (
    <div className='home'>
      <Navbar />
      <img width='100%' height='100%' src={User} alt="user" />
    </div>
  )
}

export default Home
