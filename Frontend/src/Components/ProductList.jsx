import React from 'react';
import { useState, useEffect } from 'react';
import product from './product';
import AddProduct from './AddProduct';

function Products(props) {
  const { onAddProduct } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='products-grid'>
      <>
        <div className='product-cards'>
          {products.map((product) => (
            <div className='product-card' key={product.SKU}>
              <input type='checkbox' className='product-card__checkbox' />
              <div className='product-details'>
                <ul>{product.SKU}</ul>
                <ul>{product.Name} </ul>
                <p>Price: $ {product.price}</p>
                {product.size && <p>Size: {product.size}</p>}
                {product.weight && <p>Weight: {product.weight}</p>}
                {product.Dimensions && (
                  <div>
                    <p>
                      Dimensions:
                      <>
                        {product.Dimensions[0].Height} x
                        {product.Dimensions[0].Width} x
                        {product.Dimensions[0].Length}
                      </>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
      <div></div>
    </div>
  );
}

export default Products;
