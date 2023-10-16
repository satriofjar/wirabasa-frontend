import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DetailOrder from '../components/DetailOrder';
import formatDate from '../utils/formatDate';
import Loading from '../components/Loading';

const RiwayatOrder = () => {
    const [isActive, setIsActive] = useState(false);
    const [orders, setOrders] = useState(null);
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getOrders = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/v1/order-products/');
            setOrders(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
        
    }

    const handleClick = (id) => {
        setOrderId(id);
        setIsActive(true);
    }

    useEffect(() => {
        getOrders();
    }, [])

  return (
    <div className="riwayat-pembelian">
        <h2 className="">Riwayat pembelian</h2>
        <div className="row my-5">
            {orders?.map((order, _index) => 
                <div className="col-md-5 my-3" key={_index}>
                    <div className="box-layanan border rounded-4">
                        <div className="clr-block"></div>
                        <h3 className="pt-2 ps-4">{order.product_name}</h3>
                        {order.status === 'UnPaid' ? 
                            <p className="status bg-warning ms-4 mt-2 px-2 py-1 rounded " style={{fontWeight: 600}}>Unpaid</p>:
                            <p className="status bg-scs ms-4 mt-2 px-2 py-1 rounded " style={{fontWeight: 600}}>Paid</p>}
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td className="ps-4">Tanggal order</td>
                                    <td className="text-end pe-4">{formatDate(false, order.created)}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="ln mt-2 mb-2"></div>

                        <div className="text-center mb-2">
                        <button type="button" onClick={() => handleClick(order.id)}>Detail order</button>
                        </div>
        
                    </div>
                </div>)}

            {isActive && <DetailOrder orderId={orderId} setIsActive={setIsActive} />}

        </div>
    </div>
  )
}

export default RiwayatOrder