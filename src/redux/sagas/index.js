import { fork } from 'redux-saga/effects';

import productsListFetchActionWatcher from 'redux/sagas/getProductsList';
import productFetchActionWatcher from 'redux/sagas/getProduct';

export default function* rootSaga() {
  yield fork(productsListFetchActionWatcher);
  yield fork(productFetchActionWatcher);
}
