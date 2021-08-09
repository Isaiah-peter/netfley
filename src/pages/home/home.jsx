import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Feature from '../../component/feature/Feature'
import List from '../../component/list/list'

function Home({type}) {
  return (
    <div className='home'>
      <Navbar />
      <Feature type={type}/>
      <List />
      <List />
      <List />
      <List /> 
    </div>
  )
}

export default Home
