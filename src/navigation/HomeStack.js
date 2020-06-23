import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BrowseScreen from '~/screens/Browse';
import ExploreScreen from '~/screens/Explore';
import ProductScreen from '~/screens/Product';
import SettingsScreen from '~/screens/Settings';

import {navigationOptionCommon} from './navigationOption';
import {Block} from '~/components';
import DrawerIcon from '~/components/header/DrawerIcon';
import LeftIcon from '~/components/header/LeftIcon';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{...navigationOptionCommon}}>
    <Stack.Screen
      name="browse_screen"
      component={BrowseScreen}
      options={({navigation}) => ({
        title: '',
        headerRight: () => <Block />,
        // headerLeft: () => <DrawerIcon navigation={navigation} />,
        headerLeft: () => <Block />,
      })}
    />
    <Stack.Screen
      name="explore_screen"
      component={ExploreScreen}
      options={({navigation}) => ({
        title: '',
        headerRight: () => <Block />,
        headerLeft: () => <LeftIcon navigation={navigation} />,
      })}
    />
    <Stack.Screen
      name="product_screen"
      component={ProductScreen}
      options={({navigation}) => ({
        title: '',
        headerRight: () => <Block />,
        headerLeft: () => <LeftIcon navigation={navigation} />,
      })}
    />
    <Stack.Screen
      name="settings_screen"
      component={SettingsScreen}
      options={({navigation}) => ({
        title: '',
        headerRight: () => <Block />,
        headerLeft: () => <LeftIcon navigation={navigation} />,
      })}
    />
  </Stack.Navigator>
);

export default HomeStack;
