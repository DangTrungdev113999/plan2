import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingsScreen from '~/containers/auth/SetPassword';

import {navigationOptionCommon} from './navigationOption';
import {Block} from '~/components';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{...navigationOptionCommon}}>
    <Stack.Screen
      name="set_password_screen"
      component={SettingsScreen}
      options={{
        title: '',
        headerRight: () => <Block />,
        headerLeft: () => <Block />,
      }}
    />
  </Stack.Navigator>
);

export default HomeStack;
