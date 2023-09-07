import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
    <div className="container">
      <div className="row py-5">
        <div className="col">
          <h3>Tentang Kami</h3>
          <p>info@wirabasa.com</p>
          <p>+62 8570 2891 223</p>
        </div>
        <div className="col">
          <h3>Produk WiraBasa</h3>
          <ul>
            <li>
              <a href="">Jasa Penyuntingan</a>
            </li>
            <li>
              <a href="">Kelas Penyuntingan</a>
            </li>
            <li>
              <a href="">Jasa Kepewaraan</a>
            </li>
            <li>
              <a href="">Kelas Kepewaraan</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </footer>
  )
}

export default Footer