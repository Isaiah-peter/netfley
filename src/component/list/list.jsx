import React, { useRef, useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { MdTurnedInNot } from 'react-icons/md'
import ListItem from '../listItem/ListItem'

const List = () => {
  const [slideNumber ,setSlideNumber] = useState(0)
  const [isMoved ,setIsmoved] = useState(false)

  const listRef = useRef()

  const handleClick = (direction) => {
    
    let distance = listRef.current.getBoundingClientRect().x - 50
    if(slideNumber == 0){
      setIsmoved(false)
    }else{
      setIsmoved(true)
    }
    if (direction === "left" && slideNumber > 0) {
      
      setSlideNumber(slideNumber - 1)
        listRef.current.style.transform = `translateX(${ 230 + distance}px)`
    }
    if (direction === "right" && slideNumber < 5 ) {
      setSlideNumber(slideNumber + 1)
        listRef.current.style.transform = `translateX(${distance - 230}px)`
    }
  }
  return (
    <div className='list'>
      <span className="listTitle">Continue to Watch</span>
      <div className="wrapper">
        {isMoved === true && <BiLeftArrow
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />}
        <div className="container" ref={listRef}>
          <ListItem index={0}/>
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
        </div>
        <BiRightArrow
          className="sliderArrow right"
          onClick={() => handleClick("right")} />
      </div>
    </div>
  )
}

export default List
