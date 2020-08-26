import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';

import {Home, Route, Search, Success} from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 250}); // fade
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Route" component={Route} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
