import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import longArrow from '../assets/long-arrow.png';
import { Link } from 'react-router-dom';

const Home = () => {
  document.title = 'Home | WiraBasa';
  return (
    <>
        <Navbar/>

        <section id="hero">
          <div className="layer">
            <div className="container">
              <div className="hero-content">
                <h1>Wira<span>Basa</span></h1>
                <p>Asah kompetensi berbahasa dan sempurnakan<br/>tulisanmu bersama WiraBasa!</p>
                <Link to='/layanan' className="btn rounded-3 px-3">Daftar! <img src={longArrow} alt="" width="30"/></Link>
              </div>
            </div>
          </div>
        </section>

    <section id="main-content">
      <div className="container">
        <div className="box-content mt-5 px-5 pt-5 pb-3 rounded-4 text-center">
          <p>Sobat Rasa punya tugas karya tulis tetapi bingung apakah penulisannya sudah sesuai 
            kaidah kebahasaan? 
            <br/><br/>Atau mungkin Sobat Rasa sedang membutuhkan jasa pewara (MC/moderator/pemantik diskusi) 
            dalam acara Sobat tetapi belum mahir dalam bidang tersebut?</p>
        </div>
  
        <div className="sec-content px-5 mt-5 text-center">
          <p>Tenang! Sekarang, WiraBasa bersama dengan tim yang andal dalam berbahasa 
            tulis maupun lisan hadir menjadi bagian dari kesuksesan Sobat dalam menulis dan menjadi pewara.</p>
        </div>
  
        <div className="layanan my-5">
          <div className="header px-5 pt-3 pb-2">
            <h2>Tersedia Layanan</h2>
          </div>


          <div className="row justify-content-md-center my-5">

            <div className="col-md-4 my-3">
              <a href="">
                <div className="box-layanan border rounded-4">
                  <div className="title text-center">
                    <h3 className="pt-2">PENYUNTINGAN</h3>
                  </div>
                  <hr className="ln text-center my-4"/>
  
                  <ul className="text-start ms-4">
                    <li>Perbaikan bahasa dalam tulisan</li>
                    <li>Pelatihan menyunting</li>
                  </ul>
  
                </div>
              </a>
            </div>
            
            <div className="col-md-4 my-3">
              <a href="">
                <div className="box-layanan border rounded-4">
                  <div className="title text-center">
                    <h3 className="pt-2">KEPEWARAAN</h3>
                  </div>
                  <hr className="ln text-center my-4"/>
  
                  <ul className="text-start ms-4 px-2">
                    <li className="">Jasa menjadi pewara</li>
                    <li>Pelatihan menjadi pewara</li>
                  </ul>
  
                </div>
              </a>
            </div>
          </div>

          <div className="text-center">
            <Link className="btn rounded-5 px-4" to='/layanan'>Daftar Sekarang!</Link>
          </div>
        </div>

        <div className="kelas my-5">
          <div className="header px-5 pt-3 pb-2">
            <h2 className="">Tes kecepatan membaca</h2>
          </div>
        </div>
      </div>
    </section>

    <Footer/>

    </>
  )
}

export default Home