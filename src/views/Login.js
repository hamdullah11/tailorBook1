import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import themImg from '../../assets/register.png';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../components/Button';
import OrLogin from '../components/OrLogin';
import GoogleBtn from '../components/GoogleBtn';
import FormInput from '../components/FormInput';
import DoNotHaveAccount from '../components/DoNotHaveAccount';
import ValidateEmail from '../controllers/ValidateEmail';
import ErrorMessage from '../components/ErrorMessage';
import ValidatePassword from '../controllers/ValidatePassword';

const Login = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({emailError: '', passwordError: ''});
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  const loginUser = () => {
    //   Validate user first
    navigation.navigate('home');

    let resp = ValidateEmail(user.email);
    console.log(resp);
    if (resp.error) {
      setErrors({
        ...errors,
        emailError: resp.message,
      });
    }
    resp = ValidatePassword(user.password);
    if (resp.error) {
      setErrors({
        ...errors,
        passwordError: resp.message,
      });
    }
  };
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
          <FormInput
            label={'Email Address'}
            onChange={text => {
              setUser({
                ...user,
                email: text,
              });
            }}
            keyboardType="email-address"
            isSecure={false}
          />
          {errors.emailError && <ErrorMessage error={errors.emailError} />}
          <FormInput
            label={'Password'}
            isSecure={true}
            onChange={text => {
              setUser({
                ...user,
                password: text,
              });
            }}
          />
          {errors.passwordError && (
            <ErrorMessage error={errors.passwordError} />
          )}

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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}>
              <Text
                style={{
                  color: '#333333',
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <Button
            title={'Log in'}
            onClick={() => {
              loginUser();
            }}
          />
          <OrLogin />
          <GoogleBtn />

          <DoNotHaveAccount
            text={"Don't have an account?"}
            bntText={'Sign Up'}
            screen="register"
            navigation={navigation}
          />
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

  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(26, 41, 61, 0.83)',
  },
  formContainer: {
    marginVertical: 30,
    marginHorizontal: 25,
  },

  checkBoxContainer: {
    flexDirection: 'row',
  },
  forgotContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
