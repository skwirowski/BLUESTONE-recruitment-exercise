import { put, takeLatest } from 'redux-saga/effects';
import types from 'redux/types';

const {
  PRODUCTS_FETCH_REQUESTED,
  PRODUCTS_FETCH_SUCCEEDED,
  PRODUCTS_FETCH_FAILED,
} = types;

async function temporaryDataFetch() {
  const dataRequest = await fetch('https://randomuser.me/api/');
  const parsedResponse = await dataRequest.json();
  const data = await parsedResponse.results;

  return data;
}

function* fetchProductsList() {
  try {
    const productsList = yield temporaryDataFetch();

    yield put({
      type: PRODUCTS_FETCH_SUCCEEDED,
      payload: productsList,
    });
  } catch (error) {
    yield put({
      type: PRODUCTS_FETCH_FAILED,
      payload: error,
    });
  }
}

function* actionWatcher() {
  yield takeLatest(PRODUCTS_FETCH_REQUESTED, fetchProductsList);
}

export default actionWatcher;
