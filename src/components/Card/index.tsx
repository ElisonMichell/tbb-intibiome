import React from 'react'
import './styles.scss'

interface CardProps {
  photo: string;
  description: string;
  footer?: string;
  color?: "blue" | "pink" | "green";
}

function Card({photo, description, footer, color="blue"}:CardProps) {
  return(
    <div className='card'>
      <img src={photo} alt="" />
      <p className='content'>
        {description}
      </p>
      {footer &&
        <span className={`label color-${color}`}>
          {footer}
        </span>
      }
    </div>
  )
}
export default Card;