export const fetchProfile = ({token}) => {
  if (token) {
    return {
      username: 'react-ui-kit',
      location: 'Europe',
      email: 'contact@react-ui-kit.com',
      avatar: require('@assets/images/avatar.png'),
      budget: 1000,
      monthly_cap: 5000,
      notifications: true,
      newsletter: false,
    };
  }
  throw 'error';
};
