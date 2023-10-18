import React, { useEffect, useState } from 'react';
import Navbar  from '../components/Navbar';
import Footer from '../components/Footer';
import ProductsItem from '../components/ProductsItem';
import { Helmet } from 'react-helmet';

const Layanan = () => {

  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>

        <Helmet>
          <meta charSet="utf-8" />
          <title>Layanan - WiraBasa</title>
        </Helmet>

        <Navbar isUserPage={false}/>
        <div id="layanan">
            <div className="">
              <div className='text-center header'>
                <h2 className="my-4">Layanan WiraBasa buat kamu</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>

                <ProductsItem />

                <div className='text-center help-contact my-5 py-5'>
                  <h2>Butuh bantuan mengenai layanan wirabasa? </h2>
                  <a href='' className='btn mt-5'>Hubungi kami segera</a>

                </div>

                <div className='pt-5 pb-3'>
                  <div className='container'>
                    <div className='description mx-4 text-center rounded-4'>
                      <h2 className='py-4' id='Penyuntingan'>Penyuntingan</h2>
                      <p className='text-start pb-4 px-3'>WiraBasa menyediakan layanan penyuntingan untuk tulisan Sobat Rasa yang berkemungkinan masih 
                            mengandung ketidakefektifan kalimat, ketidakpaduan paragraf, dan kekurangtepatan penggunaan ejaan.
                            Kesalahan dalam berbahasa seperti ini mampu menimbulkan kesalahan tafsir dalam diri pembacanya. 
                            Oleh karena itu, sunting tulisanmu sekarang juga melalui layanan WiraBasa. 
                            Tulisan kamu akan disunting oleh penyunting yang berkompeten di bidangnya. 
                            WiraBasa juga menyediakan kelas pelatihan menyunting, loh, untuk Sobat Rasa yang ingin belajar 
                            menyunting dengan penyunting profesional langsung.</p>
                    </div>

                    <div className='description mx-4 text-center rounded-4 my-5'>
                      <h2 className='py-4' id='Kepewaraan'>Kepewaraan</h2>
                      <p className='text-start pb-4 px-3'>WiraBasa juga menyediakan layanan kepewaraan, seperti MC (master of ceremony), moderator, 
                                  pemantik diskusi, dan layanan lainnya. Untuk Sobat Rasa yang sedang bingung ingin mencari pewara 
                                  yang andal dalam memandu sebuah acara, pesan jasa pewara sekarang juga melalui WiraBasa. 
                                  Tersedia jasa pewara luring maupun daring sesuai permintaan Sobat Rasa dan kesepakatan bersama. 
                                  Tidak hanya itu, WiraBasa juga menyediakan layanan pelatihan untuk menjadi pewara andal. 
                                  Pesan layanan sekarang juga untuk mengasah kemampuan berbahasa Sobat!</p>
                    </div>

                  </div>
                </div>

            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Layanan