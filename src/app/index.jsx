import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from 'static/routes';
import actions from 'redux/actions';
import Home from 'routes/Home';
import Product from 'routes/Product';
import Form from 'routes/Form';
import Loader from 'components/Loader';

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
  }, [dispatch]);

  useEffect(() => {
    if (productsList.length !== 0) setProductsStateList(productsList);
  }, [productsList]);

  return (
    <div className="main-container">
      {productsListLoading ? (
        <Loader />
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
