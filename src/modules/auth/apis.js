import auth from '@react-native-firebase/auth';

export function getFirabasePhoneAuthVerificCode(phoneNumber) {
  console.log('getFirebasePhoneAuthVerificationCode', phoneNumber);
  return auth().signInWithPhoneNumber(phoneNumber);
}

export function comfirmFirabasePhoneAuthToGetToken(
  confirmResult,
  vertificationCode,
) {
  console.log('comfirmFirabasePhoneAuthToGetToken', vertificationCode);
  return confirmResult.confirm(vertificationCode);
}

export function getFirabaseIdToken() {
  return auth().currentUser.getIdTokenResult();
}

export function login({email, password}) {
  if (email === 'phieuyet@gmail.com' && password === '123456') {
    return '1234';
  }
  throw 'Email hoặc mật khẩu không chính xác';
}

export function logout({token}) {
  if (token) {
    return '';
  }
  throw 'Đăng xuất không thành công';
}

export function signUp({idToken}) {
  if (idToken.length) {
    return 'this is token from server';
  }

  throw 'Đăng ký không thành công';
}

export function setPassword({token, password}) {
  if (token.length && password.length === 6) {
    return true;
  }

  throw 'Đặt mật khẩu không thành công';
}
