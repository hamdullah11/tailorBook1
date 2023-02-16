import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ValidateEmail = email => {
  if (email == '') {
    return {error: true, message: 'Email is required'};
  }
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (!reg.test(email)) {
    return {error: true, message: 'Invalid email'};
  }
};

export default ValidateEmail;

const styles = StyleSheet.create({});
