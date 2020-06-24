/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {StyleSheet, Keyboard, ScrollView} from 'react-native';
import {Body, Input, Button, Text} from '~/components';
import {isEmail, isPassword} from '~/utils';
import theme from '~/config/theme';

const Login = ({navigation}) => {
  const [error, setError] = useState({
    phoneNumber: '',
    password: '',
    passwordAgain: '',
  });
  const [phoneNumber, setPhoneNumber] = useState('0328579282');
  const [password, setPassword] = useState();
  const [passwordAgain, setPasswordAgain] = useState();
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef(null);
  const passwordAgainRef = useRef(null);

  const onCheckPhone = () => {
    if (!isEmail(phoneNumber)) {
      return setError({...error, email: 'Nhập lại số điện thoại'});
    }
    setError({...error, email: ''});
  };

  const onCheckPassword = () => {
    if (!isPassword(password)) {
      return setError({...error, password: 'Sai định dạng password'});
    }
    setError({...error, password: ''});
  };

  const onPassword = (pass) => {
    if (pass.length === 6 && !isPassword(pass)) {
      setError({...error, password: 'Sai định dạng password'});
    } else {
      setError({...error, password: ''});
    }
    setPassword(pass);
  };

  const onlogin = () => {
    setLoading(true);
    Keyboard.dismiss();
    if (phoneNumber === 'phieuyet@gmail.com' && password === '123456') {
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('welcome_screen');
      }, 1000);
    }
  };

  const formIsValid = () => {
    return isEmail(phoneNumber) && isPassword(password);
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
          style={[{...inputStyle}, error.email && {...hasError}]}
          placeholder="Số điện thoại"
          keyboardType="number-pad"
          selectTextOnFocus
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          onBlur={onCheckPhone}
          onSubmitEditing={() => passwordRef.current.focus()}
          error={error.email}
          autoFocus
        />
        <Input
          label="Mật khẩu"
          iconLeft={{
            name: 'key',
            type: 'antDesign',
            size: 18,
          }}
          style={[{...inputStyle}, error.password && {...hasError}]}
          selectTextOnFocus
          placeholder="Mật khẩu (gồm 6 chữ số)"
          keyboardType="number-pad"
          maxLength={6}
          value={password}
          onChangeText={onPassword}
          onBlur={onCheckPassword}
          onSubmitEditing={() => passwordRef.current.focus()}
          ref={passwordRef}
          isSecure
          error={error.password}
        />
        <Input
          label="NHập lại mật khẩu"
          iconLeft={{
            name: 'key',
            type: 'antDesign',
            size: 18,
          }}
          style={[{...inputStyle}, error.password && {...hasError}]}
          placeholder="Mật khẩu (gồm 6 chữ số)"
          selectTextOnFocus
          keyboardType="number-pad"
          maxLength={6}
          value={passwordAgain}
          onChangeText={setPasswordAgain}
          onBlur={onCheckPassword}
          ref={passwordAgainRef}
          isSecure
          error={error.password}
        />

        <Button
          shadow
          round
          h={50}
          m="10px 0 10px"
          gradient
          center
          middle
          onPress={onlogin}
          disabled={!formIsValid()}>
          <Text bold color="white">
            Sign up
          </Text>
        </Button>
        <Button
          center
          middle
          onPress={() => navigation.navigate('forgot_screen')}>
          <Text color="gray2">Forgot your password</Text>
        </Button>
      </ScrollView>
    </Body>
  );
};

export default Login;
