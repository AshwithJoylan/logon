import * as React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Login from './src/screens/LoginScreen';
import Register from './src/screens/RegisterScreen';
import Page from './src/screens/Page';

export default class App extends React.Component {
  render() {
    return <Container />;
  }
}

const Navigator = createStackNavigator(
  {
    Login,
    Register,
    Page
  },
  {
    initialRouteName: 'Login',
  },
);

//dfsdgsg

const Container = createAppContainer(Navigator);
