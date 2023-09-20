import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserIcon from '../assets/user.png';

const User = () => {
  return (
    <>
    <Navbar/>
    <div id="user">
        <div className="container">

            <div className="user-profile mt-5 text-center">
                <img src={UserIcon} alt="" className="rounded-circle"/>
                <p className="mt-2">Satrio</p>
                {/* <a href="" className="btn btn-outline-info">Edit profile</a> */}
            </div>

            <div className="kelas my-5">
                <h2 className="">Kelas saya</h2>
        
                <div className="row my-5">
                
                <div className="col-md-3">
                    <div className="card my-3" style={{width: '15rem'}}>
                    <img src="" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <a href="" className="btn btn-primary">Join Live</a>
                    </div>
                    </div>
                </div>
        
                </div>
            </div>

            <div className="riwayat-pembelian">
                <h2 className="">Riwayat pembelian</h2>
                <div className="row my-5">

                    <div className="col-md-4 my-3">
                    <div className="box-layanan border rounded-4">
                        <div className="clr-block"></div>
                        <h3 className="pt-2 ps-4">Menulis 101</h3>

                        <p className="status bg-warning ms-4 mt-2 px-2 pb-1 rounded ">Unpaid</p>
                        {/* <p className="status bg-scs ms-4 mt-2 px-2 pb-1 rounded "></p> */}
                        <table className="table table-borderless">
                            <tr>
                                <td className="ps-4">Tanggal order</td>
                                <td className="text-end pe-4"></td>
                            </tr>
                        </table>

                        <div className="ln mt-2 mb-2"></div>

                        <div className="text-center mb-2">
                        <button type="button">Detail order</button>
                        </div>
        
                    </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
    <Footer/>
    </>

  )
}

export default User