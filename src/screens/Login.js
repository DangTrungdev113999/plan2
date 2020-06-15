/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Body, Input, Button, Text} from '~/components';
import {StyleSheet, Keyboard, ScrollView} from 'react-native';
import theme from '~/config/theme';
const Login = ({navigation}) => {
  const [error, setError] = useState({
    email: '',
    password: '',
  });
  const [email, setEmail] = useState('phieuyet@gmail.com');
  const [password, setPassword] = useState('123456');

  const onCheckEmail = () => {
    const regxEmail = new RegExp(
      '^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$',
    );
    if (!regxEmail.test(email)) {
      return setError({...error, email: 'Sai định dạng email'});
    }
    setError({...error, email: ''});
  };

  const onCheckPassword = () => {
    const regxPassword = new RegExp('^\\d{6}$', 'g');
    if (!regxPassword.test(password)) {
      return setError({...error, password: 'Sai định dạng password'});
    }
    setError({...error, password: ''});
  };

  const onlogin = () => {
    Keyboard.dismiss();
    navigation.navigate('welcome_screen');
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
    <Body flex={1} keybordAvoid p="20px">
      <ScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled">
        <Text m="0 0 40px" h1 bold>
          Login
        </Text>
        <Input
          label="Email"
          iconLeft={{
            name: 'user',
            type: 'antDesign',
            size: 18,
          }}
          style={[{...inputStyle}, error.email && {...hasError}]}
          placeholder="Email"
          keyboardType="email-address"
          selectTextOnFocus
          value={email}
          onChangeText={(text) => setEmail(text)}
          onBlur={onCheckEmail}
          error={error.email}
          autoFocus
        />
        <Input
          label="Password"
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
          onChangeText={(text) => setPassword(text)}
          onBlur={onCheckPassword}
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
          disabled={!!error.email.length || !!error.password.length}>
          <Text bold color="white">
            Login
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
