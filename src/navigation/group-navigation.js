/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Group from '../screens/Account/GroupScreen/Group';
import CreateGroup from '../screens/Account/CreateGroupScreen/CreateGroup';
import CompleteGroup from '../screens/Account/CompleteGroup/CompleteGroup';
import GroupDetails from '../screens/Account/GroupDetailsScreen/GroupDetails';

const GroupStackNavigator = createNativeStackNavigator();

function GroupNavigation() {
  return (
    <GroupStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyleInterpolator:
        //   CardStyleInterpolators.forRevealFromBottomAndroid,
      }}>
      <GroupStackNavigator.Screen name="GroupStackNavigator" component={Group} />
      <GroupStackNavigator.Screen name="CreateGroup" component={CreateGroup} />
      <GroupStackNavigator.Screen name="CompleteGroup" component={CompleteGroup} />
      <GroupStackNavigator.Screen name="GroupDetails" component={GroupDetails} />
    </GroupStackNavigator.Navigator>
  );
}

export default GroupNavigation;

/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
