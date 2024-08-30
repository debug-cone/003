import React from 'react'
import logo from "../assets/logo.svg"
import ButtonComponent from './ButtonComponent'

function NavbarComponent() {
  let menuItems = ['Home', 'About', 'Contact']
  return (
    <div className='navbar'>
      
      <img className='navbar_logo' 
      src={logo} 
      alt="Logo" 
      style={{width : '100px'}}
      />

      <ul className='navbar_menuItems'>
        {menuItems.map((el, index) => {
          return <li className='navbar_menuItems_item' key={index} >{el}</li>
        })}
      </ul>

      <div className='navbar_buttons'>
        <ButtonComponent title='Login' bgColor='dodgerblue' />
        <ButtonComponent title='Register' bgColor='greenyellow' />
      </div>
    </div>
  )
}

export default NavbarComponent