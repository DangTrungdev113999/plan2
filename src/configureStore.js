import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools({realtime: true})
    : compose;

export default function configureStore(onCompletion) {
  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, enhancers);
  const persistor = persistStore(store, null, onCompletion);

  sagaMiddleware.run(rootSaga);
  return {store, persistor};
}
