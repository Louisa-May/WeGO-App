/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Group from '../screens/Account/GroupScreen/Group';
import Profile from '../screens/Account/ProfileScreen/Profile';
import ProfileDetails from '../screens/Account/ProfileDetailsScreen/ProfileDetails';

const ProfileStackNavigator = createNativeStackNavigator();

function ProfileNavigation() {
  return (
    <ProfileStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyleInterpolator:
        //   CardStyleInterpolators.forRevealFromBottomAndroid,
      }}>
      <ProfileStackNavigator.Screen name="ProfileMain" component={Profile} />
      <ProfileStackNavigator.Screen name="ProfileDetails" component={ProfileDetails} />

    </ProfileStackNavigator.Navigator>
  );
}

export default ProfileNavigation;

/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
