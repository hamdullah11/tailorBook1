import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const DoNotHaveAccount = ({text, bntText, navigation, screen}) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate(screen);
        }}>
        <Text style={styles.btnText}>{bntText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoNotHaveAccount;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    marginLeft: 5,
  },
  btnText: {
    color: 'rgba(134, 69, 255, 0.6)',
  },
});
