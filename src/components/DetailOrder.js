import React, { useEffect, useState } from 'react';
import UploadIcon from '../assets/upload.png';
import DownloadIcon from '../assets/download.png';
import axios from 'axios';
import rupiahFormat from '../utils/rupiahFormat';
import formatDate from '../utils/formatDate';
import { Link } from 'react-router-dom';
import { API_URI } from '../utils/config';

const DetailOrder = ({orderId, setIsActive}) => {

    const [order, setOrder] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const getOrder = async () => {
        try {
            const response = await axios.get( API_URI + 'order-product/', {
                params:{
                    id:orderId
                }
            });
            setOrder(response.data);

        } catch (error) {
            console.error(error);
        }
    }

    const handleUpload = async () => {
        try {
            const response = await axios.put( API_URI + 'order-product/', {
                    id: order.sunting.id,
                    file_sunting: selectedFile
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                params: {
                    id: orderId
                }
            })
            alert("Success!");
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getOrder();
    }, [])

  return (
    <div className="popup-overlay">
        <div className="detail-order">
          <h3 className="mb-5 mt-3">Detail order</h3>

          <table className="table text-start">
            <tbody>
                <tr>
                    <td>Layanan</td>
                    <td id="name-layanan">{order?.product_name}</td>
                </tr>
                <tr>
                    <td>Harga layanan</td>
                    <td id="price-layanan">{rupiahFormat(order?.get_total_price)}</td>
                </tr>
                <tr>
                    <td>Tanggal order</td>
                    <td id="date-order">{formatDate(false, order?.created)}</td>
                </tr>
                <tr>
                    <td>Status pembayaran</td>
                    <td id="payment-status">{order?.status}</td>
                </tr>
                {order?.status === 'UnPaid' &&
                    <tr id="payment-page">
                        <td>Upload bukti pembayaran</td>
                        <td><Link to={{pathname:'/payment', search:`?id=${order?.id}`}}>Bayar</Link></td>
                    </tr>}

                {order?.product_category === 'Jasa-Sunting' &&
                <>
                    <tr id="file-sunting">
                        <td>Upload file untuk disunting</td>
                        <td>
                            <div>
                                <input 
                                    type='file' 
                                    className='form-control w-50' 
                                    onChange={e => setSelectedFile(e.target.files[0])}/>
                                <button type="submit" onClick={handleUpload} name="form-file"><img src={UploadIcon} alt="" width="28" /></button>
                            </div>
                        </td>
                    </tr>
                    <tr id="result-sunting">
                        <td>Download hasil sunting</td>
                        <td>
                            {order.sunting?.file_result ? 
                            <a id="result-file" download href={order.sunting.file_result}><img src={DownloadIcon} alt="" /></a> : <p>-</p>}
                        </td>
                    </tr>
                </>}


            </tbody>
          </table>

          <button type="button" onClick={() => setIsActive(false)} className="mt-3">Close</button>
        </div>
      </div>
  )
}

export default DetailOrder