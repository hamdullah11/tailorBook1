import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import themImg from '../../assets/register.png';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../components/Button';

const Login = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image source={themImg} />
          <Text style={styles.title}>Login to your account</Text>
          <Text style={styles.subtitle}>
            Welcome back, please enter your details
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputElement}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput style={styles.formInput} />
          </View>
          <View style={styles.inputElement}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput style={styles.formInput} />
          </View>
          <View style={styles.forgotContainer}>
            <View style={styles.checkBoxContainer}>
              <BouncyCheckbox
                size={20}
                fillColor="#8645FF"
                iconStyle={{borderColor: 'red'}}
                innerIconStyle={{borderWidth: 2}}
              />
              <Text>Remember Me</Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#333333',
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <Button />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  inputElement: {
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    // fontWeight: '500',
    color: '#1A293D',
  },
  formContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  inputLabel: {
    fontSize: 12,
    color: '#1B2B41B8',
  },
  formInput: {
    backgroundColor: '#FBFBFB',
    borderWidth: 1,
    borderColor: 'rgba(28, 55, 90, 0.16)',
    borderRadius: 5,
  },
  checkBoxContainer: {
    flexDirection: 'row',
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
