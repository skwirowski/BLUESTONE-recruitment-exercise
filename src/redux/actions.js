import types from 'redux/types';

const { PRODUCTS_FETCH_REQUESTED } = types;

const fetchProductsList = () => ({
  type: PRODUCTS_FETCH_REQUESTED,
});

export default fetchProductsList;
