// MainStackNavigator.tsx

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenNames from './screenNames';

import SplashScreen from '@screens/splash';
import ScreensStackNavigator from './screenStackNavigator';

const Stack = createStackNavigator();

const MainStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.Splash}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenNames.Splash} component={SplashScreen} />
      <Stack.Screen
        name={ScreenNames.NewsScreens}
        component={ScreensStackNavigator}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
