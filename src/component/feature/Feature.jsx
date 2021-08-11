import React, { useRef, useState, useEffect } from 'react'
import Matrix from '../../Svg/image.png'
import { MdInfoOutline, MdPlayArrow } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Feature({ type, movie }) {



  return (
    <div className='feature'>
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value='Adventure'>Adventure</option>
            <option value='Adventure'>Adventure</option>
            <option value='Adventure'>Adventure</option>
            <option value='Adventure'>Adventure</option>
            <option value='Adventure'>Adventure</option>
            <option value='Adventure'>Adventure</option>
            <option value='Adventure'>Adventure</option>
            <option value='Adventure'>Adventure</option>
            <option value='Adventure'>Adventure</option>
            <option value='Adventure'>Adventure</option>
            <option value='Adventure'>Adventure</option>
            <option value='Adventure'>Adventure</option>
          </select>
        </div>
      )}
      {movie !== undefined && (
        <>
          <img src={movie.Img} className='feature-image' alt="user" />
          <div className="info">
            <img src={Matrix} alt='movie name' />
            <span className='desc'>{movie.Disc}
            </span>
            <div className="buttons">
            <Link to = {{pathname:'/watch', movie:movie}} className='link' >
              <button className="play">
                <MdPlayArrow className='f-icon' />
                <span>Play</span>
              </button>
              </Link>
              <button className="more">
                <MdInfoOutline className='f-icon' />
                <span>info</span>
              </button>
            </div>

          </div>
        </>
      )}

    </div>
  )
}

export default Feature
