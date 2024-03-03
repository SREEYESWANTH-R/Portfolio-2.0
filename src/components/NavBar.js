import React from 'react'
import "./NavBar.css"

function NavBar(){
  return (
    <header className='nav-header'>
        <div>Portfolio</div>
        <ul className='nav-list'>
            <li className='nav-items'>About</li>
            <li className='nav-items'>Projects</li>
            <li className='nav-items'>ContactUs</li>
        </ul>
    </header>
  )
}

export default NavBar