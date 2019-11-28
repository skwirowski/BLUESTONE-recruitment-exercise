import types from 'redux/types';

const INITIAL_STATE = {
  productsListLoading: false,
  productsList: [],
  error: null,
};

const {
  PRODUCTS_FETCH_REQUESTED,
  PRODUCTS_FETCH_SUCCEEDED,
  PRODUCTS_FETCH_FAILED,
} = types;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_REQUESTED:
      return {
        ...state,
        productsListLoading: true,
      };
    case PRODUCTS_FETCH_SUCCEEDED:
      return {
        ...state,
        productsListLoading: false,
        productsList: action.payload,
      };
    case PRODUCTS_FETCH_FAILED:
      return {
        ...state,
        productsListLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
