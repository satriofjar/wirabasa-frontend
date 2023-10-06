import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import longArrow from '../assets/long-arrow.png';
import Certificate from '../assets/sertifikat.png';
import OnlineClass from '../assets/online-class.png';
import TArrow from '../assets/tr-arrow.png';

// just for developmet
import TestBg from '../assets/bg-r.jpg';

const Home = () => {

  const setting = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  }
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home - WiraBasa</title>
    </Helmet>
        <Navbar/>

        <section id="hero">
          <div className="layer">
            <div className="container">
              <div className="hero-content">
                <h1>Wira<span>Basa</span></h1>
                <p>Asah kompetensi berbahasa dan sempurnakan<br/>tulisanmu bersama WiraBasa!</p>
                <Link to='/layanan' className="btn rounded-3 px-4">Daftar! <img src={longArrow} alt="" width="30"/></Link>
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
      </div>
  
        <div className="layanan my-5 py-4">

          <div className="header text-center">
            <h2><span>Layanan</span> yang Tersedia</h2>
            <div className='under-ln rounded-5'></div>
          </div>

        </div>

        <div className='benefit'>
          <div className='container'>
          <div className="header text-center">
            <h2><span>Layanan</span> yang Tersedia</h2>
            <div className='under-ln rounded-5'></div>
          </div>

          <div className='row my-5'>

            <div className='col box rounded-3 m-2'>
              <div className='row'>
                <div className='col-lg-5 text-center'>
                  <img src={Certificate} />
                </div>

                <div className='col ps-4'>
                  <h5 className='mt-5'>Pelatihan Bersertifikat</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                </div>

              </div>
            </div>

            <div className='col box rounded-3 m-2'>
              <div className='row'>
                <div className='col-lg-5 text-center'>
                  <img src={OnlineClass} />
                </div>

                <div className='col ps-4'>
                  <h5 className='mt-5'>Pelatihan Dilakukan Secara Online</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

              </div>
            </div>

          </div>

          </div>
        </div>

        <div className='testi mb-5 py-5'>
          <div className='container text-center'>

            <div className=" text-center">
              <h2>Kata mereka yang pernah menggunakan wirabasa</h2>
            </div>

            <div className='cntnr mt-5'>
            <Slider {...setting} >
              <img src={TestBg} className='mx-3 rounded-3' />
              <img src={TestBg} className='mx-3 rounded-3' />
              <img src={TestBg} className='mx-3 rounded-3' />
              <img src={TestBg} className='mx-3 rounded-3' />
              <img src={TestBg} className='mx-3 rounded-3' />
            </Slider>
            </div>

          </div>

        </div>


        <div className='reading-test mb-5'>
          <div className='container'>
            <div className=" text-center">
              <h2>SEBERAPA CEPAT ANDA MEMBACA?</h2>
            </div>

            <div className='row my-5'>
              <div className='col-lg-5'>
                  <img src={TestBg} className='img-fluid' />
              </div>

              <div className='col'>
                <p className='mt-4'>Sebelum menghitung kecepatan membaca, bersiaplah. Kemudian, klik tombol mulai jika sudah siap membaca. 
                        Saat menekan tombol dimulai, pengatur waktu akan dimulai pula.
                        Jangan cepat-cepat saat membaca, tetapi membacalah secara normal untuk menemukan tingkat membaca Anda saat ini.
                        Klik tombol stop segera setelah Anda selesai. Ini akan menghentikan pengatur waktu dan menampilkan kecepatan membaca Anda.
                        Sebelum memulai tes sebenarnya, Anda dapat mengeklik mulai. Scroll ke bawah tanpa membaca, lalu klik berhenti untuk melihat hasilnya.</p>
              </div>

            </div>

            <div className='text-center'>
              <a href='' className='btn rounded-4 px-3'>Tes kecepatan membaca anda sekarang!</a>
            </div>

          </div>
        </div>


    </section>

    <Footer/>

    </>
  )
}

export default Home