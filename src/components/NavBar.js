import React from 'react'
import "./NavBar.css"

function NavBar(){
  return (
    <header className='nav-header'>
        <div>Portfolio</div>
        <ul className='nav-list'>
            <li className='nav-items'><a href="#">About</a></li>
            <li className='nav-items'><a href="#">Projects</a></li>
            <li className='nav-items'><a href="#">Contact</a></li>
        </ul>
    </header>
  )
}

export default NavBar