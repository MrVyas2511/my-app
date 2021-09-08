import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../img/logo.png";

export default function Navbar(props) {

  const [btntext, setBtnText] = useState("Enable Dark mode");


  return (
    <div>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">

          <img src={logo}/>
          <strong>Text analizer</strong>
          </a>
          <div>
          <Link className="btn btn-sm btn-outline-primary mx-3" to="/" type="button">Home</Link>
          <Link className="btn btn-sm btn-outline-primary mx-3" to="/about" type="button">About</Link>
          <button className={`btn btn-sm mx-3 btn-${props.mode=="dark"?"light":"dark"}`} value={btntext} onClick={props.toggleMode}>{props.mode=="dark"?"Enable Light Mode":"Enable Dark Mode"}</button>
        </div>
        </div>
      </nav>
    </div>
  )
}
