import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StatusBar} from 'react-native';

import React from 'react';
import Login from '../views/Login';
import Register from '../views/Register';
import ForgotPassword from '../views/ForgotPassword';
import NewPassword from '../views/NewPassword';
import PasswordSuccessChanged from '../views/PasswordSuccessChanged';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Orders from '../views/Orders';
import AddNewOrder from '../views/AddNewOrder';
import Gallery from '../views/Gallery';
import {getHeaderTitle} from '@react-navigation/elements';
import CustomHeader from '../components/CustomHeader';
const Route = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const BottomTabs = () => {
    return (
      <>
        <StatusBar backgroundColor="#6C2EE1" />
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#8645FF',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerLeft: () => {
              return <Text>hamd</Text>;
            },
          }}>
          <Tab.Screen name="orders" component={Orders} />
          <Tab.Screen name="newOrder" component={AddNewOrder} />
          <Tab.Screen name="Gallery" component={Gallery} />
        </Tab.Navigator>
      </>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="passwordChanged" component={PasswordSuccessChanged} />
      <Stack.Screen name="home" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default Route;
