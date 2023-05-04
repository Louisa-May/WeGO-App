/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import {AuthStack, AppStack} from './stackNavigator';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();
// const AppMainStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={({navigation: {navigate, goBack}}) => ({
//         headerShown: false,
//         gestureEnabled: false,
//       })}>
//       {AppStack.map((item, index) => (
//         <Stack.Screen name={item.name} component={item.screen} key={index} />
//       ))}
//     </Stack.Navigator>
//   );
// };
// const AuthMainStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={({navigation: {navigate, goBack}}) => ({
//         headerShown: false,
//         gestureEnabled: false,
//       })}>
//       {AuthStack.map((item, index) => (
//         <Stack.Screen name={item.name} component={item.screen} key={index} />
//       ))}
//     </Stack.Navigator>
//   );
// };
// const root = [
//   {
//     name: 'AuthStack',
//     component: AuthMainStack,
//     options: {headerShown: false},
//   },
//   {
//     name: 'AppStack',
//     component: AppMainStack,
//     options: {headerShown: false},
//   },
// ];

// const MainStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={({navigation: {navigate, goBack}}) => ({
//           headerShown: false,
//           gestureEnabled: false,
//         })}
//         initialRouteName="WelcomeStack">
//         {root.map((item, index) => (
//           <Stack.Screen
//             name={item.name}
//             component={item.component}
//             key={index}
//           />
//         ))}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default MainStack;

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import AuthNavigator from './auth-navigation';
import AppNavigator from './app-navigation'


 const Navigation = () => {
  const isAuthenticated = useSelector(
    (state) => state.user.isAunthenticated,
  );

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
  );
};

export default Navigation

