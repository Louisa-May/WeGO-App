import {
  View,
  Image,
  StatusBar,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
export default function SwipeUp({navigation}) {
  // const handleClick = () => {
  //   navigation.navigate('Login');
  // };
  const onLoginPressed = () => {
    navigation.navigate('Login');
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

      {/* Logo Section */}
      <View style={styles.flex}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logoCover}
        />
      </View>
      {/* Circle Section */}
      <View style={styles.greenCircle} />
      <View style={styles.orangeCircle} />

      {/* Swipe Icon Section */}
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/Swipe.jpg')}
          style={styles.iconCover}
        />
        <Text style={styles.iconText}>Swipe up to login</Text>
      </View>

      {/* Buttons Section */}

      <View style={styles.clikableTextContainer}>
        <TouchableOpacity onPress={onLoginPressed}>
          <Text style={styles.clikableText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSignUpPressed}>
          <Text style={styles.clikableText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
