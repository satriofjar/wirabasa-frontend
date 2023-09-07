import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-circle.png'

const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid container">
      <Link className="navbar-brand" to='/'>
        <img className="icon rounded-5" src={Logo} /> 
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-light px-3" aria-current="page" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light px-3" to='/layanan'>Layanan</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light px-3" href="">Kecepatan Membaca</a>
          </li>
          <li className="nav-item">
              <a className="nav-link text-light px-3" href="">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar