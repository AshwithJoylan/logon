//import liraries
import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import {auth} from '../crud';
//component
const Register = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const register = () => {
    const data = {email, password};
    console.log(data);
    
    auth.post('register', data).then(res => {
      if (res.data && res.data.success) {
        console.log(res);
        
        props.navigation.goBack();
      } else {
        // eslint-disable-next-line no-alert
        alert('Registration Failed');
      }
    }).catch(err => console.log(err)
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.email}
        placeholder={'Email'}
        onChangeText={str => setEmail(str)}
      />
      <TextInput
        placeholder={'Password'}
        style={styles.password}
        onChangeText={str => setPassword(str)}
      />
      <View style={styles.loginButton}>
        <Button onPress={() => register()} title="Register" />
      </View>
    </View>
  );
};

//styles
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

export default Register;
