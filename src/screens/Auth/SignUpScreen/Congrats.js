import {View, StatusBar, SafeAreaView, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import CustomButton from '../../../components/customButton';
export default function Congrats({navigation}) {
  const onLoginPressed = () => {
    navigation.navigate('Login');
  };
  const handleClick = () => {
    navigation.navigate('AppStack');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

      {/* Circle Section */}
      <View style={styles.greenCircle} />
      <View style={styles.orangeCircle} />

      {/* Congrats Image */}
      <View style={styles.flex}>
        <View style={styles.congratsCover}>
          <Image
            source={require('../../../assets/images/congrats.png')}
            style={styles.congratsImage}
          />
        </View>

        {/* Congrats Text */}
        <View style={styles.congratsTextCover}>
          <Text style={styles.congratsText}>Congratulations</Text>
        </View>

        {/* Login Button Section */}
        <View style={styles.getStartedButton}>
          <CustomButton text="Get Started" onPress={handleClick} />
        </View>
      </View>
    </SafeAreaView>
  );
}
