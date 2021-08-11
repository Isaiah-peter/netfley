import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

function Watch() {
  const location = useLocation()
  const movie = location.movie
  const trailer = movie.Video
  return (
    <div className='watch'>
       <Link to='/' className='link'>
      <div className="back">
        <MdArrowBack />
        home 
      </div>
      </Link>
      <video className='video' autoPlay progress="true" controls src={trailer} />
    </div>
  )
}

export default Watch
