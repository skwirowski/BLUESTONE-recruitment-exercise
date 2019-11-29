import { put, takeLatest } from 'redux-saga/effects';
import types from 'redux/types';
import getData from 'services/getRequest';

const {
  PRODUCTS_LIST_FETCH_REQUESTED,
  PRODUCTS_LIST_FETCH_SUCCEEDED,
  PRODUCTS_LIST_FETCH_FAILED,
} = types;

function* fetchProductsList() {
  try {
    const productsList = yield getData();

    yield put({
      type: PRODUCTS_LIST_FETCH_SUCCEEDED,
      payload: productsList,
    });
  } catch (error) {
    yield put({
      type: PRODUCTS_LIST_FETCH_FAILED,
      payload: error,
    });
  }
}

function* productsListFetchActionWatcher() {
  yield takeLatest(PRODUCTS_LIST_FETCH_REQUESTED, fetchProductsList);
}

export default productsListFetchActionWatcher;
