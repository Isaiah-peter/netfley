import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../component/navbar/Navbar'
import Feature from '../../component/feature/Feature'
import List from '../../component/list/list'



function Home({ type }) {
  const [data, setData] = useState([])
  const [feature, setFeature] = useState(undefined)

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    try {
      if (window.location.pathname == "/") {
        const res = await axios.get("http://Localhost:8000/movies/", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjE2LCJJc0FkbWluIjp0cnVlLCJleHAiOjE2MzQyODg0OTZ9.7lPQgd3p1X5BQ2SbK9lTfntnPb1BOcfaW55p0fPpnfA"
          }
        }
        )
        setData(res.data)
        if (res.data.length > 0) {
          const rand = Math.floor(Math.random() * res.data.length)
          const picked = res.data[rand]
          console.log(picked);
          setFeature(picked);
        }
      } else {
        const res = await axios.get("http://Localhost:8000/series/", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjE2LCJJc0FkbWluIjp0cnVlLCJleHAiOjE2MzQyODg0OTZ9.7lPQgd3p1X5BQ2SbK9lTfntnPb1BOcfaW55p0fPpnfA"
          }
        }
        )
        setData(res.data)
        if (res.data.length > 0) {
          const rand = Math.floor(Math.random() * res.data.length)
          const picked = res.data[rand]
          console.log(picked);
          setFeature(picked);
        }
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='home'>
      <Navbar />
      <Feature movie={feature} type={type} />
      <List movies={data} />
    </div>
  )
}

export default Home
