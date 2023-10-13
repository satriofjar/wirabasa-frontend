import React from 'react';
import { Link } from 'react-router-dom';
import P2MW from '../assets/logo-p2mw.jpg';
import WhatsApp from '../assets/wa.png';
import Instagram from '../assets/instagram.png';
import Tiktok from '../assets/tiktok.png';
import Mail from '../assets/mail.png';
import Phone from '../assets/phone.png';

const Footer = () => {
  return (
    <footer id="footer">
    <div className="container">
      <div className="row py-5">
        <div className="col">
          <h3>Tentang Kami</h3>
          <p><img src={Mail} width='18' className='me-1' /> info@wirabasa.com</p>
          <p><img src={Phone} width='18'  /> +62 8570 2891 223</p>
          <div className='d-flex justify-content-between mt-3' style={{maxWidth: '130px'}}>
            <a href='' target="_blank"><img src={WhatsApp} /></a>
            <a href='https://www.instagram.com/wira.basa/' target="_blank"><img src={Instagram} /></a>
            <a href='' target="_blank"><img src={Tiktok} /></a>
          </div>
        </div>
        <div className="col">
          <h3>Produk WiraBasa</h3>
          <ul>
            <li>
              <Link to={{pathname: '/layanan/', search: `?layanan=${'Jasa-Suting'}`}}>Jasa Penyuntingan</Link>
            </li>
            <li>
              <Link to={{pathname: '/layanan/', search: `?layanan=${'Kelas-Sunting'}`}}>Kelas Penyuntingan</Link>
            </li>
            <li>
              <Link to={{pathname: '/layanan/', search: `?layanan=${'Jasa-Kepewaraan'}`}}>Jasa Kepewaraan</Link>
            </li>
            <li>
              <Link to={{pathname: '/layanan/', search: `?layanan=${'Kelas-Kepewaraan'}`}}>Kelas Kepewaraan</Link>
            </li>
          </ul>
        </div>

        <div className="col">
          <h3>Lain-lain</h3>
          <Link to='/reading-test'>Test kecepatan membaca</Link>
        </div>
      </div>
    </div>
    <hr/>

    <div className='container'>
      <div className='d-flex justify-content-center pb-3'>
        <p>© wirabasa.com, 2023.</p>
        <p className='mx-2'>|</p>
        <p>Powered by <img src={P2MW} className='rounded-1' width='80'/></p>
      </div>
    </div>

  </footer>
  )
}

export default Footer