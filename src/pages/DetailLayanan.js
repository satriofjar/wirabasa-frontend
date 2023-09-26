import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import LArrow from '../assets/left-arrow.png';
import Logo from '../assets/logo-circle.png';
import WhatsApp from '../assets/wa.png';
import rupiahFormat from '../utils/rupiahFormat';
import getDiscount from '../utils/getDiscount';
import { Helmet } from 'react-helmet';

const DetailLayanan = () => {
    const location = useLocation();
    const search = location.search;
    const queryParams = queryString.parse(search);
    const productId = queryParams.id;

    const [product, setProduct] = useState();
    const [pagesValue, setPagesValue] = useState('');
    const [totalPrice, setTotalPrice] = useState('');

    const getProduct = async () => {
        const response = await fetch(`http://localhost:8000/products/${productId}`);
        const data = await response.json();
        setProduct(data);
    }

    

    const handleInputChage = (e) => {
        setPagesValue(e.target.value)
    }
    
    const handleSubmit = () => {
        console.log(pagesValue);
        setTotalPrice(getTotal(pagesValue));
    }

    const divmod = (x, y) => [Math.floor(x / y), x % y];

    const getTotal = (pages)=> {
        let total = 0;
        
        if(pages <= 3){
            return 25000;
        }
        
        let x = divmod(pages, 100)
        if (x[1]  !== 0) {
            total += x[0] * 500000;
            x = divmod(x[1], 10);
            if (x[1]  !== 0) {
                total += x[0] * 75000;
                x = divmod(x[1], 3);
                if (x[1]  !== 0 || x[0] !== 0) {
                    total += x[0] * 25000;
                    total += x[1] * 10000;
                } 
            } else {
                total += x[0] * 75000;
            }
        } else {
            total += x[0] * 500000;
        }
    
        return total;
    }

    useEffect(() => {
        getProduct();
    }, [])

    const arg = {
        coba: 1
    }

    
  return (
    <div id="det-layanan">

        <Helmet>
          <meta charSet="utf-8" />
          <title>{`${product?.name}`} - WiraBasa</title>
        </Helmet>

        <div className="nav">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <Link to={{pathname: '/layanan', search: `id=${product?.id}`, state:{arg}}}><img src={LArrow} alt="" width="30" className="pt-2" /></Link>
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
                <div className="col l-cntn my-4 ms-4">
                    <div className="lcnt">
                        <h2 className="title-prod">{product?.name}</h2>
                        {product?.discount === 0?
                        <p className="price ms-4">{rupiahFormat(getDiscount(product?.price, product?.discount))}</p>:
                        <>
                            <p className="price-dc ms-4 mt-2"> <s>{rupiahFormat(product?.price)}</s></p>
                            <p className="price ms-4">{rupiahFormat(getDiscount(product?.price, product?.discount))}</p>
                        </>
                        }
                        
                    <hr/>

                    <h3 className="clr-b mb-5 mt-2">Layanan yang akan didapatkan Sobat Rasa</h3>

                    <ul className="text-start ms-4">
                        {product?.features.map((feature, _index) =>
                        <li key={_index} className="my-2">{feature}</li>
                        )}
                    </ul>
                    </div>
                </div>
                <div className="col my-4 ms-4">
                    {product?.category === 'Jasa-Sunting' && 
                    <div>
                        <p className="b-5">Masukan jumlah halaman untuk menentukan harga</p>
                        <div className="mb-3">
                            <label className="form-label text-secondary">Jumlah halaman</label>
                            <input 
                            value={pagesValue}
                            onChange={handleInputChage}
                            className="form-control w-50" 
                            type='number'/>
                      </div>
                      <ul>
                        <li>Upload file yang ingin disunting pada laman user jika sudah melakukan pembayaran</li>
                      </ul>
                      <button type="button" onClick={handleSubmit} className="btn px-3 rounded-3 bg-green" id="submit-pages">Apply </button>
                    </div>}

                    <h3 className="clr-d mb-5 mt-2">Ringkasan pembayaran:</h3>

                    <table className="table table-borderless table-sm b-5">
                        <tbody>
                        <tr>
                            <td>Jenis layanan</td>
                            <td>{ product?.name }</td>
                        </tr>
                        <tr>
                            <td>Harga layanan</td>
                            <td id="price">{rupiahFormat(product?.price)}</td>
                        </tr>
                        {product?.category === 'Jasa-Sunting' &&
                        <tr>
                            <td>Jumlah halaman</td>
                            <td>{pagesValue !== ''? pagesValue : '-'}</td>
                        </tr>
                        }
                        {product?.discount !== 0 &&
                        <tr>
                            <td className="rd">Diskon {product?.discount + ' %'}</td>
                            <td className="rd">- {rupiahFormat(product?.price * (product?.discount / 100))}</td>
                        </tr>
                        }

                        <tr>
                            <td>Total harga</td>
                            {product?.category === 'Jasa-Sunting' ? 
                            <td id="total-price">{ totalPrice !== ''? rupiahFormat(totalPrice) : '-' }</td>:
                            <td id="total-price" style={{paddingLeft: '14px'}}> Rp 65.000</td>
                            }
                        </tr>
                        </tbody>
                    </table>

                    <Link to={{pathname: '/payment/', search: `?id=${product?.id}`}} type="submit" className="btn px-5 rounded-3">Lanjutkan Pembayaran</Link>

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