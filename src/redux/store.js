import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const rootReducer = persistReducer(persistConfig, counterReducer)

const store = configureStore({
    reducer : {
        // includes the name of the counter and the reducers
        counter : rootReducer
    }
});

export let persistor = persistStore(store);
export default store;