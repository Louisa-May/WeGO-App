/* eslint-disable prettier/prettier */
import React from 'react';
import {persistor, store} from './redux-store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Navigation from './src/navigation';
import { ToastProvider } from 'react-native-toast-notifications'
// import { NativeBaseProvider} from "native-base";
export default function App() {
  return (
    // <NativeBaseProvider>
      <ToastProvider>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Navigation />
            </PersistGate>
        </Provider>
      </ToastProvider>
    // </NativeBaseProvider>
  );
}
