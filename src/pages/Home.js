import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Certificate from '../assets/sertifikat.png';
import OnlineClass from '../assets/online-class.png';
import Layanan from '../components/Layanan';
import MainImage from '../assets/mainImage.jpg';

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
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 700, // Perangkat mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home - WiraBasa</title>
    </Helmet>
        <Navbar isUserPage={false} />

        <section id="Main">
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
  
        <Layanan />

        <div className='benefit mb-5' id='Benefit'>
          <div className='container'>
          <div className="header text-center mb-5">
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

        <div className='testi' id='Testimoni'>
          <div className='container text-center'>

            <div className="text-center">
              <h2>Kata mereka yang pernah menggunakan wirabasa</h2>
            </div>

            <div className='cntnr mt-5'>
            <Slider {...setting} >
              <img src={TestBg} className='mx-3 rounded-3' alt='' />
              <img src={TestBg} className='mx-3 rounded-3' alt='' />
              <img src={TestBg} className='mx-3 rounded-3' alt='' />
              <img src={TestBg} className='mx-3 rounded-3' alt='' />
              <img src={TestBg} className='mx-3 rounded-3' alt='' />
            </Slider>
            </div>

          </div>

        </div>


        <div className='reading-test mb-5'>
          <div className='container'>
            <div className="text-center">
              <h2>SEBERAPA CEPAT ANDA MEMBACA?</h2>
            </div>

            <div className='row my-5'>
              <div className='col-lg-5'>
                  <img src={TestBg} className='img-fluid' alt='' />
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
              <Link onClick={() => {
                        alert("Site is still under construction so here is the email: admin@wirabasa.com");
                    }} className='btn px-4'>Mulai sekarang!</Link>
            </div>

          </div>
        </div>


    </section>

    <Footer/>

    </>
  )
}

export default Home