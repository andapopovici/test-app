import {createStore} from 'redux';
import rootReducer from '../reducers';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default (initialState) => {
    let store = createStore(persistedReducer, initialState);
    
    let persistor = persistStore(store);

    return {
        store,
        persistor
    }
}