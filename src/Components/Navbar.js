import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";


export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src="favicon.png" width="25px" height="30px" alt="" /> Bharat-Tak</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/technology">Technology</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label dark" htmlFor="flexSwitchCheckDefault">Enable Lightmode</label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar