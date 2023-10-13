import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserIcon from '../assets/user.png';
import DetailOrder from '../components/DetailOrder';
import MyClass from '../components/MyClass';

const User = () => {

    const [isActive, setIsActive] = useState(false);


  return (
    <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Satrio - WiraBasa</title>
        </Helmet>

        <Navbar isUserPage={true} />

        <div id="user">
            <div className="container">

                <div className="user-profile mt-5 text-center">
                    <img src={UserIcon} alt="" className="rounded-circle"/>
                    <p className="mt-2">Satrio</p>
                    <Link onClick={() => {
            alert(
              "Site is still under construction so here is the email: admin@wirabasa.com"
            );
          }} className="btn">Edit profile</Link>
                </div>

                <MyClass />

                <div className="riwayat-pembelian">
                    <h2 className="">Riwayat pembelian</h2>
                    <div className="row my-5">

                        <div className="col-md-5 my-3">
                        <div className="box-layanan border rounded-4">
                            <div className="clr-block"></div>
                            <h3 className="pt-2 ps-4">Menulis 101</h3>

                            <p className="status bg-warning ms-4 mt-2 px-2 pb-1 rounded ">Unpaid</p>
                            {/* <p className="status bg-scs ms-4 mt-2 px-2 pb-1 rounded "></p> */}
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td className="ps-4">Tanggal order</td>
                                        <td className="text-end pe-4"></td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="ln mt-2 mb-2"></div>

                            <div className="text-center mb-2">
                            <button type="button" onClick={() => setIsActive(true)}>Detail order</button>
                            </div>
            
                        </div>
                        </div>

                        {isActive && <DetailOrder setIsActive={setIsActive} />}

                    </div>
                </div>

            </div>
        </div>

        <Footer/>
    </>

  )
}

export default User