import React, { useState } from 'react'
import Movies_image from '../../Svg/images.jpg'
import { MdAdd, MdPlayArrow, MdThumbDown, MdThumbsUpDown, MdThumbUp, } from 'react-icons/md'

function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false)
  const trailer = "https://www.w3schools.com/tags/movie.ogg"
  return (
    <div className='listitem'
      style={{left: isHovered && (index * 225) - 50 + (index * 2.5)}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={Movies_image} alt="movies" />
      {isHovered &&(
      <>
      <video src={trailer} autoPlay={true} loop />
      <div className="itemsinfo">
        <div className="icons">
          <MdPlayArrow className="icon"/>
          <MdAdd className="icon"/>
          <MdThumbUp className="icon"/>
          <MdThumbDown className="icon"/>
        </div>
        <div className="iteminfotop">
          <span>1 hour and 16 min</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maiores quisquam omnis
          a? Esse, ullam dolorem? Molestiae id .
        </div>
        <div className="genre">Action thrillers</div>
      </div>
      </>
      )}
    </div>
  )
}

export default ListItem
