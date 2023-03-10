import React from 'react'
import down from '/src/assets/caret-down.svg'

import './styles.scss'

function DesktopMenu() {
  return(
    <nav>
      <ul className='desktop-navigation'>
        <li>
          <button>about us <img src={down} alt="down icon" height={14} /></button>
          <ul className='drop-down'>
            <li>
              <button>brand philosophy</button>
            </li>
            <li>
              <button>product technology</button>
            </li>
          </ul>
        </li>
        <li>
          <button>our products  <img src={down} alt="down icon" height={14} /></button>
          <ul className='drop-down'>
            <li>
              <button>all products</button>
            </li>
            <li>
              <button>intibiome wellness</button>
            </li>
            <li>
              <button>intibiome active</button>
            </li>
            <li>
              <button>intibiome agecare</button>
            </li>
          </ul>
        </li>
        <li>
          <button>intimate health  <img src={down} alt="down icon" height={14} /></button>
          <ul className='drop-down'>
            <li>
              <button>article 1</button>
            </li>
            <li>
              <button>article 2</button>
            </li>
            <li>
              <button>article 3</button>
            </li>
            <li>
              <button>faq</button>
            </li>
          </ul>
        </li>
        <li>
          <button>contact us</button>
        </li>
      </ul>
    </nav>
  )
}
export default DesktopMenu;