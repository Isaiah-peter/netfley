import React, {useState} from 'react'
import Netflix from '../../Svg/netflix.svg'
import User from '../../Svg/imageIsaiah.png'
import { MdSearch, MdNotifications, MdArrowDropDown } from 'react-icons/md'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return  () => window.onscroll = null
  }
 
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={Netflix} alt='netflix' />
          <span>Homepage</span>
          <span>Service</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <MdSearch className='icon' />
          <span>KIDZ</span>
          <MdNotifications className='icon' />
          <img src={User} alt="user" />
          <div className="profile">
            <MdArrowDropDown className='icon' />
            <div className="options">
              <span>Setting</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
