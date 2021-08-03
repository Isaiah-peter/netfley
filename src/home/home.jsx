import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Feature from '../component/feature/Feature'
import List from '../component/list/list'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Feature/>
      <List />
      <List />
      <List />
      <List /> 
    </div>
  )
}

export default Home
