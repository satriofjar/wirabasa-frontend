import React, { useEffect, useState } from 'react';
import Navbar  from '../components/Navbar';
import Footer from '../components/Footer';
import ProductsItem from '../components/ProductsItem';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Layanan = () => {
    const location = useLocation();
    const search = location.search;
    const queryParams = queryString.parse(search);
    const categoryLayanan = queryParams.layanan;

    const [activeButton, setActiveButton] = useState(1);

    const btnStyle = {
        width: '240px',
    };

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
      };

    const getButtonClass = (buttonId) => {
        if (activeButton === buttonId) {
          return 'btn rounded-3 layanan-button actv';
        } else {
          return 'btn rounded-3 layanan-button';
        }
      };

    const getButtonId = () => {
      if (categoryLayanan === 'Jasa-Sunting'){
        return 1;
      } else if (categoryLayanan === 'Kelas-Sunting'){
        return 2;
      } else if (categoryLayanan === 'Jasa-Kepewaraan'){
        return 3;
      } else if (categoryLayanan === 'Kelas-Kepewaraan'){
        return 4;
      } else {
        return 1;
      }
    }

      useEffect(() => {
        handleButtonClick(getButtonId);
        window.scrollTo(0, 0);
      }, [categoryLayanan])

    

  return (
    <>

        <Helmet>
          <meta charSet="utf-8" />
          <title>Layanan - WiraBasa</title>
        </Helmet>

        <Navbar isUserPage={false}/>
        <div id="layanan">
        <div className="container">
            <h2 className="title my-4">Layanan WiraBasa buat kamu</h2>

            <div className="row my-2">
                <div className="col-md-2 my-2" style={btnStyle}>
                    <button className={getButtonClass(1)} onClick={() => handleButtonClick(1)}>Jasa Sunting Tulisan</button>
                </div>
                <div className="col-md-2 my-2" style={btnStyle}>
                    <button className={getButtonClass(2)} onClick={() => handleButtonClick(2)}>Kelas Menyunting</button>
                </div>
                <div className="col-md-2 my-2" style={btnStyle}>
                    <button className={getButtonClass(3)} onClick={() => handleButtonClick(3)}>Jasa Kepewaraan</button>
                </div>
                <div className="col-md-2 my-2" style={btnStyle}>
                    <button className={getButtonClass(4)} onClick={() => handleButtonClick(4)}>Kelas Kepewaraan</button>
                </div>
            </div>

            <ProductsItem
              activeButton={activeButton}
            />

              <div className="header px-5 pt-3 pb-2">
                <h2>Penyuntingan</h2>
              </div>

              <div className="des my-5 mx-5">
                <p>WiraBasa menyediakan layanan penyuntingan untuk tulisan Sobat Rasa yang berkemungkinan masih 
                    mengandung ketidakefektifan kalimat, ketidakpaduan paragraf, dan kekurangtepatan penggunaan ejaan.
                    Kesalahan dalam berbahasa seperti ini mampu menimbulkan kesalahan tafsir dalam diri pembacanya. 
                    Oleh karena itu, sunting tulisanmu sekarang juga melalui layanan WiraBasa. 
                    Tulisan kamu akan disunting oleh penyunting yang berkompeten di bidangnya. 
                    WiraBasa juga menyediakan kelas pelatihan menyunting, loh, untuk Sobat Rasa yang ingin belajar 
                    menyunting dengan penyunting profesional langsung.</p>
              </div>

              <div className="con-header">
                <div className="header-r px-5 pt-3 pb-2">
                    <h2>Kepewaraan</h2>
                </div>
              </div>
                
                <div className="d-flex justify-content-end">
                    <div className="des text-end my-5 mx-5">
                        <p>WiraBasa juga menyediakan layanan kepewaraan, seperti MC (master of ceremony), moderator, 
                            pemantik diskusi, dan layanan lainnya. Untuk Sobat Rasa yang sedang bingung ingin mencari pewara 
                            yang andal dalam memandu sebuah acara, pesan jasa pewara sekarang juga melalui WiraBasa. 
                            Tersedia jasa pewara luring maupun daring sesuai permintaan Sobat Rasa dan kesepakatan bersama. 
                            Tidak hanya itu, WiraBasa juga menyediakan layanan pelatihan untuk menjadi pewara andal. 
                            Pesan layanan sekarang juga untuk mengasah kemampuan berbahasa Sobat!</p>
                      </div>
                </div>
        
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Layanan