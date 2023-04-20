/* eslint-disable prettier/prettier */
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppStackScreens} from './stackNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Account/Dashboard';
import Group from '../screens/Account/GroupScreen/Group';
import Trip from '../screens/Account/TripScreen/Trip';
import Profile from '../screens/Account/ProfileScreen/Profile';
import Payout from '../screens/Account/PayoutScreen/Payout';
import GroupIcon from '../assets/svgs/tab-icons/groupIcon.svg';
import HomeIcon from '../assets/svgs/tab-icons/home-icon.svg';
import TripIcon from '../assets/svgs/tab-icons/trip.svg';
import PayoutIcon from '../assets/svgs/tab-icons/payout.svg';
import ProfileIcon from '../assets/svgs/tab-icons/profile.svg';
const AppBottomTabNabigator = createBottomTabNavigator();

function AppNavigator() {
  return (
    <AppBottomTabNabigator.Navigator
      screenOptions={({navigation: {navigate, goBack}, route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            if (focused) {
              return <HomeIcon width={23} height={23} />;
            } else {
              return <HomeIcon width={23} height={23} />;
            }
          } else if (route.name === 'Group') {
            if (focused) {
              return <GroupIcon width={23} height={23} />;
            } else {
              return <GroupIcon width={23} height={23} />;
            }
          } else if (route.name === 'Payout') {
            if (focused) {
              return <PayoutIcon width={23} height={23} />;
            } else {
              return <PayoutIcon width={23} height={23} />;
            }
          }
          else if (route.name === 'Trip') {
            if (focused) {
              return <TripIcon width={23} height={23} />;
            } else {
              return <TripIcon width={23} height={23} />;
            }
          }
          else {
            if (focused) {
              return <ProfileIcon width={23} height={23} />;
            } else {
              return <ProfileIcon width={23} height={23} />;
            }
          }
        },

        headerShown: false,
        gestureEnabled: false,
        tabBarActiveTintColor: '#00214E',
        tabBarInactiveTintColor: '#CCCCCC',
        tabBarAllowFontScaling: true,
        tabBarLabelStyle: {marginBottom: 5, fontSize: 14},
        tabBarIconStyle: {marginTop: 5},
        tabBarStyle: {
          shadowColor: 'rgba(58,55,55,0.1)',
          shadowOffset: {width: 10, height: 10},
          shadowOpacity: 1,
          shadowRadius: 15,
          elevation: 3,
          borderTopColor: 'transparent',
          backgroundColor: '#fff',
          height: 65,
        },
      })}>
      {/* {AppStackScreens.map((item, index) => (
        <AppBottomTabNabigator.Screen name={item.name} component={item.screen} key={index} />
      ))} */}
          <AppBottomTabNabigator.Screen name="Home" component={Dashboard} />
          <AppBottomTabNabigator.Screen name="Group" component={Group} />
          <AppBottomTabNabigator.Screen name="Payout" component={Payout} />
          <AppBottomTabNabigator.Screen name="Trip" component={Trip} />
          <AppBottomTabNabigator.Screen name="Profile" component={Profile} />

    </AppBottomTabNabigator.Navigator>
  );
}

export default AppNavigator;


