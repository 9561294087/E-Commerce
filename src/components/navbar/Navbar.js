import React from 'react'
import "./navbar.css"

function Navbar() {

  return (
    <div className='container'>
        <div className='logo'>USERS</div>
        <label>
         <input className='inputtag' name="myInput" placeholder='Fill Your Information' />
         <button className='btn'>Submit</button>
      </label>
        <ul className='userData'>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <button className='btn'>Login</button>
            <button className='btn'>SignUp</button>
        </ul>
    </div>
  )
}

export default Navbar;