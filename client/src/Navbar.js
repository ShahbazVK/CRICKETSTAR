import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>CRICKETⓢTAR</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/scoring'>Scoring</Link>
            </li>
            {localStorage.getItem("email") ? <li className="nav-item">
              <Link className="nav-link" to='/signout'>Sign out</Link>
            </li> : <li className="nav-item">
              <Link className="nav-link" to='/signin'>Sign in</Link>
            </li>}
            {localStorage.getItem("email") ? "" : <li className="nav-item">
              <Link className="nav-link" to='/signup'>Sign up</Link>
            </li>}
          </ul>
          <span className="navbar-text">
            <h6 style={{ paddingTop: "6px" }}><span style={{ fontSize: "20px" }} className={localStorage.getItem("email") ? "	fas fa-user-circle" : ""}>&nbsp;&nbsp;</span>{localStorage.getItem("email") ? localStorage.getItem("email") : ""}</h6>
          </span>
        </div>
      </div>
    </nav>
  )
}
