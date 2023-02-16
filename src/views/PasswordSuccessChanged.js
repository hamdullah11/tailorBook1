import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import GoBackBtn from '../components/GoBackBtn';
import CheckIcon from '../../assets/teck.png';
const PasswordSuccessChanged = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <GoBackBtn
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View
            style={{
              marginTop: 50,
              alignItems: 'center',
            }}>
            <Image source={CheckIcon} />
          </View>
          <View
            style={{
              marginTop: 30,
              alignItems: 'center',
            }}>
            <Text style={styles.labelText}>Password Changed!</Text>
            <Text style={styles.subLabel}>
              Your password has been changed successfully.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PasswordSuccessChanged;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 15,
  },
  labelText: {
    fontSize: 22,
    fontWeight: '600',
  },
  subLabel: {
    fontSize: 14,
    color: 'rgba(26, 41, 61, 0.83)',
  },
});
