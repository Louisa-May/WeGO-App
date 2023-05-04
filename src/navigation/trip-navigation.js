/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Group from '../screens/Account/GroupScreen/Group';
import Trip from '../screens/Account/TripScreen/Trip';
import TripPayment from '../screens/Account/tripPayment/tripPaymentForm';
import TripDetails from '../screens/Account/GroupDetailsScreen/tripDetail';

const TripStackNavigator = createNativeStackNavigator();

function TripNavigation() {
  return (
    <TripStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyleInterpolator:
        //   CardStyleInterpolators.forRevealFromBottomAndroid,
      }}>
      <TripStackNavigator.Screen name="TripStackNavigator" component={Trip} />
      <TripStackNavigator.Screen name='chooseTrip' component={TripPayment} />
      <TripStackNavigator.Screen name='tripDetails' component={TripDetails} />
    </TripStackNavigator.Navigator>
  );
}

export default TripNavigation;

/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
