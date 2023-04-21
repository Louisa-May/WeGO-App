/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Payout from '../screens/Account/PayoutScreen/Payout';

const PayoutStackNavigator = createNativeStackNavigator();

function PayoutNavigation() {
  return (
    <PayoutStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyleInterpolator:
        //   CardStyleInterpolators.forRevealFromBottomAndroid,
      }}>
      <PayoutStackNavigator.Screen name="PayoutStackNavigator" component={Payout} />
    </PayoutStackNavigator.Navigator>
  );
}

export default PayoutNavigation;

/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
