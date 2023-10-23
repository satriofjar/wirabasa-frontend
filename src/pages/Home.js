import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testi from '../components/Testi';
import Certificate from '../assets/sertifikat.png';
import OnlineClass from '../assets/online-class.png';
import MainImage from '../assets/mainImage.png';
import Writing from '../assets/writing.jpg';
import Mc from '../assets/mc.jpg';
import ReadingBg from '../assets/reading-bg.png'
import { useLocation } from 'react-router-dom';

const Home = () => {

  const location = useLocation();

  useEffect(()=> {
    if(location.pathname === '/' && location.hash === ''){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location])

  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home - WiraBasa</title>
    </Helmet>
        <Navbar isUserPage={false} />

        <section className='mb-5' id="main">
            <div className="container text-denter">
              <div className='row'>
                <div className="hero-content col ps-5">
                  <h2 className='mb-4'>Asah kompetensi berbahasa dan sempurnakan tulisanmu.</h2>
                  <p>WiraBasa hadir menjadi bagian dari kesuksesan Sobat dalam menulis dan menjadi pewara.</p>
                  <Link to='/layanan' className="btn rounded-3 px-4">Daftar Sekarang!</Link>
                </div>
                <div className='col r-content text-center'>
                  <img className='main-img' src={MainImage} alt='' />
                </div>
              </div>
            </div>
        </section>

    <section id="main-content">
  
      <div className="layanan pb-5" id='fitur'>

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

        <div className='benefit mb-5' id='benefit'>
          <div className='container'>
          <div className="header text-center my-5">
            <h2>Keuntungan yang akan Anda dapatkan jika menggunakan layanan WiraBasa</h2>
          </div>

          <div className='row row-cols-2 my-2'>

            <div className='col'>
              <div className='row box rounded-3 my-2'>
                <div className='col-lg-5 text-center' style={{margin: '0 auto', width: 'fit-content'}}>
                  <img src={Certificate} alt='' />
                </div>

                <div className='col ps-4'>
                  <h5 className='mt-5'>Pelatihan Bersertifikat</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                </div>

              </div>
            </div>

            <div className='col'>
              <div className='row box rounded-3  my-2'>
                <div className='col-lg-5 text-center' style={{margin: '0 auto', width: 'fit-content'}}>
                  <img src={OnlineClass} alt='' />
                </div>

                <div className='col ps-4'>
                  <h5 className='mt-5'>Pelatihan Dilakukan Secara Online</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

              </div>
            </div>

            <div className='col'>
              <div className='row box rounded-3  my-2'>
                <div className='col-lg-5 text-center' style={{margin: '0 auto', width: 'fit-content'}}>
                  <img src={Certificate} alt='' />
                </div>

                <div className='col ps-4'>
                  <h5 className='mt-5'>Pelatihan Bersertifikat</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                </div>

              </div>
            </div>

            <div className='col'>
              <div className='row box rounded-3  my-2'>
                <div className='col-lg-5 text-center' style={{margin: '0 auto', width: 'fit-content'}}>
                  <img src={OnlineClass} alt='' />
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

        <Testi />

        <div className='reading-test mb-5'>
          <div className='container'>
            <div className="text-center">
              <h2>SEBERAPA CEPAT ANDA MEMBACA?</h2>
            </div>

            <div className='row my-5'>
              <div className='col-lg-5'>
                  <img src={ReadingBg} className='img-fluid' alt='' />
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
              <Link to='/reading-test' className='btn px-4'>Mulai sekarang!</Link>
            </div>

          </div>
        </div>


    </section>

    <Footer/>

    </>
  )
}

export default Home