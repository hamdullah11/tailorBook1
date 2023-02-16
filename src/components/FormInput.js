import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const FormInput = ({
  label,
  onChange,
  keyboardType = 'default',
  isSecure,
  value,
}) => {
  return (
    <View style={styles.inputElement}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        onChangeText={onChange}
        style={styles.formInput}
        keyboardType={keyboardType}
        secureTextEntry={isSecure}
        value={value}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  formInput: {
    backgroundColor: '#FBFBFB',
    borderWidth: 1,
    borderColor: 'rgba(28, 55, 90, 0.16)',
    borderRadius: 5,
  },
  inputLabel: {
    fontSize: 12,
    color: '#1B2B41B8',
  },
  inputElement: {
    marginVertical: 10,
  },
});
