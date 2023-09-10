import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import rupiahFormat from '../utils/rupiahFormat';
import getDiscount from '../utils/getDiscount';

const ProductsItem = ({activeButton}) => {

      const [products, setProducts] = useState([]);
      const [productFiltered, setProductFiltered] = useState();

      const getProducts = async () => {
        const response = await fetch('http://localhost:8000/products/');
        const data = await response.json();
        setProducts(data);
      }

      const getLayananClass = () => {
        if (activeButton === 1) {
          return 'bg-green';
        } else {
          return 'bg-yellow';
        }
      };

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
      getProducts();
    }, [])

    useEffect(() => {
      setProductFiltered(products.filter(filterProducts));
    }, [activeButton, products])


  return (
    <div className="row my-5">
        {productFiltered?.map((product, _index) => 
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
                    <Link className={`btn ${getLayananClass()}`} to={{pathname: '/detail-layanan/', search: `?id=${product.id}`}}>Beli sekarang!</Link>
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