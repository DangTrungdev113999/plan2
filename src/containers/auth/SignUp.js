/* eslint-disable no-catch-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Keyboard, ScrollView, Alert} from 'react-native';
import {Body, Input, Button, Text} from '~/components';

import {isPhone, showAlert} from '~/utils';

import {getFirabasePhoneAuthVerificCode} from '~/modules/auth/apis';
import theme from '~/config/theme';

const Login = ({navigation}) => {
  const [error, setError] = useState({
    phoneNumber: '',
  });
  const [phoneNumber, setPhoneNumber] = useState('+84321234567');
  const [loading, setLoading] = useState(false);

  async function onSignUp() {
    Keyboard.dismiss();
    setLoading(true);
    try {
      const confirmation = await getFirabasePhoneAuthVerificCode(phoneNumber);
      console.log('getFirabasePhoneAuthVerificCode response', confirmation);
      if (confirmation) {
        navigation.navigate('vertification_screen', {
          confirmation,
        });
      }
    } catch (e) {
      console.log('getFirabasePhoneAuthVerificCode error', e);
      showAlert(e);
    }
    setLoading(false);
  }

  const onCheckPhone = () => {
    if (!isPhone(phoneNumber)) {
      return setError({...error, phoneNumber: 'Nhập lại số điện thoại'});
    }
    setError({...error, phoneNumber: ''});
  };

  const buttonIsValid = () => {
    return isPhone(phoneNumber);
  };

  const inputStyle = {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: error ? 1 : StyleSheet.hairlineWidth,
  };

  const hasError = {
    borderBottomColor: theme.colors.accent,
    borderBottomWidth: 1,
  };

  return (
    <Body flex={1} keybordAvoid overlay loading={loading} p="20px">
      <ScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled">
        <Text m="0 0 40px" h1 bold>
          Sign up
        </Text>
        <Input
          label="Số điện thoại"
          iconLeft={{
            name: 'phone',
            type: 'antDesign',
            size: 18,
          }}
          style={[{...inputStyle}, error.phoneNumber && {...hasError}]}
          placeholder="Số điện thoại"
          keyboardType="number-pad"
          selectTextOnFocus
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          onBlur={onCheckPhone}
          error={error.phoneNumber}
          autoFocus
        />

        <Button
          shadow
          round
          h={50}
          m="10px 0 10px"
          gradient
          center
          middle
          onPress={onSignUp}
          disabled={!buttonIsValid()}>
          <Text bold color="white">
            Sign up
          </Text>
        </Button>
      </ScrollView>
    </Body>
  );
};

export default Login;
