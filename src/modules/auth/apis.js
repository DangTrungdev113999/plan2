export function login({email, password}) {
  if (email === 'phieuyet@gmail.com' && password === '123456') {
    return true;
  }
  throw 'Email hoặc mật khẩu không chính xác';
}