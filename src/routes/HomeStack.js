import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BrowseScreen from '~/containers/Browse';
import ExploreScreen from '~/containers/Explore';
import ProductScreen from '~/containers/Product';
import SettingsScreen from '~/containers/Settings';

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
