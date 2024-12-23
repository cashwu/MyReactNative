/* eslint-disable handle-callback-err */
import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const cancelRegister = () => {
    Alert.alert('Registration Cancelled');
    navigation.navigation('Home');
  };

  const registerAccount = async () => {
    if (!userName) {
      Alert.alert('Please enter a username');
    } else if (password !== passwordConfirm) {
      Alert.alert('Passwords do not match');
    } else {
      AsyncStorage.getItem(userName, (err, result) => {
        if (result !== null) {
          Alert.alert(`${userName} account already exists`);
        } else {
          AsyncStorage.setItem(userName, password, (err, result) => {
            Alert.alert(`${userName} account created`);
            navigation.navigate('Home');
          });
        }
      });
    }
  };

  return <View style={styles.container}></View>;
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});
