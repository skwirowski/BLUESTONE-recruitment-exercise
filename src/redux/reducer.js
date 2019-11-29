import types from 'redux/types';

const INITIAL_STATE = {
  productsListLoading: false,
  productsList: [],
  error: null,
};

const {
  PRODUCTS_LIST_FETCH_REQUESTED,
  PRODUCTS_LIST_FETCH_SUCCEEDED,
  PRODUCTS_LIST_FETCH_FAILED,

  PRODUCT_FETCH_REQUESTED,
  PRODUCT_FETCH_SUCCEEDED,
  PRODUCT_FETCH_FAILED,
} = types;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_FETCH_REQUESTED:
      return {
        ...state,
        productsListLoading: true,
      };
    case PRODUCTS_LIST_FETCH_SUCCEEDED:
      return {
        ...state,
        productsListLoading: false,
        productsList: action.payload,
      };
    case PRODUCTS_LIST_FETCH_FAILED:
      return {
        ...state,
        productsListLoading: false,
        error: action.payload,
      };

    case PRODUCT_FETCH_REQUESTED:
      return {
        ...state,
        productsListLoading: true,
      };
    case PRODUCT_FETCH_SUCCEEDED:
      return {
        ...state,
        productsListLoading: false,
        productsList: state.productsList.map((product, index) =>
          index === action.index ? { ...action.payload } : product
        ),
      };
    case PRODUCT_FETCH_FAILED:
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
