import React from 'react';
import PropTypes from 'prop-types';

import 'routes/Home/styles/styles.css';

const Home = ({ productsList }) => {
  return (
    <div className="home">
      {productsList.map(product => {
        const { name, number, description, images } = product;

        return (
          <div key={number} className="home__product">
            <h2 className="home__product--heading">{name}</h2>
            <img
              src={images[0].url}
              alt={images[0].name}
              className="home__product--image"
            />
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
