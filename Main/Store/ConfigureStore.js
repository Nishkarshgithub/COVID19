import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
// App State
import appState from './Reducers/APP_NAVIGATION';
import homeReducer from './Reducers/HOME_REDUCER';
// ERROR Reducer
import ErrorReducer from './Reducers/ErrorReducer';


const reducers = combineReducers({
  appState,
  ErrorReducer,
  homeReducer
})

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'appState',
    'homeReducer',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
    'ErrorReducer',
  ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk),
);
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {
  store,
  persistor,
};