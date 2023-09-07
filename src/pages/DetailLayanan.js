import React from 'react';
import LArrow from '../assets/left-arrow.png';
import Logo from '../assets/logo-circle.png';
import WhatsApp from '../assets/wa.png';

const DetailLayanan = () => {
  return (
    <div id="det-layanan">
        <div className="nav">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <a><img src={LArrow} alt="" width="30" className="pt-2" /></a>
                    </div>
                    <div className="col-7">
                        <div className="d-flex pt-1">
                            <img className="icon rounded-5" src={Logo} alt="" />
                            <h3 className="title ms-3">WiraBasa</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="container main-cntn">
            <div className="row mt-5">
                <div className="col my-4 ms-4">
                    <div className="lcnt">
                        <h2 className="title-prod">Kelas sibuk</h2>
                        <p className="price-dc ms-4 mt-2"> <s>Rp 100.000</s></p>
                        <p className="price ms-4">Rp 65.000</p>
                    <hr/>

                    <h3 className="clr-b mb-5 mt-2">Layanan yang akan didapatkan Sobat Rasa</h3>

                    <ul className="text-start ms-4">
                        <li className="my-2">lorem</li>
                    </ul>
                    </div>
                </div>
                <div className="col my-4 ms-4">


                </div>
            </div>
        </div>  

        <footer id="footer-detlayanan">
            <div className="container pt-4">
                <div className="ftr-cnt text-center">
                    <h3>Butun bantuan?</h3>
                    <a href="" className="btn rounded-5"><img src={WhatsApp} alt="" className="mb-1" /> Hubungi Kami! </a>
                </div>
            </div>
        </footer>


    </div>
  )
}

export default DetailLayanan