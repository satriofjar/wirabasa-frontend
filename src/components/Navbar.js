import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-circle.png'
import { useUser } from '../utils/UserContext';
import CustomNavLink from '../utils/CustomNavLink';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = ({isUserPage}) => {
  const { user, setUser } = useUser();
  const [background, setBackground] = useState('');
  const [style, setStyle] = useState({
          backgroundColor: 'transparent',
          height: '100px',
         });

  const handleClick = () => {
    setStyle({
      backgroundColor: '#fff',
      height: 'fit-content',
    })

    setBackground('#fff');

    }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) { // Ubah 50 ke tinggi yang sesuai
        setStyle({
          backgroundColor: '#fff',
          height: '70px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        })
      } else {
        setStyle({
            backgroundColor: 'transparent',
            height: '100px',
        })
      }
    });
  
    // Membersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <nav className='navbar navbar-expand-lg sticky-top' style={style}>
    <div className="container-fluid container">
      <Link className="navbar-brand" to='/'>
        <img className="icon rounded-5" src={Logo} alt='' /> 
      </Link>
      <button className="navbar-toggler" onClick={handleClick}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" style={{background: background}}>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <CustomNavLink className="nav-link" to='/#Main'>Home</CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink 
              className="nav-link" 
              to='/#Layanan'>
                Fitur
              </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink 
              className="nav-link" 
              to='/#Benefit'>
                Keunggulan
              </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink 
              className="nav-link" 
              to='/#Testimoni'>
                Testimoni
              </CustomNavLink>
          </li>
          <li className="nav-item">
            <NavHashLink
              className="nav-link" 
              to='/layanan' >
                Layanan
              </NavHashLink>
          </li>

          <li className="nav-item">
          {user? (isUserPage? <CustomNavLink className="nav-link" to='/logout'>Logout</CustomNavLink> :
          <NavHashLink className="nav-link" to={`/user/?username=${user?.username}`} >{user?.username}</NavHashLink>):
          <>
            <NavHashLink className="btn btn-login" to='/login'>Login</NavHashLink>
            <NavHashLink className="btn btn-register" to='/register'>Sign Up</NavHashLink>
          </>}
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar