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
        welcomeMsg = <button className="btn btn-info" disabled>Welcome {location.state}</button>
        logout = <ul class="navbar-nav mx-2">
            <li class="nav-item">
            <img src='./logoutIcon.png' alt='Logout' width="30" height="30" onClick={handleLogout}/>
            </li>
        </ul>  
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#5269cd"}}>
            <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Bill</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Receipt</a>
                </li> */}
                </ul>
                {welcomeMsg}
                {logout}
            </div>
            </div>
        </nav>
    </div>
  )
}

Navbar.prototype = {title: PropTypes.string}