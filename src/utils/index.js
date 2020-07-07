export const isEmail = (email) => {
  const regxEmail = new RegExp(
    '^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$',
  );

  return regxEmail.test(email);
};

export const isPassword = (password) => {
  const regxPassword = new RegExp('^\\d{6}$', 'g');

  return regxPassword.test(password);
};

export const isPhone = (phone) => {
  return true;
};
