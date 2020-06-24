import {Platform, StatusBar} from 'react-native';

const navigationOptionCommon = {
  headerStyle: {
    height: 70,
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerBarStyle: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
  },
};

export {navigationOptionCommon};
