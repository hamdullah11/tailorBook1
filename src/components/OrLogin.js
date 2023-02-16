import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OrLogin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.orText}> OR </Text>
      <View style={styles.line}></View>
    </View>
  );
};

export default OrLogin;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  line: {
    width: '40%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(28, 52, 84, 0.26)',
  },
  orText: {
    color: 'rgba(28, 52, 84, 0.26)',
  },
});
