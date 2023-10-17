import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import LeftArrow from '../assets/left-arrow.png';
import Logo from '../assets/logo-circle.png';
import rupiahFormat from '../utils/rupiahFormat';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useUser } from '../utils/UserContext';

const NewPayment = () => {
    const location = useLocation();
    const search = location.search;
    const queryParams = queryString.parse(search);
    const orderId = queryParams.id;
    const [order, setOrder] = useState();
    const [selectedFile, setSelectedFile] = useState(null);
    const { user, setUser } = useUser();

    const navigate = useNavigate();

    const getProduct = async () => {

        try {
            const response = await axios.get('http://127.0.0.1:8000/v1/order-product/', {
                params: {
                id: orderId
                }
            });
            setOrder(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handlePayment = async () => {
        try {
            const response = await axios.put('http://127.0.0.1:8000/v1/order-product/', {
                product:order?.product,
                user:order?.user,
                bukti_transfer:selectedFile
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                params: {
                    id: orderId
                }
            });
            navigate({pathname:'/user/', search:`?username=Satrio`, replace:true});
            alert('Payment processed!');
            
        } catch (error) {
            console.error(error);
        }
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
                        <Link to={{pathname: '/user/', search: `?username=${user?.username}`}}><img src={LeftArrow} alt="" width="30" className="pt-2" /></Link>
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
                        <td>{order?.product_name}</td>
                    </tr>
                    <tr>
                        <td>Total pembayaran</td>
                        <td>{rupiahFormat(order?.get_total_price)}</td>
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
            <div>
                <div className="mt-2">
                    <input type="file" 
                    className="form-control w-25"
                    required
                    onChange={e => setSelectedFile(e.target.files[0])}/>
                </div>
                <button onClick={handlePayment} type="submit" className="btn mt-4 px-4">Upload bukti transfer</button>
            </div>

        </div>
    </div>
  )
}

export default NewPayment