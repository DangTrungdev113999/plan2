import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '~/containers/auth/Welcome';
import LoginScreen from '~/containers/auth/Login';
import SignUpScreen from '~/containers/auth/SignUp';
import ForgotScreen from '~/containers/auth/Forgot';
import Verification from '~/containers/auth/Verification';

import {Block} from '~/components';
import LeftIcon from '~/components/header/LeftIcon';

import {navigationOptionCommon} from './navigationOption';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="welcome_screen"
    screenOptions={{...navigationOptionCommon}}
    headerTransparent
    cardShadowEnabled={false}>
    <Stack.Screen
      name="welcome_screen"
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="login_screen"
      component={LoginScreen}
      options={({navigation}) => ({
        title: '',
        headerRight: () => <Block />,
        headerLeft: () => <LeftIcon navigation={navigation} />,
        cardShadowEnabled: false,
      })}
    />
    <Stack.Screen
      name="signUp_screen"
      component={SignUpScreen}
      options={({navigation}) => ({
        title: '',
        headerRight: () => <Block />,
        headerLeft: () => <LeftIcon navigation={navigation} />,
      })}
    />
    <Stack.Screen name="forgot_screen" component={ForgotScreen} />
    <Stack.Screen
      name="vertification_screen"
      component={Verification}
      options={{
        title: 'Nhập mã xác thực',
      }}
    />
  </Stack.Navigator>
);

export default AuthStack;
