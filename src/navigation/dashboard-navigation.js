/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardPageNavigation from './dashboardPage-Navigation';
import Group from '../screens/Account/GroupScreen/Group';
import Trip from '../screens/Account/TripScreen/Trip';
import CreateTripForm from '../screens/Account/create-trip-form/create-trip-form';
import ApprovePaymentsScreen from '../screens/Account/ApprovePayments/approve-payment';
import ViewUsers from '../screens/Account/ApprovePayments/ViewUsers';
import PaymentsApprovalFinal from '../screens/Account/PaymentsApprovalFinal/paymentsApprovalFinal';
import TripDetails from '../screens/Account/GroupDetailsScreen/tripDetail';
import GroupDetails from '../screens/Account/GroupDetailsScreen/GroupDetails';

const DasboardNavigator = createNativeStackNavigator();

function DasboardNavigation() {
  return (
    <DasboardNavigator.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyleInterpolator:
        //   CardStyleInterpolators.forRevealFromBottomAndroid,
      }}>
      <DasboardNavigator.Screen name="DasboardNavigator" component={DashboardPageNavigation} />
      <DasboardNavigator.Screen name="groups" component={Group} />
      <DasboardNavigator.Screen name="Trips" component={Trip} />
      <DasboardNavigator.Screen name="createTripForm" component={CreateTripForm} />
      <DasboardNavigator.Screen name="users" component={ViewUsers} />
      <DasboardNavigator.Screen name="GroupDetails" component={GroupDetails} />
      <DasboardNavigator.Screen name="approvePayments" component={ApprovePaymentsScreen} />
      <DasboardNavigator.Screen name="tripDetails" component={TripDetails} />
      <DasboardNavigator.Screen name="paymentDetailsApproval" component={PaymentsApprovalFinal} />
      
    </DasboardNavigator.Navigator>
  );
}

export default DasboardNavigation;

/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
