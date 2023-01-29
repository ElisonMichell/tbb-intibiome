import React from 'react'
import down from '/src/assets/caret-down.svg'

import './styles.scss'

interface MobileMenuProps {
  isOpen: boolean;
}

function MobileMenu({isOpen}:MobileMenuProps) {
  return(
    <nav className={`navigation isOpen-${isOpen}`}>
      <ul >
        <li>
          <button>brand philosophy</button>
        </li>
        <li>
          <button>product technology</button>
        </li>
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
        <li>
          <button>contact us</button>
        </li>
      </ul>
    </nav>
  )
}
export default MobileMenu;