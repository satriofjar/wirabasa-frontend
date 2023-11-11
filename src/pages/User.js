import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserIcon from '../assets/user.png';
import MyClass from '../components/MyClass';
import { useUser } from '../utils/UserContext';
import RiwayatOrder from '../components/RiwayatOrder';

const User = () => {
    const { user, setUser } = useUser();

    useEffect(()=> {
      window.scrollTo(0, 0);
    }, [])

  return (
    <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Satrio - WiraBasa</title>
        </Helmet>

        <Navbar isUserPage={true} />

        <div id="user">
            <div className="container">

                <div className="user-profile mt-5 text-center">
                    <img src={UserIcon} alt="" className="rounded-circle"/>
                    <p className="mt-2">{user? user.name : 'User'}</p>
                    <Link onClick={() => {
                        alert("Site is still under construction so here is the email: admin@wirabasa.com");
                    }} className="btn">Edit profile</Link>
                </div>

                <MyClass />

                <RiwayatOrder />

            </div>
        </div>

        <Footer/>
    </React.Fragment>

  )
}

export default User