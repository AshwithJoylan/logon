//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Toast } from 'native-base';
import { api } from '../crud';
//component
const AddProfile = (props) => {

    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [number, setNumber] = useState(null);

    onPress = () => {
        if (!email && !number) {
            return console.log('Error');
        }
        
        api.post('profile/add', {
            email,
            name,
            number: Number(number)
        }).then(res => {
            Toast.show({text: 'Success', buttonText: 'Okay', position: 'bottom', type: 'success'});
            props.navigation.goBack();
        })
        .catch(err => Toast.show({ text: 'Failed to Add', buttonText: 'Okay', position: 'bottom', type: 'danger' }));
    }
    return (
        <View style={styles.container}>
            <TextInput 
                keyboardType='email-address'
                style={{ borderWidth: StyleSheet.hairlineWidth, width: '80%', height: 60 , margin: 10}}
                placeholder="Email"
                onChangeText={str => setEmail(str)}
            />
            <TextInput 
                style={{ borderWidth: StyleSheet.hairlineWidth, width: '80%', height: 60 , margin: 10}}
                placeholder="Name"
                onChangeText={str => setName(str)}
            />
            <TextInput 
            keyboardType='number-pad'
                style={{ borderWidth: StyleSheet.hairlineWidth, width: '80%', height: 60 , margin: 10}}
                placeholder="Numnber"
                onChangeText={str => setNumber(str)}
            />
            <Button 
            title="Add"
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

export default AddProfile;
