import { StatusBar } from 'expo-status-bar';
import { Provider, useSelector } from "react-redux";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/stacks/AuthStack';
import AppStack from './src/navigation/stacks/AppStack';

require('localstorage-polyfill');



export default function App() {

  const { isLoggedIn } = useSelector(state => state.auth);

  return (
      <NavigationContainer>
        {isLoggedIn? <AppStack /> : <AuthStack />}
      </NavigationContainer>
  );
}