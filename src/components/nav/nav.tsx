import React from 'react'
import './nav.scss';

const navArr = ['Алфавіт', 'Звірі', 'Казки', 'Скоромовки'];

export const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        {navArr.map(item => (
          <li>
            <a className="nav__item" href="#alphabeth">{item}</a>
          </li>
        ))}

      </ul>
    </div>
  )
}

