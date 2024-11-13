import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"; // Import custom CSS file for GitHub-inspired styling

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg github-navbar shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold github-logo" href="#">Blaze Register</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link github-link" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/register" className="nav-link github-link" >Register</NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text github-text">
                        {/* Settings */}
                    </span>
                </div>
            </div>
        </nav>                  
    );
}

export default Nav;
