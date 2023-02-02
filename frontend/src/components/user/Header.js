import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useState } from "react";
import app_config from "../../config";
import { useUserContext } from "../../context/UserProvider";

const Header = () => {
  
  const navigate = useNavigate();
  const { loggedin, setLoggedin, logout } = useUserContext();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.api_url;
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: `#01b79f`,
      }}
    >
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
          <NavLink className="navbar-brand mt-2 mt-lg-0" to="/">
            <img src="web-article.png" height="45" alt=" Logo" loading="lazy" />
          </NavLink>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/addvideo">
                Add Video
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/managevideo">
                Manage Video
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog/listblog">
                List Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user/manageblog">
                Manage Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog/listblog">
                List Blog
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
         

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
                  <NavLink className="dropdown-item" to="/user/profile">
                    My profile
                  </NavLink>
                </li>
                
                <li>
                  <button onClick={logout} className="dropdown-item" href="#">
                    Logout
                  </button>
                </li>
              
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
