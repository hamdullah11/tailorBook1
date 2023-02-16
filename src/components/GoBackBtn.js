import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import goBack from '../../assets/goBack.png';
const GoBackBtn = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Image source={goBack} />
      </TouchableOpacity>
    </View>
  );
};

export default GoBackBtn;

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#C5C3D6',
    width: 55,
    height: 50,
  },
});
