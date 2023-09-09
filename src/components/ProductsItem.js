import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const ProductsItem = ({activeButton}) => {
    const data_products = [
        {
          'name': 'kelas sibuk',
          'price': 100000,
          'discount': 30,
          'category': 'Kelas-Sunting',
          'is_active': true,
          'features': [
            'Voucher kelas pelatihan WiraBasa berikutnya', 
            'Voucher kelas pelatihan WiraBasa berikutnya', 
            'Strategi menulis KTI yang komersial',
            'Voucher kelas pelatihan WiraBasa berikutnya'
          ],
        },
        {
          'name': 'Teknik menulis',
          'price': 100000,
          'discount': 40,
          'category': 'Kelas-Sunting',
          'is_active': true,
          'features': [
            'Kelas eksklusif', 
            'Voucher kelas pelatihan WiraBasa berikutnya', 
            'Strategi menulis KTI yang komersial',
            'Relasi'
          ],
        },
        {
          'name': 'Jasa Sunting',
          'price': 10000,
          'discount': 0,
          'category': 'Jasa-Sunting',
          'is_active': true,
          'features': [
            'Kelas eksklusif', 
            'Voucher kelas pelatihan WiraBasa berikutnya',
            'Strategi menulis KTI yang komersial',
            'Relasi'
          ],
        }
      ]

      const [products, setProducts] = useState([]);

      const getLayananClass = () => {
        if (activeButton === 1) {
          return 'bg-green';
        } else {
          return 'bg-yellow';
        }
      };

      const getDiscount = (price, discount) => {
        return price - (price * (discount / 100));
      }

      const rupiahFormat = (num) => {
        return new Intl.NumberFormat('id-ID', { 
            style: 'currency', 
            currency: 'IDR', 
            maximumFractionDigits: 0 
        }).format(num);
    }

    const filterProducts = (product) => {
        if(activeButton === 1){
            return product.category === 'Jasa-Sunting'
        } else if(activeButton === 2){
            return product.category === 'Kelas-Sunting'
        }
    }

    const getSubString35 = (feature) => {
        if(feature.length > 35){
            return feature.substring(0, 35) + '...';
        } else{
            return feature;
        }
    }

    const getSubString15 = (feature) => {
        if(feature.length > 15){
            return feature.substring(0, 15) + '...';
        } else{
            return feature;
        }
    }

    useEffect(() => {
        setProducts(data_products.filter(filterProducts));
    }, [activeButton])


  return (
    <div className="row my-5">
        {products?.map((product, _index) => 
            <div key={ _index } className="col-md-3 my-3" style={{minWidth: '270px'}}>
                <div className="box-layanan border rounded-4">
                <div className={`clr-block ${getLayananClass()}`}></div>
                <div className="text-center">
                    <h3 className="pt-2">{getSubString15(product.name)}</h3>
                </div>
                <div className="ln mt-3"></div>
                    {product.discount == 0? 
                    <p className="price ms-4">{rupiahFormat(getDiscount(product.price, product.discount))}</p>:
                    <>
                        <p className="price-dc ms-4 mt-2"> <s>{rupiahFormat(product.price)}</s></p>
                        <p className="price ms-4">{rupiahFormat(getDiscount(product.price, product.discount))}</p>
                    </>
                    }

                <div className="text-center mb-3">
                    <Link className={`btn ${getLayananClass()}`} to={{pathname: '/detail-layanan/', search: `?id=${1}`}}>Beli sekarang!</Link>
                </div>
                
                <ul className="text-start ms-4 me-2">
                    {product.features.map((feature, _index) => 
                    <li key={ _index }>{getSubString35(feature)}</li>
                    )}
                </ul>
                </div>
          </div>
        )}
    </div>
  )
}

export default ProductsItem