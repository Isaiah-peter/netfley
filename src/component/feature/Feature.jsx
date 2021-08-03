import React from 'react'
import User from '../../Svg/movies.png'
import Matrix from '../../Svg/image.png'
import { MdInfoOutline, MdPlayArrow } from 'react-icons/md'

function Feature({type}) {
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
      <img src={User} className='feature-image' alt="user" />
      <div className="info">
        <img src={Matrix} alt='movie name' />
        <span className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Natus distinctio iure assumenda vero! Aliquam harum nisi
          praesentium, doloremque fugit quos veniam atque ducimus
          veritatis in accusamus laborum, officia repellat impedit
        </span>
        <div className="buttons">
          <button className="play">
            <MdPlayArrow className='f-icon'/>
            <span>Play</span>
          </button>
          <button className="more">
            <MdInfoOutline className='f-icon'/>
            <span>info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Feature
