import React from 'react';
import UploadIcon from '../assets/upload.png';
import DownloadIcon from '../assets/download.png';

const DetailOrder = ({setIsActive}) => {
  return (
    <div className="popup-overlay">
        <div className="detail-order">
          <h3 className="mb-5 mt-3">Detail order</h3>

          <table className="table text-start">
            <tbody>
                <tr>
                    <td>Layanan</td>
                    <td id="name-layanan">-</td>
                </tr>
                <tr>
                    <td>Harga layanan</td>
                    <td id="price-layanan">-</td>
                </tr>
                <tr>
                    <td>Tanggal order</td>
                    <td id="date-order">-</td>
                </tr>
                <tr>
                    <td>Status pembayaran</td>
                    <td id="payment-status">-</td>
                </tr>
                <tr id="payment-page">
                    <td>Upload bukti pembayaran</td>
                    <td><a href="">Bayar</a></td>
                </tr>
                <tr id="file-sunting">
                    <td>Upload file untuk disunting</td>
                    <td>
                        <form method="post" className="d-flex" encType="multipart/form-data">
                            <input type='file' className='form-control w-50' />
                            <input type="hidden" name="orderId" id="orderId" />
                            <button type="submit" name="form-file"><img src={UploadIcon} alt="" width="28" /></button>
                        </form>
                    </td>
                </tr>
                <tr id="result-sunting">
                    <td>Download hasil sunting</td>
                    <td>
                        <a id="result-file" href=""><img src={DownloadIcon} alt="" /></a>
                    </td>
                </tr>
            </tbody>
          </table>

          <button type="button" onClick={() => setIsActive(false)} className="mt-3">Close</button>
        </div>
      </div>
  )
}

export default DetailOrder