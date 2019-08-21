//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Toast } from 'native-base';

import { api }from '../crud';
//component
const UpdatePage = (props) => {
    console.log(props.navigation);
    
    const data = props.navigation.state.params;
    console.log(data);
    
    const [email, setEmail] = useState(data.email);
    const [name, setName] = useState(data.name);
    const [number, setNumber] = useState(String(data.number));

    onPress = () => {
        if (!email && !number) {
            return console.log('Error');
        }
        
        api.post('profile/update', {
            id: data.id,
            email,
            name,
            number: Number(number)
        }).then(res => {
            Toast.show({text: 'Success', buttonText: 'Okay', position: 'bottom', type: 'success'});
            props.navigation.goBack();
        })
        .catch(err => Toast.show({ text: 'Failed to Update', buttonText: 'Okay', position: 'bottom', type: 'danger' }));
    }
    return (
        <View style={styles.container}>
            <TextInput 
                value={email}
                keyboardType='email-address'
                style={{ borderWidth: StyleSheet.hairlineWidth, width: '80%', height: 60 , margin: 10}}
                placeholder="Email"
                onChangeText={str => setEmail(str)}
            />
            <TextInput 
                value={name}
                style={{ borderWidth: StyleSheet.hairlineWidth, width: '80%', height: 60 , margin: 10}}
                placeholder="Name"
                onChangeText={str => setName(str)}
            />
            <TextInput 
                value={String(number)}
                keyboardType='number-pad'
                style={{ borderWidth: StyleSheet.hairlineWidth, width: '80%', height: 60 , margin: 10}}
                placeholder="Number"
                onChangeText={str => setNumber(str)}
            />
            <Button 
            title="Update"
            onPress={this.onPress}
            />
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

export default UpdatePage;
