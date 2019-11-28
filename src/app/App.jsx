import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchProductsList from 'redux/actions';

function App() {
  const dispatch = useDispatch();
  const productsStore = useSelector(state => state);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    dispatch(fetchProductsList());
    setProductsList(productsStore);
  }, [dispatch]);

  console.log('STORE: ', productsStore);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
