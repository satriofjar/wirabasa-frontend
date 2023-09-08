import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar  from '../components/Navbar';
import Footer from '../components/Footer';

const Layanan = () => {
  document.title = 'Layanan | WiraBasa';

    const [activeButton, setActiveButton] = useState(1);

    const btnStyle = {
        width: '220px',
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

    const getLayananClass = () => {
        if (activeButton === 1) {
          return 'bg-green';
        } else {
          return 'bg-yellow';
        }
      };

  return (
    <>
        <Navbar/>
        <div id="layanan">
        <div className="container">
            <h2 className="title my-4">Layanan WiraBasa buat kamu</h2>

            <div className="row my-2">
                <div className="col-md-2 my-2" style={btnStyle}>
                    <a className={getButtonClass(1)} onClick={() => handleButtonClick(1)}>Jasa Sunting Tulisan</a>
                </div>
                <div className="col-md-2 my-2" style={btnStyle}>
                    <a className={getButtonClass(2)} onClick={() => handleButtonClick(2)}>Kelas Menyunting</a>
                </div>
                <div className="col-md-2 my-2" style={btnStyle}>
                    <a className={getButtonClass(3)} onClick={() => handleButtonClick(3)}>Jasa Kepewaraan</a>
                </div>
                <div className="col-md-2 my-2" style={btnStyle}>
                    <a className={getButtonClass(4)} onClick={() => handleButtonClick(4)}>Kelas Kepewaraan</a>
                </div>
            </div>

            <div className="row my-5">

                <div className="col-md-3 my-3" style={{minWidth: '270px'}}>
                  <div className="box-layanan border rounded-4">
                    <div className={`clr-block ${getLayananClass()}`}></div>
                    <div className="text-center">
                      <h3 className="pt-2"></h3>
                    </div>
                    <div className="ln mt-3"></div>

                        <p className="price-dc ms-4 mt-2"> <s>Rp 100.000</s></p>
                        <p className="price ms-4">Rp 65.000</p>

                    <div className="text-center mb-3">
                        <Link className={`btn ${getLayananClass()}`} to={{pathname: '/detail-layanan', search: '?q=jasa-sunting'}}>Beli sekarang!</Link>
                    </div>
                    
                    <ul className="text-start ms-4 me-2">
                        <li>losafahpiuhpu</li>
                        <li>losafahpiuhpu</li>
                        <li>losafahpiuhpu</li>
                        <li>losafahpiuhpu</li>
                    </ul>


                    
    
                  </div>
                </div>
            </div>

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