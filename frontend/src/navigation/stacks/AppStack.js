import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Home from '../../screens/app/Home/Home';
import Map from '../../screens/app/Map/Map';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={Home} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    );
};

export default AppStack