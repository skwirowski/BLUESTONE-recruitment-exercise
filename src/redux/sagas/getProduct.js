import { put, takeLatest } from 'redux-saga/effects';
import types from 'redux/types';
import getData from 'services/getRequest';

const {
  PRODUCT_FETCH_REQUESTED,
  PRODUCT_FETCH_SUCCEEDED,
  PRODUCT_FETCH_FAILED,
} = types;

function* fetchProduct(action) {
  try {
    const productsList = yield getData(action.productIndex);

    yield put({
      type: PRODUCT_FETCH_SUCCEEDED,
      payload: productsList,
    });
  } catch (error) {
    yield put({
      type: PRODUCT_FETCH_FAILED,
      payload: error,
    });
  }
}

function* productFetchActionWatcher() {
  yield takeLatest(PRODUCT_FETCH_REQUESTED, fetchProduct);
}

export default productFetchActionWatcher;
