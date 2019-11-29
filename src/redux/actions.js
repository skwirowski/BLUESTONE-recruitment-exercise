import types from 'redux/types';

const { PRODUCTS_LIST_FETCH_REQUESTED, PRODUCT_FETCH_REQUESTED } = types;

const fetchProductsList = () => ({
  type: PRODUCTS_LIST_FETCH_REQUESTED,
});

const fetchProduct = index => ({
  type: PRODUCT_FETCH_REQUESTED,
  index,
});

export default { fetchProductsList, fetchProduct };
