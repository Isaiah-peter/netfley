import React from 'react'
import { MdArrowBack } from 'react-icons/md'

function Watch() {
  const trailer = "https://www.w3schools.com/tags/movie.ogg"
  return (
    <div className='watch'>
      <div className="back">
        <MdArrowBack />
        home 
      </div>
      <video className='video' autoPlay progress controls src={trailer} />
    </div>
  )
}

export default Watch
