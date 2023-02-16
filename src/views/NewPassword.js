import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import GoBackBtn from '../components/GoBackBtn';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

const NewPassword = ({navigation}) => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [CPassword, setCPassword] = useState('');
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
            <Text style={styles.labelText}>Create New Password</Text>
            <Text style={styles.subLabel}>
              Reset code was sent to your mail. Please enter the code & create
              new password.
            </Text>
          </View>
          <View style={styles.formContainer}>
            <FormInput
              label={'Reset Code*'}
              onChange={text => {
                setCode(text);
              }}
              keyboardType="number-pad"
              isSecure={false}
              value={code}
            />
            <FormInput
              label={'Password*'}
              onChange={text => {
                setPassword(text);
              }}
              keyboardType="default"
              isSecure={true}
              value={password}
            />
            <FormInput
              label={'Confirm Password*'}
              onChange={text => {
                setCPassword(text);
              }}
              keyboardType="default"
              isSecure={true}
              value={CPassword}
            />
            <Button
              title={'Reset Password'}
              onClick={() => {
                navigation.navigate('passwordChanged');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPassword;

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
    marginTop: 10,
    fontSize: 14,
    color: 'rgba(26, 41, 61, 0.83)',
  },
  formContainer: {
    marginVertical: 15,
  },
});
