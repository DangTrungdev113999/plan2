import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="auth_stack" headerMode="none">
          <Stack.Screen name="auth_stack" component={AuthStack} />
          <Stack.Screen name="home_stack" component={HomeStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
