import React from 'react';
import { Link } from 'react-router-dom';
import P2MW from '../assets/logo-p2mw.jpg';
import WhatsApp from '../assets/wa.png';
import Instagram from '../assets/instagram.png';
import Tiktok from '../assets/tiktok.png';
import Mail from '../assets/mail.png';
import Phone from '../assets/phone.png';
import { HashLink } from 'react-router-hash-link';

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
              <HashLink to='/layanan/#jasa-sunting'>Jasa Penyuntingan</HashLink>
            </li>
            <li>
              <HashLink to='/layanan/#kelas-sunting'>Kelas Penyuntingan</HashLink>
            </li>
            <li>
              <HashLink to='/layanan/#jasa-kepewaraan'>Jasa Kepewaraan</HashLink>
            </li>
            <li>
              <HashLink to='/layanan/#kelas-kepewaraan'>Kelas Kepewaraan</HashLink>
            </li>
          </ul>
        </div>

        <div className="col">
          <h3>Lain-lain</h3>
          <Link onClick={() => {
                        alert("Site is still under construction so here is the email: admin@wirabasa.com");
                    }} >Test kecepatan membaca</Link>
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