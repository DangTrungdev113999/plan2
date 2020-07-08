/* eslint-disable no-catch-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Keyboard, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Body, Button, Input, Text} from '~/components';
import theme from '~/config/theme';
import {signUp} from '~/modules/auth/action';
import {
  comfirmFirabasePhoneAuthToGetToken,
  getFirabaseIdToken,
} from '~/modules/auth/apis';
import {signUpLoadingSelector} from '~/modules/auth/selectors';
import {showAlert} from '~/utils';

const Verification = ({navigation, route}) => {
  const [error, setError] = useState({
    code: '',
  });
  const [code, setCode] = useState('123456');
  const [loading, setLoading] = useState(false);
  const signUpLoading = useSelector(signUpLoadingSelector);
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

      doAction();
    } catch (e) {
      console.log('Invalid code.', e);
    }
  }

  async function doAction() {
    try {
      const idTokenResult = await getFirabaseIdToken();
      if (!idTokenResult.token) {
        throw new Error('Lỗi kết nối hệ thống. Vui lòng thử lại.');
      }
      dispath(
        signUp({
          idToken: idTokenResult.token,
          onSuccess: () =>
            navigation.replace('set_password_stack', {
              screen: 'set_password_screen',
              params: {fromScreen: 'sign_up'},
            }),
          onError: (e) => {
            showAlert('Đăng ký không thành công', e);
            navigation.goBack(null);
          },
        }),
      );
    } catch (e) {
      console.log('handleToken error', e);
    }
    setLoading(false);
  }

  const onCheckCode = () => {
    if (code.length < 6) {
      return setError({...error, code: 'Vui lòng nhập mã code'});
    }
    setError({...error, code: ''});
  };

  const buttonIsValid = () => {
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
    <Body
      flex={1}
      keybordAvoid
      overlay
      loading={signUpLoading || loading}
      p="20px">
      <ScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled">
        <Input
          iconLeft={{
            name: 'codesquareo',
            type: 'antDesign',
            size: 18,
          }}
          style={[{...inputStyle}, error.code && {...hasError}]}
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
          disabled={!buttonIsValid()}>
          <Text bold color="white">
            Xác nhận
          </Text>
        </Button>
      </ScrollView>
    </Body>
  );
};

export default Verification;
