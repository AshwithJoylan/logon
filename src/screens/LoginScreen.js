//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, Button, AsyncStorage} from 'react-native';

import {auth} from '../crud';

// create a component
class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();

    this.state = {
      email: '',
      passowrd: '',
    };

    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.login = this.login.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.email}
          placeholder={'Email'}
          onChangeText={this.changeEmail}
        />
        <TextInput
          placeholder={'Password'}
          style={styles.password}
          onChangeText={this.changePassword}
        />
        <View style={styles.loginButton}>
          <Button onPress={() => this.login()} title={'Log In'} />
        </View>
        <Text style={{ marginTop: 20 }} onPress={() => this.props.navigation.navigate('Register')}>Register</Text>
      </View>
    );
  }

  changeEmail = str => this.setState({email: str});

  changePassword = str => this.setState({passowrd: str});

  login = () => {
    const email = this.state.email;
    const password = this.state.passowrd;
    const data = {email, password};
    auth.post('login', data).then(res => {
      console.log(res);
      
      if (res.data && res.data.token) {
        AsyncStorage.setItem('token', res.data.token).then(
          () => this.props.navigation.navigate('Page')
        );
      } else {
        // eslint-disable-next-line no-alert
        alert('Login Failed');
      }
    }).catch(err => console.log(err)
    );
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  email: {
    marginTop: 40,
    width: '80%',
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 30,
  },
  loginButton: {
    marginTop: 30,
  },
  password: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 30,
    marginTop: 20,
  },
});

//make this component available to the app
export default LoginScreen;
