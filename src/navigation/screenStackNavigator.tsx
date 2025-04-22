// MainStackNavigator.tsx

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenNames from './screenNames';
import NewsScreen from '@screens/news';
import DetailsScreen from '@screens/details';

const Stack = createStackNavigator();

const ScreensStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.News}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenNames.News} component={NewsScreen} />
      <Stack.Screen name={ScreenNames.Details} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default ScreensStackNavigator;
