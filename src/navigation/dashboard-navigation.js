/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Account/Dashboard';

const DasboardNavigator = createNativeStackNavigator();

function DasboardNavigation() {
  return (
    <DasboardNavigator.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyleInterpolator:
        //   CardStyleInterpolators.forRevealFromBottomAndroid,
      }}>
      <DasboardNavigator.Screen name="DasboardNavigator" component={Dashboard} />
    </DasboardNavigator.Navigator>
  );
}

export default DasboardNavigation;

/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
