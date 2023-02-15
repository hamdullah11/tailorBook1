import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
const Stack = createNativeStackNavigator();
import React from 'react';
import Login from '../views/Login';

const Route = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default Route;
