import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from 'redux/reducer';
import rootSaga from 'redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, logger);

const store = createStore(reducer, middleware);

export default store;

sagaMiddleware.run(rootSaga);
