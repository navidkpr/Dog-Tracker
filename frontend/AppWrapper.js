import { Provider, useSelector } from "react-redux";
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import App from "./App";
import store from './src/store/store';

export default function AppWrapper() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
          <App />
      </SafeAreaProvider>
    </Provider>
  );
}