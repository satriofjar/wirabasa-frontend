import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import LeftArrow from '../assets/left-arrow.png';
import Logo from '../assets/logo-circle.png';
import rupiahFormat from '../utils/rupiahFormat';
import { Helmet } from 'react-helmet';

const NewPayment = () => {
    const location = useLocation();
    const search = location.search;
    const queryParams = queryString.parse(search);
    const productId = queryParams.id;
    const [product, setProduct] = useState();

    const getProduct = async () => {
        const response = await fetch(`http://localhost:8000/products/${productId}`);
        const data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
        getProduct();
    }, [])
  return (
    <div id="payment">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Payment - WiraBasa</title>
        </Helmet>

        <div className="nav">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <Link to='/user'><img src={LeftArrow} alt="" width="30" className="pt-2" /></Link>
                    </div>
                    <div className="col-7">
                        <div className="d-flex pt-1">
                            <img className="icon" src={Logo} alt="" />
                            <h3 className="title ms-3">WiraBasa</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <h2 className="my-4">Payment Order</h2>

            <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td>Layanan</td>
                        <td>{product?.name}</td>
                    </tr>
                    <tr>
                        <td>Total pembayaran</td>
                        <td>{rupiahFormat(product?.price)}</td>
                    </tr>
                </tbody>
            </table>

            <h4 className="my-4">Metode pembayaran hanya menggunakan ShopeePay</h4>
            <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td>Nomor ShopeePay</td>
                        <td>085156263252</td>
                    </tr>
                    <tr>
                        <td>Atas Nama</td>
                        <td>Maulidazahra2003</td>
                    </tr>
                </tbody>
            </table>

            <h4 className="my-4">Lakukan konfirmasi setelah melakukan pembayaran</h4>
            <form method="post" encType="multipart/form-data">
                <div className="mt-2">
                    <input type="file" className="form-control w-25"/>
                </div>
                <button type="submit" className="btn mt-4 px-4">Upload bukti transfer</button>
            </form>

        </div>
    </div>
  )
}

export default NewPayment