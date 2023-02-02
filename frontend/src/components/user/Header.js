
import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from "./AppContext";
import { useState } from "react";


const Header = () => {
  const url = "http://localhost:5000";
  const [currentUser , setCurrentUser]=  useState(JSON.parse(sessionStorage.getItem('user')))
  const {loggedIn,setloggedIn} = useContext(AppContext);
  const navigate = useNavigate();
  const logout =()=>{
    //destroy session value 
    sessionStorage.removeItem('user');
    //  setloggedIn to false
    setloggedIn(false)
    //  navigate to login page
    navigate('./main/home')
  }
  return (
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
              src="web-article.png"
              height="45"
              alt=" Logo"
              loading="lazy"
            />
          </a>
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/profile">Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/manageblog">Manage Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/managevideo">Manage Video</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog/listblog">List Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/addblog">Add Blog</NavLink>
            </li>
           

          </ul>
          
        </div>
        
    
        
        <div className="d-flex align-items-center">
          
          <a className="text-reset me-3" href="#">
            <i className="fas fa-shopping-cart"></i>
          </a>
    
          
          <div className="dropdown">
            <a
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bell"></i>
              <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">Some news</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Another news</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </div>
          
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a className="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Settings</a>
              </li>
              {/* <li>
                <a className="dropdown-item" href="#">Logout</a>
              </li> */}
              {
              // currentUser=== null?
              !loggedIn?
              <li className="nav-item">
                <NavLink className="btn btn-primary" to="/main/login">Login Now</NavLink>
              </li>
              :
              <button onClick={logout} className="btn btn-danger">Logout</button>
            }
            </ul>
          </div>
        </div>
        
      </div>
      
    </nav>
  )
}

export default Header