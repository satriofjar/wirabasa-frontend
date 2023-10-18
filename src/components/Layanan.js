import React from 'react';
import Writing from '../assets/writing.jpg';
import Mc from '../assets/mc.jpg';
import { Link } from 'react-router-dom';

const Layanan = () => {
  return (
    <div className="layanan my-5 py-4" id='Layanan'>

          <div className='container'>
              <div className="header mt-5 text-center">
                <h2><span>Layanan</span> yang Tersedia</h2>
                <div className='under-ln rounded-5'></div>
              </div>

              <div className='row my-5 pt-3 pb-5 px-5 box gx-5 rounded-4'>
                <img className='thumbnail col mt-3 rounded-5' src={Writing} alt=''/>
                <div className='col mt-3 mx-3 text-start'>
                  <h3 className='mt-5'>Penyuntingan</h3>
                  <div className='yel-ln rounded-5 mb-5'></div>
                  <p>Layanan penyuntingan untuk tulisan Sobat Rasa yang berkemungkinan masih mengandung ketidakefektifan kalimat, ketidakpaduan paragraf, dan kekurangtepatan penggunaan ejaan.</p>
                
                    <Link className='btn border mt-3' onClick={() => {
                        alert("Site is still under construction so here is the email: admin@wirabasa.com");
                    }} >PELAJARI LEBIH LANJUT</Link>
                </div>
              </div>

              <div className='row my-5 pt-3 pb-5 px-5 box gx-5 rounded-4'>
                <div className='col-md-6 mt-5 mx-3 text-start'>
                  <h3 className='mt-5'>Kepewaraan</h3>
                  <div className='yel-ln rounded-5 mb-5'></div>
                  <p>WiraBasa juga menyediakan layanan kepewaraan, seperti MC (master of ceremony), moderator, pemantik diskusi, dan layanan lainnya. </p>
                  <Link className='btn border mt-3' onClick={() => {
                        alert("Site is still under construction so here is the email: admin@wirabasa.com");
                    }} >PELAJARI LEBIH LANJUT</Link>
                </div>
                <img className='thumbnail col-md-6 order-first order-md-1 mt-3 rounded-5' src={Mc} alt=''/>
              </div>


          </div>

        </div>
  )
}

export default Layanan