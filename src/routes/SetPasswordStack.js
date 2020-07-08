import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SetPasswordScreen from '~/containers/auth/SetPassword';

import {navigationOptionCommon} from './navigationOption';
import {Block} from '~/components';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{...navigationOptionCommon}}>
    <Stack.Screen
      name="set_password_screen"
      component={SetPasswordScreen}
      options={{
        title: 'Nhập mật khẩu',
        headerTitleAlign: 'center',
      }}
    />
  </Stack.Navigator>
);

export default HomeStack;
