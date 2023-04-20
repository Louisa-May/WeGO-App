/* eslint-disable prettier/prettier */
import {AuthStack, AppStack} from './stackNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const AppMainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation: {navigate, goBack}}) => ({
        headerShown: false,
        gestureEnabled: false,
      })}>
      {AppStack.map((item, index) => (
        <Stack.Screen name={item.name} component={item.screen} key={index} />
      ))}
    </Stack.Navigator>
  );
};
const AuthMainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation: {navigate, goBack}}) => ({
        headerShown: false,
        gestureEnabled: false,
      })}>
      {AuthStack.map((item, index) => (
        <Stack.Screen name={item.name} component={item.screen} key={index} />
      ))}
    </Stack.Navigator>
  );
};
const root = [
  {
    name: 'AuthStack',
    component: AuthMainStack,
    options: {headerShown: false},
  },
  {
    name: 'AppStack',
    component: AppMainStack,
    options: {headerShown: false},
  },
];

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation: {navigate, goBack}}) => ({
          headerShown: false,
          gestureEnabled: false,
        })}
        initialRouteName="WelcomeStack">
        {root.map((item, index) => (
          <Stack.Screen
            name={item.name}
            component={item.component}
            key={index}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
