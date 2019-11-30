import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from 'static/routes';

import 'routes/Home/styles/styles.css';

const Home = ({ productsList }) => {
  const { details } = routes;
  return (
    <div className="home">
      {productsList.map(product => {
        const { name, number, images } = product;

        return (
          <div key={number} className="home__product">
            <h2 className="home__product--heading">{name}</h2>
            <small>Product number: {number}</small>
            <img
              src={images[0].url}
              alt={images[0].name}
              className="home__product--image"
            />
            <Link to={details(number)}>Product details</Link>
          </div>
        );
      })}
    </div>
  );
};

Home.propTypes = {
  productsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
          name: PropTypes.string,
        })
      ),
    })
  ),
};

Home.defaultProps = {
  productsList: [],
};

export default Home;
