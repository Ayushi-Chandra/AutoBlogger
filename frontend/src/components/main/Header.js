import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div className="container-fluid">
        
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
    
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="rowhouse.png"
              height="15"
              alt="Logo"
              loading="lazy"
            />
            <i className='rowhouse.png'></i>
          </a>
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/contactus">ContactUs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/signup">signup</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/resetpassword">Resetpassword</NavLink>
            </li>
           
            
          </ul>
          
        </div>
        
      </div>
      
    </nav>
    </div>
  )
}

export default Header