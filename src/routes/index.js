import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import {tokenSelector} from '~/modules/auth/selectors';

const Stack = createStackNavigator();

const Navigation = () => {
  const token = useSelector(tokenSelector);
  console.log({tokenNavigation: token});
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="auth_stack" headerMode="none">
          {!token ? (
            <Stack.Screen name="auth_stack" component={AuthStack} />
          ) : (
            <Stack.Screen name="home_stack" component={HomeStack} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
