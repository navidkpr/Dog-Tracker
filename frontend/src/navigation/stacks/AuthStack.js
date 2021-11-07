import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoardingScreen from '../../screens/auth/OnBoardingScreen';
import CreateAccountScreen from '../../screens/auth/CreateAccountScreen';
import SignInScreen from '../../screens/auth/SignInScreen';
const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='OnBoardingScreen'>
          <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
          <Stack.Screen name="Create Account" component={CreateAccountScreen} />
          <Stack.Screen name="Sign In" component={SignInScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack