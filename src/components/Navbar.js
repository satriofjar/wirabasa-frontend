import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo-circle.png'
import axios from 'axios';

const Navbar = ({isUserPage}) => {
  const [userName, setUserName] = useState('');

  const getUser = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/v1/user/');
      setUserName(response.data['username']);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [])


  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid container">
      <Link className="navbar-brand" to='/'>
        <img className="icon rounded-5" src={Logo} alt='' /> 
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link text-light px-3" aria-current="page" to='/'>Home</NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link text-light px-3" to='/layanan'>Layanan</NavLink>
          </li> */}
          <li className="nav-item dropdown">
            <a className="nav-link text-light px-3 dropdown-toggle" href='' role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Layanan
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item ms-4 my-2" to={{pathname: '/layanan/', search: `?layanan=${'Jasa-Suting'}`}}>Jasa Penyuntingan</Link>
              </li>
              <li>
                <Link className="dropdown-item ms-4 my-2" to={{pathname: '/layanan/', search: `?layanan=${'Kelas-Sunting'}`}}>Kelas Penyuntingan</Link>
              </li>
              <li>
                <Link className="dropdown-item ms-4 my-2" to={{pathname: '/layanan/', search: `?layanan=${'Jasa-Kepewaraan'}`}}>Jasa Kepewaraan</Link>
              </li>
              <li>
                <Link className="dropdown-item ms-4 my-2" to={{pathname: '/layanan/', search: `?layanan=${'Kelas-Kepewaraan'}`}}>Kelas Kepewaraan</Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
          {userName? (isUserPage? <NavLink className="nav-link text-light px-3" to='/logout'>Logout</NavLink> :
          <NavLink className="nav-link text-light px-3" to={{pathname: '/user/', search: `?username=Satrio`}}>{userName}</NavLink>):
          <NavLink className="nav-link text-light px-3" to='/login'>Login</NavLink>}
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar