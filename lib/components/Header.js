import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
render(){
  return(
    <div className="header">
      <img src="./../images/background.jpg" className="img-fluid image" alt="Logo"/>
      <h1 className="title">Departamento de Computacion</h1>
      <nav className="navbar navbar-expand-lg  navbar-local">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item link">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item link">
              <a className="nav-link" href="#">Investigadores</a>
            </li>
            <li className="nav-item link">
              <a className="nav-link" href="#">Proyectos</a>
            </li>
            <li className="nav-item link">
              <a className="nav-link" href="#">Otros</a>
            </li>
          </ul>
            <div className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
              <button className="btn btn-search my-2 my-sm-0" type="submit">Search</button>
            </div>
        </div>
      </nav>
    </div>
  );
}
}

export default Header;