/* eslint-disable prettier/prettier */
import SplashScreen from '../screens/Splash/SplashScreen';
import SwipeUp from '../screens/Auth/LoginScreen/SwipeUp';
import Login from '../screens/Auth/LoginScreen/Login';
import SignUp from '../screens/Auth/SignUpScreen/SignUp';
import Congrats from '../screens/Auth/SignUpScreen/Congrats';
import Dashboard from '../screens/Account/Dashboard';
import Group from '../screens/Account/GroupScreen/Group';
import CreateGroup from '../screens/Account/CreateGroupScreen/CreateGroup';
import CompleteGroup from '../screens/Account/CompleteGroup/CompleteGroup';
import GroupDetails from '../screens/Account/GroupDetailsScreen/GroupDetails';
import Payout from '../screens/Account/PayoutScreen/Payout';
import Trip from '../screens/Account/TripScreen/Trip';
import Profile from '../screens/Account/ProfileScreen/Profile';
import ProfileDetails from '../screens/Account/ProfileDetailsScreen/ProfileDetails';

export const AuthStackScreens = [
  {
    screen: SplashScreen,
    name: 'SplashScreen',
  },
  {
    screen: SwipeUp,
    name: 'SwipeUp',
  },
  {
    screen: Login,
    name: 'Login',
  },
  {
    screen: SignUp,
    name: 'SignUp',
  },
  {
    screen: Congrats,
    name: 'Congrats',
  },
];

export const AppStackScreens = [
  {
    screen: Dashboard,
    name: 'Dashboard',
  },
  {
    screen: Group,
    name: 'Group',
  },
  {
    screen: CreateGroup,
    name: 'CreateGroup',
  },
  {
    screen: CompleteGroup,
    name: 'CompleteGroup',
  },
  {
    screen: GroupDetails,
    name: 'GroupDetails',
  },
  {
    screen: Payout,
    name: 'Payout',
  },
  {
    screen: Trip,
    name: 'Trip',
  },
  {
    screen: Profile,
    name: 'Profile',
  },
  {
    screen: ProfileDetails,
    name: 'ProfileDetails',
  },
];
