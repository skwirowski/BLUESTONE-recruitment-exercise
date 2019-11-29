import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/actions';
import putData from 'services/putRequest';

import Home from 'routes/Home';

import 'static/styles/styles.css';

function App() {
  const dispatch = useDispatch();
  const productsStore = useSelector(state => state);
  const { productsList, productsListLoading } = productsStore;
  const { fetchProductsList, fetchProduct } = actions;

  const [productsStateList, setProductsStateList] = useState([]);

  useEffect(() => {
    dispatch(fetchProductsList());
    // putData();
  }, [dispatch]);

  useEffect(() => {
    if (productsList.length !== 0) setProductsStateList(productsList);
  }, [productsList]);

  console.log('STORE: ', productsStore);
  console.log('productsList: ', productsList);

  return (
    <div className="main-container">
      {productsListLoading ? (
        <div>Loading...</div>
      ) : (
        <Home productsList={productsStateList} />
      )}
    </div>
  );
}

export default App;
