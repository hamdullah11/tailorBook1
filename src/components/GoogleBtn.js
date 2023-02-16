import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import googleIcon from '../../assets/googleIcon.png';

const GoogleBtn = () => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Image source={googleIcon} />
      <Text style={styles.btnText}>Continue with Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleBtn;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    height: 50,
    marginVertical: 15,
    borderRadius: 3,
    borderColor: 'rgba(28, 52, 84, 0.26)',
  },
  btnText: {
    color: 'rgba(27, 43, 65, 0.72)',
    fontSize: 17,
    fontWeight: '400',
  },
});
