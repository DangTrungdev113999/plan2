/* eslint-disable no-catch-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Keyboard, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Body, Button, Input, Text} from '~/components';
import theme from '~/config/theme';
import {setPassword as setPass} from '~/modules/auth/action';
import {setPasswordLoadingSelector} from '~/modules/auth/selectors';
import {showAlert, isPassword} from '~/utils';

const SetPassword = ({navigation, route}) => {
  const [error, setError] = useState({
    password: '',
  });
  const [password, setPassword] = useState('123456');
  const loading = useSelector(setPasswordLoadingSelector);
  const dispath = useDispatch();

  function onSetPassword() {
    Keyboard.dismiss();
    dispath(
      setPass({
        password,
        onSuccess: () => navigation.replace('home_stack'),
        onError: (e) => showAlert('Đặt mật khẩu không thành công!', e.message),
      }),
    );
  }

  const onCheckCode = () => {
    if (!isPassword(password)) {
      return setError({...error, password: 'Sai địch dạng mật khẩu'});
    }
    setError({...error, password: ''});
  };

  const buttonIsValid = () => {
    return isPassword(password);
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
        <Input
          iconLeft={{
            name: 'key',
            type: 'antDesign',
            size: 18,
          }}
          label="Password"
          isSecure
          style={[{...inputStyle}, error.password && {...hasError}]}
          placeholder="Mật khẩu (gồm 6 chữ số)"
          keyboardType="number-pad"
          selectTextOnFocus
          value={password}
          onChangeText={setPassword}
          onBlur={onCheckCode}
          error={error.password}
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
          onPress={onSetPassword}
          disabled={!buttonIsValid()}>
          <Text bold color="white">
            Xác nhận
          </Text>
        </Button>
      </ScrollView>
    </Body>
  );
};

export default SetPassword;
