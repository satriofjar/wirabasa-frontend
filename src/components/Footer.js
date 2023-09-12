import React from 'react';
import P2MW from '../assets/logo-p2mw.jpg';
import WhatsApp from '../assets/wa.png';
import Instagram from '../assets/instagram.png';
import Tiktok from '../assets/tiktok.png';

const Footer = () => {
  return (
    <footer id="footer">
    <div className="container">
      <div className="row py-5">
        <div className="col">
          <h3>Tentang Kami</h3>
          <p>info@wirabasa.com</p>
          <p>+62 8570 2891 223</p>
          <div className='d-flex justify-content-between mt-3' style={{maxWidth: '130px'}}>
            <img src={WhatsApp} />
            <img src={Instagram} />
            <img src={Tiktok} />
          </div>
        </div>
        <div className="col">
          <h3>Produk WiraBasa</h3>
          <ul>
            <li>
              <a href="">Jasa Penyuntingan</a>
            </li>
            <li>
              <a href="">Kelas Penyuntingan</a>
            </li>
            <li>
              <a href="">Jasa Kepewaraan</a>
            </li>
            <li>
              <a href="">Kelas Kepewaraan</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr/>
    <div className='text-center pb-3'>
      <p>Powered by <img src={P2MW} className='rounded-1' width='80'/></p>
    </div>

  </footer>
  )
}

export default Footer