import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import themImg from '../../assets/register.png';
import FormInput from '../components/FormInput';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../components/Button';
import OrLogin from '../components/OrLogin';
import GoogleBtn from '../components/GoogleBtn';
import DoNotHaveAccount from '../components/DoNotHaveAccount';

const Register = ({navigation}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image source={themImg} />
          <Text style={styles.title}>Create an account</Text>
          <Text style={styles.subtitle}>
            Sign up now to get started with an account.
          </Text>
        </View>
        <View style={styles.formContainer}>
          <FormInput
            label={'Full Name'}
            onChange={text => {
              setUser({
                ...user,
                name: text,
              });
            }}
            isSecure={false}
          />
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
          <FormInput
            label={'Phone Number'}
            onChange={text => {
              setUser({
                ...user,
                phone: text,
              });
            }}
            keyboardType="number-pad"
            isSecure={false}
          />
          <FormInput
            label={'Password'}
            onChange={text => {
              setUser({
                ...user,
                password: text,
              });
            }}
            keyboardType="default"
            isSecure={true}
          />
          <View style={styles.forgotContainer}>
            <View style={styles.checkBoxContainer}>
              <BouncyCheckbox
                size={20}
                unfillColor="rgba(28, 55, 90, 0.16)"
                fillColor="#8645FF"
                innerIconStyle={{borderWidth: 2}}
              />
              <Text
                style={{
                  marginLeft: -10,
                  fontSize: 13,
                }}>
                I have read and agree to the &nbsp;
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('termsofservices');
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#8645FF',
                    textDecorationLine: 'underline',
                  }}>
                  Terms of Services
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Button title={'Get Started'} onClick={() => {}} />
          <OrLogin />
          <GoogleBtn />

          <DoNotHaveAccount
            text={'Already have an account?'}
            bntText={'Log in'}
            screen="login"
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
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
    marginVertical: 15,
    marginHorizontal: 25,
  },
  checkBoxContainer: {
    flexDirection: 'row',
  },
  forgotContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
