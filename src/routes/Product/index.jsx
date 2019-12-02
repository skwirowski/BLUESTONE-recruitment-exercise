import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from 'static/routes';
import randomNumber from 'utils/randomNumber';
import Button from 'components/Button';
import Loader from 'components/Loader';

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
  }, [productsList, currentProductIndex]);

  return (
    <div className="product">
      {productsLoading ? (
        <Loader />
      ) : (
        <div className="product__item">
          <h2 className="product__item--heading">{currentProduct.name}</h2>
          <small className="product__item--number">
            Product number: {currentProduct.number}
          </small>
          <Button>
            <Link to={home} className="product__item--link link-icon">
              <span className="link-icon--arrow" /> Products list
            </Link>
          </Button>
          <Button customClassName="secondary">
            <Link to={edit(id)} className="product__item--link">
              Edit product
            </Link>
          </Button>
          <h3 className="product__item--description">Description</h3>
          <p className="product__item--paragraph">
            {currentProduct.description}
          </p>
          <div className="product__item--gallery">
            <h3 className="gallery__description">Gallery</h3>
            <div className="gallery__wrapper">
              {currentProduct.images.map(image => (
                <img
                  key={randomNumber(1000)}
                  src={image.url}
                  alt={image.name}
                  className="gallery__wrapper--image"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
