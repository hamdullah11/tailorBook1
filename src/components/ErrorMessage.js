import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ErrorMessage = ({error}) => {
  return (
    <View>
      <Text style={styles.message}>{error}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  message: {
    color: 'red',
    fontSize: 12,
    marginTop: -10,
  },
});
