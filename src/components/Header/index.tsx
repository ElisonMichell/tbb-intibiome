import React, { useState } from 'react'
import logo from '/src/assets/logo.png'
import search from '/src/assets/search.svg'
import menu from '/src/assets/menu.svg'
import x from '/src/assets/x.svg'
import DesktopMenu from '../DesktopMenu'
import MobileMenu from '../MobileMenu'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <header className={`isOpen-${isOpen}`}>
      <div className='header-bar'>
        <button className='menu' onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? x : menu} alt="menu button" width={24}/>
        </button>
        <img className='logo' src={logo} alt="logo" />
        <button className='search'>
          <img src={search} alt="search button" />
        </button>
      </div>
      <DesktopMenu />
      <MobileMenu isOpen={isOpen} />
    </header>
  )
}
export default Header;