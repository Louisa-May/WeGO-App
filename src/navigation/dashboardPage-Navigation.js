/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
// import AuthNavigator from './auth-navigation';
// import AppNavigator from './app-navigation';
import Dashboard from '../screens/Account/Dashboard';
import AdminScreen from '../screens/Account/AdminInterface/adminScreen';

const DashboardPageNavigation = () => {
  const user= useSelector(state => state.user.user);

  return <>{user.role === 'user' ? <Dashboard /> : <AdminScreen />}</>;
};

export default DashboardPageNavigation;
