import React from 'react'
import ulabs from '/src/assets/u-labs.png'
import instagram from '/src/assets/instagram.svg'

function Footer() {
  return(
    <footer>
      <nav>
        <ul>
          <li>
            <button>contact us</button>
          </li>
          <li>
            <button>faq</button>
          </li>
          <li>
            <button>site map</button>
          </li>
          <li>
            <button>privacy policy</button>
          </li>
          <li>
            <button>cookies policy</button>
          </li>
          <li>
            <button>legal notice</button>
          </li>
        </ul>
      </nav>
      <div className='footer'>
        <img className='logo' src={ulabs} alt="u-labs logo" />
        <img src={instagram} alt="link to instagram icon" />
      </div>
    </footer>
  )
}
export default Footer;