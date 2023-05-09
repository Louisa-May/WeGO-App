/* eslint-disable prettier/prettier */
import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '../../constants/colors';
import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
export default function SplashScreen({navigation}) {
  const [mainSplash, setMainSplash] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setMainSplash(true);
    }, 3000);
    // console.log(mainSplash);
    if (mainSplash) {
      navigation.navigate('Login');
    }
  }, [mainSplash]);
  const handleClick = () => {
    console.log('gooo');
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

      {/* Logo Section */}
      <View style={styles.flex}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoCover}
        />
      </View>

      {/* Circle Section */}
      <View style={styles.greenCircle}></View>
      <View style={styles.orangeCircle}></View>

      {/* Background Image */}
      <View style={styles.flex}>
        <Image
          source={require('../../assets/images/background.png')}
          style={styles.backgroundImage}
        />
      </View>

      {/* Go botton */}
      <TouchableOpacity onPress={()=> handleClick()}>
        <View style={styles.border}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>GO</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
