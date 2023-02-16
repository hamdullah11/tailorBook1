import {View, Text} from 'react-native';
import React from 'react';

const ValidatePassword = password => {
  if (password === '') {
    return {error: true, message: 'Password is required'};
  }
};

export default ValidatePassword;
