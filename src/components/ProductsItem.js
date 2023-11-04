import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import rupiahFormat from '../utils/rupiahFormat';
import getDiscount from '../utils/getDiscount';
import axios from 'axios';
import { API_URI } from '../utils/config';

const ProductsItem = () => {

      const [products, setProducts] = useState([]);

      const getProducts = async () => {
        try{
          const response = await axios.get( API_URI + 'products/');
          setProducts(response.data);
        } catch (error){
          console.error(error);
        }
      }

    const getSubString = (feature, len) => {
      if(feature.length > len){
        return feature.substring(0, len) + '...';
      } else {
        return feature;
      }
    }

    useEffect(() => {
      getProducts();
    }, [])


  return (
    <>
      <div className='container'>
        <div id='jasa-sunting'>
          <div className='title'>
            <h3>Jasa Sunting Tulisan</h3>
            <p>Buat naskahmu jadi berkualitas dengan menyunting bahasa tulismu bersama WiraBasa. </p>
          </div>

          <div className='row mt-5'>
            {products?.filter((e) => e.category === 'Jasa-Sunting').map((product, _index) => 
              <div key={_index} className="col-md-3 my-3" style={{minWidth: '270px'}}>
              <div className="box-layanan border rounded-4">
              <div className='clr-block bg-green'></div>
              <div className="text-center">
                  <h3 className="pt-2">{getSubString(product.name, 15)}</h3>
              </div>
              <div className="ln mt-3"></div>
              {product.discount === 0? 
                    <p className="price ms-4 my-4">{rupiahFormat(getDiscount(product.price, product.discount))}</p>:
                    <>
                        <p className="price-dc ms-4 mt-2"> <s>{rupiahFormat(product.price)}</s></p>
                        <p className="price ms-4">{rupiahFormat(getDiscount(product.price, product.discount))}</p>
                    </>
                    }

              <div className="text-center mb-3">
                  <Link className='btn bg-green' to={{pathname: '/detail-layanan/', search: `?id=${product.id}`}}>Beli sekarang!</Link>
              </div>
                
                <ul className="text-start ms-4 me-2">
                  {product.features.slice(0, 3).map((feature, _index) => 
                      <li key={ _index }>{getSubString(feature.name, 35)}</li>
                      )}
                </ul>
              </div>

            </div>)}
          </div>
        </div>


        <div id='kelas-sunting'>
          <div className='title'>
          <h3>Kelas Menyunting</h3>
          <p>Raih keterampilan dalam menulis dan menyunting naskah melalui kelas spesial WiraBasa.</p>
          </div>

          <div className='row mt-5'>
            {products?.filter((e) => e.category === 'Kelas-Sunting').map((product, _index) => 
                <div key={_index} className="col-md-3 my-3" style={{minWidth: '270px'}}>
                <div className="box-layanan border rounded-4">
                <div className='clr-block bg-yellow'></div>
                <div className="text-center">
                    <h3 className="pt-2">{getSubString(product.name, 15)}</h3>
                </div>
                <div className="ln mt-3"></div>
                {product.discount === 0? 
                      <p className="price ms-4 my-4">{rupiahFormat(getDiscount(product.price, product.discount))}</p>:
                      <>
                          <p className="price-dc ms-4 mt-2"> <s>{rupiahFormat(product.price)}</s></p>
                          <p className="price ms-4">{rupiahFormat(getDiscount(product.price, product.discount))}</p>
                      </>
                      }

                <div className="text-center mb-3">
                    <Link className='btn bg-yellow' to={{pathname: '/detail-layanan/', search: `?id=${product.id}`}}>Beli sekarang!</Link>
                </div>
                  
                  <ul className="text-start ms-4 me-2">
                    {product.features.slice(0, 3).map((feature, _index) => 
                        <li key={ _index }>{getSubString(feature.name, 35)}</li>
                        )}
                  </ul>
                </div>

              </div>)}

          </div>


        </div>

        <div id='jasa-kepewaraan'>
          <div className='title'>
          <h3>Jasa Kepewaraan</h3>
          <p>Buat acaramu berjalan teratur bersama WiraBasa.</p>
          </div>

          <div className='row mt-5'>
            {products?.filter((e) => e.category === 'Jasa-Kepewaraan').map((product, _index) => 
                  <div key={_index} className="col-md-3 my-3" style={{minWidth: '270px'}}>
                  <div className="box-layanan border rounded-4">
                  <div className='clr-block bg-red'></div>
                  <div className="text-center">
                      <h3 className="pt-2">{getSubString(product.name, 15)}</h3>
                  </div>
                  <div className="ln mt-3"></div>
                  {product.discount === 0? 
                        <p className="price ms-4 my-4">{rupiahFormat(getDiscount(product.price, product.discount))}</p>:
                        <>
                            <p className="price-dc ms-4 mt-2"> <s>{rupiahFormat(product.price)}</s></p>
                            <p className="price ms-4">{rupiahFormat(getDiscount(product.price, product.discount))}</p>
                        </>
                        }

                  <div className="text-center mb-3">
                      <Link className='btn bg-red' to={{pathname: '/detail-layanan/', search: `?id=${product.id}`}}>Beli sekarang!</Link>
                  </div>
                    
                    <ul className="text-start ms-4 me-2">
                      {product.features.slice(0, 3).map((feature, _index) => 
                          <li key={ _index }>{getSubString(feature.name, 35)}</li>
                          )}
                    </ul>
                  </div>

                </div>)}

          </div>

        </div>

        <div id='kelas-kepewaraan'>
          <div className='title'>
          <h3>Kelas Kepewaraan</h3>
          <p>Raih kemahiran dan  naskah melalui kelas spesial WiraBasa.</p>
          </div>

          <div className='row mt-5'>
            {products?.filter((e) => e.category === 'Kelas-Kepewaraan').map((product, _index) => 
                  <div key={_index} className="col-md-3 my-3" style={{minWidth: '270px'}}>
                  <div className="box-layanan border rounded-4">
                  <div className='clr-block bg-blue'></div>
                  <div className="text-center">
                      <h3 className="pt-2">{getSubString(product.name, 15)}</h3>
                  </div>
                  <div className="ln mt-3"></div>
                  {product.discount === 0? 
                        <p className="price ms-4 my-4">{rupiahFormat(getDiscount(product.price, product.discount))}</p>:
                        <>
                            <p className="price-dc ms-4 mt-2"> <s>{rupiahFormat(product.price)}</s></p>
                            <p className="price ms-4">{rupiahFormat(getDiscount(product.price, product.discount))}</p>
                        </>
                        }

                  <div className="text-center mb-3">
                      <Link className='btn bg-blue' to={{pathname: '/detail-layanan/', search: `?id=${product.id}`}}>Beli sekarang!</Link>
                  </div>
                    
                    <ul className="text-start ms-4 me-2">
                      {product.features.slice(0, 3).map((feature, _index) => 
                          <li key={ _index }>{getSubString(feature.name, 35)}</li>
                          )}
                    </ul>
                  </div>

                </div>)}

          </div>

        </div>

      </div>
    </>
  )
}

export default ProductsItem