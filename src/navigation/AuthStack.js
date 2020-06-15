import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '~/screens/Welcome';
import LoginScreen from '~/screens/Login';
import SignUpScreen from '~/screens/SignUp';
import ForgotScreen from '~/screens/Forgot';

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
      options={({route, navigation}) => ({
        title: '',
        headerRight: () => <Block />,
        headerLeft: () => <LeftIcon navigation={navigation} />,
        cardShadowEnabled: false,
      })}
    />
    <Stack.Screen
      name="signUp_screen"
      component={SignUpScreen}
      options={({route, navigation}) => ({
        title: '',
        headerRight: () => <Block />,
        headerLeft: () => <LeftIcon navigation={navigation} />,
      })}
    />
    <Stack.Screen name="forgot_screen" component={ForgotScreen} />
  </Stack.Navigator>
);

export default AuthStack;
