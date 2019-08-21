//import liraries
import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, AsyncStorage, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import io from 'socket.io-client';

const socket = io('http://13.235.107.111:8080');

import { api } from '../crud';
//component
const Page = (props) => {


  const [token, setToken] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    // socket.addEventListener('on_going_cars', res => alert('socket', res)
    // )
    AsyncStorage.getItem('token').then(res => setToken(res));

    this.willFocusSubscription = props.navigation.addListener(
      'willFocus',
      () => {
        getData();
      }
    );

    setLoading(true);
    getData();
  }, []);

  getData = () => {
    api.get('profile/all').then(res => {
      const data = res && res.data.data;
      if (data) 
        setData(data);
        setLoading(false);
    }).catch(err => console.log(err));
  };

  renderItem = ({item}) => (
    <TouchableOpacity
    onPress={() => {
      // props.navigation.setParams({ data: { name: item.name, email: item.email, number: item.number } });
      props.navigation.navigate('Update', { name: item.name, email: item.email, number: item.number, id: item._id });
    }}
    activeOpacity={0.5}
    style={{ borderWidth: StyleSheet.hairlineWidth, alignItems: 'center', padding: 10 }}>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
      <Text>{item.number}</Text>
    </TouchableOpacity>
  )
  console.log(data);
  return (
    
    <View style={styles.container}>
      { isLoading ?
        <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator style={{ alignSelf: 'center' }} /> 
        </View> :
        <FlatList 
        contentContainerStyle={{ paddingHorizontal: 10, width: '100%', paddingVertical: 10 }}
        data={data || []}
        renderItem={renderItem}
        keyExtractor={(item, i) => i.toString()}
        style={{ flex: 1 }}
        />
      }
      <TouchableOpacity onPress={() => props.navigation.navigate('Add')} style={{ height: 60, width: '100%', alignItems: "center", backgroundColor: 'blue', justifyContent: 'center' }}>
        <Text style={{ fontSize: 25, color: 'white' }}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Page;
