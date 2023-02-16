import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import GoBackBtn from '../components/GoBackBtn';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
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
              marginTop: 30,
            }}>
            <Text style={styles.labelText}>Forgot Password?</Text>
            <Text style={styles.subLabel}>
              Enter the email Address associated with your account.
            </Text>
          </View>
          <View style={styles.formContainer}>
            <FormInput
              label={'Email Address'}
              onChange={text => {
                setEmail(text);
              }}
              keyboardType="email-address"
              isSecure={false}
            />
            <Button
              title={'Send Code'}
              onClick={() => {
                navigation.navigate('NewPassword');
              }}
            />
            <TouchableOpacity
              style={{
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#6534BF',
                  fontWeight: '500',
                  fontSize: 14,
                }}>
                Resend Code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 15,
  },
  container: {
    marginTop: 30,
    marginHorizontal: 15,
  },
  labelText: {
    fontSize: 22,
    fontWeight: '600',
  },
  subLabel: {
    marginTop: 10,
    fontSize: 14,
    color: 'rgba(26, 41, 61, 0.83)',
  },
});
