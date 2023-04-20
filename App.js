/* eslint-disable prettier/prettier */
import React from 'react';
import MainStack from './src/navigation';
import {persistor, store} from './redux-store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MainStack />
          </PersistGate>
    </Provider>
  );
}
