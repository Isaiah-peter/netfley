import React, { useState} from 'react'
import { MdAdd, MdPlayArrow, MdThumbDown, MdThumbUp, } from 'react-icons/md'
import {Link} from 'react-router-dom'


function ListItem({data,index}) {
  const [isHovered, setIsHovered] = useState(false)
  
  const trailer = data.Trailer
  return (
    <Link to={{ pathname:"/watch", movie:data }}>
    <div className='listitem'
      style={{left: isHovered && (index * 225) - 50 + (index * 2.5)}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={data.Img} alt="movies" />
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
          <span>{data.Title}</span>
          <span className="limit">+{data.Limit}</span>
          <span>{data.Year}</span>
        </div>
        <div className="desc">
         {data.Disc}
        </div>
        <div className="genre">{data.Genre}</div>
      </div>
      </>
      )}
    </div>
    </Link>
  )
}

export default ListItem
