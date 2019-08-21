import * as React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import { Root } from 'native-base';

import Login from './src/screens/LoginScreen';
import Register from './src/screens/RegisterScreen';
import Page from './src/screens/Page';
import Add from './src/screens/add';
import Update from './src/screens/update';

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Container />
      </Root>
    );
  }
}

const Navigator = createStackNavigator(
  {
    Login,
    Register,
    Page,
    Add,
    Update
  },
  {
    initialRouteName: 'Page',
  },
);

//dfsdgsg

const Container = createAppContainer(Navigator);
