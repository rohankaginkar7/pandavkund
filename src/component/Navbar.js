import React from 'react'
import PropTypes from 'prop-types'
import {useLocation, useNavigate} from 'react-router-dom';

export default function Navbar(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state;
    let welcomeMsg, logout;
    const handleLogout = () => {
        navigate("/", {state: ''});
    }

    if(user !== null) {
        welcomeMsg = <button className="btn btn-info btn-sm" disabled>Welcome {location.state}</button>
        logout = <ul className="navbar-nav mx-2 my-1">
            <li className="nav-item">
            <img src='./logoutIcon.png' alt='Logout' width="30" height="30" onClick={handleLogout}/>
            </li>
        </ul>  
    }
  return (
    <div>
        <nav className="navbar" style={{backgroundColor: "#5269cd"}}>
            <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <form className="d-flex">
                {welcomeMsg}
                {logout}
            </form>
            </div>
        </nav>
    </div>
  )
}

Navbar.prototype = {title: PropTypes.string}