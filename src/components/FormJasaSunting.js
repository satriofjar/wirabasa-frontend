import React from 'react'

const FormJasaSunting = () => {
  return (
    <div>
        <p className="b-5">Masukan jumlah halaman untuk menentukan harga</p>
        <div className="mb-3">
            <label className="form-label text-secondary">Jumlah halaman</label>
            <input className="form-control w-50" type='number'/>
        </div>
        <button type="button" className="btn px-3 rounded-3 bg-green" id="submit-pages">Apply </button>
    </div>
  )
}

export default FormJasaSunting