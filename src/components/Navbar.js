import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo-circle.png'
import { useUser } from '../utils/UserContext';
import CustomNavLink from '../utils/CustomNavLink';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = ({isUserPage}) => {
  const location = useLocation();
  const { user, setUser } = useUser();
  const [background, setBackground] = useState('');
  const [style, setStyle] = useState({
          background: location.pathname !== '/' ? '#fff' : 'linear-gradient(180deg, rgba(0,123,255,.6) 100%, rgba(255, 255, 255,.1) 50%)',
          height: '100px',
         });

  const [loginStyle, setLoginStyle] = useState({
    color: location.pathname !== '/' ? '#007bff' : '#fff'
  })

  const [registerStyle, setRegisterStyle] = useState({
    color:  location.pathname !== '/' ? '#007bff' : '#fff',
    border: location.pathname !== '/' ? '#007bff 1px solid' : '#fff 1px solid'
  })

  const handleClick = () => {
    setStyle({
      backgroundColor: '#fff',
      height: 'fit-content',
    })

    setBackground('#fff');

    }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 5) { // Ubah 50 ke tinggi yang sesuai
        setStyle({
          backgroundColor: '#fff',
          height: '70px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        })

        setLoginStyle({
          color: '#007bff'
        });
        setRegisterStyle({
          color: '#007bff',
          border: '#007bff 1px solid'
        });
      } else {
        if(location.pathname !== '/'){
          setStyle({
            // backgroundColor: 'transparent',
            background: '#fff',
            height: '100px',
        })
        }else{
          setStyle({
              // backgroundColor: 'transparent',
              background: '#007bff',
              background: 'linear-gradient(180deg, rgba(0,123,255,.6) 100%, rgba(255, 255, 255,.1) 50%)',
              height: '100px',
          })
          setLoginStyle({
            color:'#fff'
          });

          setRegisterStyle({
            color: '#fff',
            border: '#fff 1px solid'
          });
        }
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
            <CustomNavLink 
              className="nav-link pb-1" 
              to='/'>
                Home
                </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink 
              className="nav-link pb-1" 
              to='/#fitur'>
                Fitur
              </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink
              className="nav-link pb-1" 
              to='/#benefit'>
                Keunggulan
              </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink 
              className="nav-link pb-1" 
              to='/#Testimoni'>
                Testimoni
              </CustomNavLink>
          </li>
          <li className="nav-item">
            <NavHashLink
              className="nav-link pb-1" 
              to='/layanan' >
                Layanan
              </NavHashLink>
          </li>

          {user? (isUserPage? 
          <li className="nav-item">
            <CustomNavLink className="nav-link pb-1" to='/logout'>Logout</CustomNavLink> 
          </li> :
          <li className="nav-item">
            <NavHashLink className="nav-link pb-1" to={`/user/?username=${user?.username}`} >{user?.username}</NavHashLink>
          </li>):
          <>
          <li className="nav-item">
            <NavHashLink className="btn btn-login nav-link pb-1 px-4" to='/login' style={loginStyle}>Login</NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink className="btn btn-register nav-link pb-1 px-4" to='/register' style={registerStyle}>Sign Up</NavHashLink>
          </li>
          </>}
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar