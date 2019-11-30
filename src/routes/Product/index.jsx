import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from 'static/routes';
import randomNumber from 'utils/randomNumber';

import 'routes/Product/styles/styles.css';

const Product = () => {
  const { id } = useParams();
  const currentProductIndex = Number(id) - 1;
  const { home, edit } = routes;

  const productsList = useSelector(state => state.productsList);

  const [currentProduct, setCurrentProduct] = useState(
    productsList[currentProductIndex]
  );
  const [productsLoading, setLoader] = useState(true);

  useEffect(() => {
    if (productsList.length !== 0) {
      setCurrentProduct(productsList[currentProductIndex]);
      setLoader(false);
    }
  }, [productsList]);

  return (
    <div className="wrapper">
      {productsLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="product">
          <h2>{currentProduct.name}</h2>
          <small>Product number: {currentProduct.number}</small>
          <br />
          <Link to={home}>Go back to products list</Link>
          <br />
          <Link to={edit(id)}>Edit product</Link>
          <h3>Description:</h3>
          <p>{currentProduct.description}</p>
          <div>
            {currentProduct.images.map(image => (
              <img key={randomNumber(1000)} src={image.url} alt={image.name} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
