import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark" style={{
      backgroundColor: `#01b79f`
    }}>
      
      <div className="container">
        
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
          
        <NavLink className="navbar-brand mt-2 mt-lg-0" to="/">
            <img
              src="web-article.png"
              height="45"
              alt=" Logo"
              loading="lazy"
            />
          </NavLink>
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/contactus">ContactUs</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/signup">SignUp</NavLink>
            </li>
             {/* <li className="nav-item">
              <NavLink className="nav-link" to="/main/resetpassword">Resetpassword</NavLink>
            </li> */}
           
            
          </ul>
          
        </div>
        
      </div>
      
    </nav>
    </div>
  )
}

export default Header