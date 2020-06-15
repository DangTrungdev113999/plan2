import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BrowseScreen from '~/screens/Browse';
import ExploreScreen from '~/screens/Explore';
import ProductScreen from '~/screens/Product';
import SettingsScreen from '~/screens/Settings';

import {navigationOptionCommon} from './navigationOption';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{...navigationOptionCommon}}>
    <Stack.Screen name="browse_screen" component={BrowseScreen} />
    <Stack.Screen name="explore_screen" component={ExploreScreen} />
    <Stack.Screen name="product_screen" component={ProductScreen} />
    <Stack.Screen name="settings_screen" component={SettingsScreen} />
  </Stack.Navigator>
);

export default HomeStack;
