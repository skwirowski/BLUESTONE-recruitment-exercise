import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from 'static/routes';
import actions from 'redux/actions';
import putData from 'services/putRequest';
import Home from 'routes/Home';
import Product from 'routes/Product';
import Form from 'routes/Form';

import 'static/styles/styles.css';

function App() {
  const dispatch = useDispatch();
  const productsStore = useSelector(state => state);

  const { productsList, productsListLoading } = productsStore;
  const { fetchProductsList } = actions;
  const { home, details, edit } = routes;

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
        <Router>
          <Switch>
            <Route exact path={home}>
              <Home productsList={productsStateList} />
            </Route>
            <Route exact path={details(':id')}>
              <Product />
            </Route>
            <Route exact path={edit(':id')}>
              <Form />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
