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
    return true;
  }
  throw 'Email hoặc mật khẩu không chính xác';
}

export function logout({token}) {
  if (token) {
    return '';
  }
  throw 'Đăng xuất không thành công';
}

export function signUp({token}) {
  if (token.length) {
    return token;
  }

  throw 'Đăng ký không thành công';
}
