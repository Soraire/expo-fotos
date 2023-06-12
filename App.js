import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import PhotoScreen from './screens/PhotoScreen';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Photo: { screen: PhotoScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);