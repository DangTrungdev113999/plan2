/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {StyleSheet, Keyboard, ScrollView} from 'react-native';
import {Body, Input, Button, Text} from '~/components';

import {signUp} from '~/modules/auth/action';

import {
  comfirmFirabasePhoneAuthToGetToken,
  getFirabaseIdToken,
} from '~/modules/auth/apis';
import theme from '~/config/theme';
import {useDispatch} from 'react-redux';

const Verification = ({navigation, route}) => {
  const [error, setError] = useState({
    code: '',
  });
  const [code, setCode] = useState('123456');
  const [loading, setLoading] = useState(false);
  const dispath = useDispatch();

  async function onConfirmCode() {
    Keyboard.dismiss();
    setLoading(true);
    try {
      const response = await comfirmFirabasePhoneAuthToGetToken(
        route.params.confirmation,
        code,
      );
      if (!response) {
        throw new Error('Lỗi kết nối hệ thống. Vui lòng thử lại.');
      }

      handleToken();
    } catch {
      console.log('Invalid code.', error);
    }
  }

  async function handleToken() {
    try {
      const idTokenResult = await getFirabaseIdToken();
      if (!idTokenResult.token) {
        throw new Error('Lỗi kết nối hệ thống. Vui lòng thử lại.');
      }
      dispath(
        signUp({
          token: idTokenResult.token,
          onSuccess: () =>
            // navigation.replace('set_password_stack', {
            //   screen: 'set_password_screen',
            //   params: {fromScreen: 'sign_up'},
            // }),
            console.log('thanh cong'),
          onError: (e) => {
            // alert.alert('Đăng ký không thành công', e.message);
            // navigation.goBack(null);
            console.log('that bai');
          },
        }),
      );
    } catch {
      console.log('handleToken error', error);
    }
    setLoading(false);
  }

  const onCheckCode = () => {
    if (code.length < 6) {
      return setError({...error, code: 'Vui lòng nhập mã code'});
    }
    setError({...error, code: ''});
  };

  const formIsValid = () => {
    return code.length === 6;
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
            name: 'codesquareo',
            type: 'antDesign',
            size: 18,
          }}
          style={[{...inputStyle}, error.email && {...hasError}]}
          placeholder="Code"
          keyboardType="number-pad"
          selectTextOnFocus
          value={code}
          onChangeText={setCode}
          onBlur={onCheckCode}
          error={error.code}
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
          onPress={onConfirmCode}
          disabled={!formIsValid()}>
          <Text bold color="white">
            Next
          </Text>
        </Button>
      </ScrollView>
    </Body>
  );
};

export default Verification;
