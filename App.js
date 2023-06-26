import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen.js';
//import PhotoScreen from './src/screens/PhotoScreen.js';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
  //  Photo: { screen: PhotoScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);