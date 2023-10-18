import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-circle.png'
import { useUser } from '../utils/UserContext';
import CustomNavLink from '../utils/CustomNavLink';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = ({isUserPage}) => {
  const { user, setUser } = useUser();
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [height, setHeight] = useState('100px');
  const [border, setBorder] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) { // Ubah 50 ke tinggi yang sesuai
        setNavbarBackground('#FFF'); // Ganti dengan warna yang Anda inginkan
        setHeight('70px');
        setBorder('border-bottom');
      } else {
        setNavbarBackground('transparent'); // Kembali ke warna latar belakang default
        setHeight('100px');
        setBorder('');
      }
    });
  
    // Membersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${border}`} style={{ backgroundColor: navbarBackground, height: height }}>
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
            <CustomNavLink className="nav-link text-light" to='/#Main'>Home</CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink 
              className="nav-link text-light" 
              to='/#Layanan'>
                Fitur
              </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink 
              className="nav-link text-light" 
              to='/#Benefit'>
                Keunggulan
              </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink 
              className="nav-link text-light" 
              to='/#Testimoni'>
                Testimoni
              </CustomNavLink>
          </li>
          <li className="nav-item">
            <NavHashLink
              className="nav-link text-light" 
              to='/layanan' >
                Layanan
              </NavHashLink>
          </li>

          {/* <li className="nav-item dropdown">
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
          </li> */}

          <li className="nav-item">
          {user? (isUserPage? <CustomNavLink className="nav-link text-light" to='/logout'>Logout</CustomNavLink> :
          <NavHashLink className="nav-link text-light" to={`/user/?username=${user?.username}`} >{user?.username}</NavHashLink>):
          <NavHashLink className="nav-link text-light" to='/login'>Login</NavHashLink>}
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar