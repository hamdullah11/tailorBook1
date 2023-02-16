import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({title, onClick}) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  button: {
    width: '100%',
    backgroundColor: '#8645FF',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
