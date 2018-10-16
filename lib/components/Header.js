import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'

class Header extends Component{
  _logout = () => {
    sessionStorage.removeItem("userInfo");
    this.props.history.push('/login');
  }
  _isAdmin = () => {
    if (sessionStorage.getItem('userInfo') == null) return false;
    const userLog = JSON.parse(sessionStorage.userInfo);
    return userLog.isAdmin;
  }
render(){
  return(
    <div id="header-content">
      <div className="image-wrapper">
        <img src="./../images/background.jpg" className="img-fluid image" alt="Logo"/>
      </div>
      <h1 className="title">Departamento de Computacion</h1>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-local">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent">
              <Link className= "nav-link link" to="/">Home</Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent">
              <Link className= "nav-link link" to="/investigator">Investigadores</Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent">
              <Link className= "nav-link link" to="/other">Proyectos</Link>
            </li>
            {sessionStorage.getItem("userInfo") ? // mi profile menu
            <li className="nav-item dropdown" data-toggle="collapse" data-target="#navbarSupportedContent">
              <a className="nav-link dropdown-toggle link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Mi Perfil
              </a>
              <div className="dropdown-menu custom-dropdown" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item link drop" to="/resume">Mi Informacion</Link>
                <div className="dropdown-divider"></div>
                <a className= "dropdown-item link drop logout" onClick={this._logout}>Logout</a>
              </div>
            </li> :
            <li className="nav-item">
              <Link className= "nav-link link" to="/login">Login</Link>
            </li>
          }
          {this._isAdmin() == true && 
            <li className="nav-item dropdown" data-toggle="collapse" data-target="#navbarSupportedContent">
             <a className="nav-link dropdown-toggle link" href="#" id="navbarDropdownAdmin" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Administrar
             </a>
             <div className="dropdown-menu custom-dropdown" aria-labelledby="navbarDropdownAdmin">
               <Link className="dropdown-item link drop" to="/admin">Administrar perfiles</Link>
               <div className="dropdown-divider"></div>
               <Link className="dropdown-item link drop" to="/register">Nuevo</Link>
             </div>
           </li>
          }
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

export default withRouter(Header);