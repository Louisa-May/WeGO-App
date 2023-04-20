/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackScreens} from './stackNavigator';
const AuthStack = createNativeStackNavigator();
function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={({navigation: {navigate, goBack}}) => ({
        headerShown: false,
        gestureEnabled: false,
      })}>
      {AuthStackScreens.map((item, index) => (
        <AuthStack.Screen name={item.name} component={item.screen} key={index} />
      ))}
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
