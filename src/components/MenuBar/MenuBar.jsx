import React from 'react'
import './MenuBar.css'
import { IoMdSearch } from 'react-icons/io'
import { IoMicOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import {RemoveScroll} from 'react-remove-scroll';

const MenuBar = () => {
  return (
    <RemoveScroll>
    <section id='MenuBar'>
         <div className="menuContainer ">
         <div className="menuSearchHead">
         <div className="menuSearch">
         <IoMdSearch />
         </div>
         <div className="menuInputSearch">
          <input type="text" name="" id="" placeholder='Search for products, stories, …'/>
         </div>
         <div className="menuMic">
         <IoMicOutline />
         </div>
         </div>
         
        <div className="MenuHead">
          <h3>Products<br/>Stories<br/>Gift Guide</h3>
        </div>
        <div className="menuNavbar">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <Link to='/login'><li>Login</li></Link>
            <li>Signup</li>
            <li>Contact Us</li>
          </ul>
        </div>
        
       
      </div> 
    </section>
    </RemoveScroll>
  )
}

export default MenuBar
