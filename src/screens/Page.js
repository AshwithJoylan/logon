//import liraries
import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';

//component
const Page = () => {

  const [token, setToken] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('token').then(res => setToken(res));
  });
  
  return (
    <View style={styles.container}>
      <Text>Logged In</Text>
      <Text>Token: {token}</Text>
    </View>
  );
};

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Page;
