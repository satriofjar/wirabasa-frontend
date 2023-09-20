import React from 'react'
import LeftArrow from '../assets/left-arrow.png';
import Logo from '../assets/logo-circle.png';

const payment = () => {
  return (
    <div id="payment">
    <div className="nav">
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <a><img src={LeftArrow} alt="" width="30" className="pt-2" /></a>
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
            <tr>
                <td>Layanan</td>
                <td></td>
            </tr>
            <tr>
                <td>Total pembayaran</td>
                <td></td>
            </tr>
        </table>

        <h4 className="my-4">Metode pembayaran hanya menggunakan ShopeePay</h4>
        <table className="table table-borderless">
            <tr>
                <td>Nomor ShopeePay</td>
                <td>085156263252</td>
            </tr>
            <tr>
                <td>Atas Nama</td>
                <td>Maulidazahra2003</td>
            </tr>
        </table>

        <h4 className="my-4">Lakukan konfirmasi setelah melakukan pembayaran</h4>
        <form method="post" enctype="multipart/form-data">
            <div className="mt-2">
                <input type="file" className="form-control w-25"/>
            </div>
            <button type="submit" className="btn mt-4 px-4">Upload bukti transfer</button>
        </form>

    </div>
</div>
  )
}

export default payment