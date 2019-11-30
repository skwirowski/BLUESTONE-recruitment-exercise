import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from 'static/routes';
import randomNumber from 'utils/randomNumber';

// import 'routes/Home/styles/styles.css';

const Product = () => {
  const { id } = useParams();
  const currentProductIndex = Number(id) - 1;
  const { home } = routes;

  const productsList = useSelector(state => state.productsList);

  const [productsStateList, setProductsStateList] = useState(productsList);
  const [productsLoading, setLoader] = useState(true);

  useEffect(() => {
    if (productsList.length !== 0) {
      setProductsStateList(productsList);
      setLoader(false);
    }
  }, [productsList]);

  const product = productsStateList[currentProductIndex];

  return (
    <div className="wrapper">
      {productsLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="product">
          <h2>{product.name}</h2>
          <small>Product number: {product.number}</small>
          <h3>Description:</h3>
          <p>{product.description}</p>
          <div>
            {product.images.map(image => (
              <img key={randomNumber(1000)} src={image.url} alt={image.name} />
            ))}
          </div>
          <Link to={home}>Go back to products list</Link>
        </div>
      )}
    </div>
  );
};

export default Product;
