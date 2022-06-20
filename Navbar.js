import React from "react";
import {Link,NavLink} from 'react-router-dom'; //Navlink for to active nav bar 
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">React User</NavLink>
                
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                       
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                       
                    </ul>

                </div>
            </div>
            <Link className="btn btn-outline-light" to ="/users/add">AddUser</Link>
            </div>
        </nav>

    )
}

export default Navbar;