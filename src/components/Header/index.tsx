import React from 'react'
import logo from '/src/assets/logo.png'
import down from '/src/assets/caret-down.svg'

import './styles.scss'

function Header() {
  return(
    <header>
      <div className='header-bar'>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <button>about us <img src={down} alt="down icon" /></button>
          </li>
          <li>
            <button>our products  <img src={down} alt="down icon" /></button>
          </li>
          <li>
            <button>intimate health  <img src={down} alt="down icon" /></button>
          </li>
          <li>
            <button>contact us</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header;