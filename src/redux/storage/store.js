import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // default to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';


import sectionReducer from '../slice/sectionSlice'; 


const sectionPersistConfig = {
  key: 'sectionStorage',
  storage,
};

// Persisted reducers
const rootReducer = combineReducers({

  sectionStorage: persistReducer(sectionPersistConfig, sectionReducer),
});

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
