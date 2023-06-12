import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import PhotoScreen from './src/screens/PhotoScreen';

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
