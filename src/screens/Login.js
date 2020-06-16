/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {Body, Input, Button, Text} from '~/components';
import {StyleSheet, Keyboard, ScrollView} from 'react-native';
import {isEmail, isPassword} from '~/utils';
import theme from '~/config/theme';

const Login = ({navigation}) => {
  const [error, setError] = useState({
    email: '',
    password: '',
  });
  const [email, setEmail] = useState('phieuyet@gmail.com');
  const [password, setPassword] = useState();
  const inputRef = useRef(null);

  const onCheckEmail = () => {
    if (!isEmail(email)) {
      return setError({...error, email: 'Sai định dạng email'});
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
    if (pass.length === 6 && isPassword(password)) {
      setError({...error, password: 'Sai định dạng password'});
    } else {
      setError({...error, password: ''});
    }
    setPassword(pass);
  };

  const onlogin = () => {
    Keyboard.dismiss();
    navigation.navigate('welcome_screen');
  };

  const formIsValid = () => {
    return isEmail(email) && isPassword(password);
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
          onChangeText={setEmail}
          onBlur={onCheckEmail}
          onSubmitEditing={() => inputRef.current.focus()}
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
          onChangeText={onPassword}
          onBlur={onCheckPassword}
          ref={inputRef}
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
            Login
          </Text>
        </Button>

        <Text>
          {isPassword(password) ? 'tr' : 'fa'} {password && password.length}
        </Text>

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
