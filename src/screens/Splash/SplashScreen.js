/* eslint-disable prettier/prettier */
import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Animated,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '../../constants/colors';
import {LogBox} from 'react-native';
import {useEffect} from 'react';
import {useRef} from 'react';
import {useState} from 'react';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export function SplashScreen({children, isAppReady}) {
  return (
    <>
      {isAppReady && children}
      <Splash isAppReady={isAppReady} />
    </>
  );
}
const LOADING_IMAGE = 'Loading image';
const FADE_IN_IMAGE = 'Fade in image';
const WAIT_FOR_APP_TO_BE_READY = 'Wait for app to be ready';
const FADE_OUT = 'Fade out';
const HIDDEN = 'Hidden';

// const [mainSplash, setMainSplash] = React.useState(false);
// React.useEffect(() => {
//   setTimeout(() => {
//     setMainSplash(true);
//   }, 3000);
//   // console.log(mainSplash);
//   if (mainSplash) {
//     navigation.navigate('Login');
//   }
// }, [mainSplash]);

export const Splash = ({navigation, isAppReady}) => {
  const containerOpacity = useRef(new Animated.Value(1)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;

  // eslint-disable-next-line no-undef
  const [state, setState] = useState(LOADING_IMAGE);

  useEffect(() => {
    if (state === FADE_IN_IMAGE) {
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 5000, // Fade in duration
        useNativeDriver: true,
      }).start(() => {
        setState(WAIT_FOR_APP_TO_BE_READY);
      });
    }
  }, [imageOpacity, state]);

  useEffect(() => {
    if (state === WAIT_FOR_APP_TO_BE_READY) {
      if (isAppReady) {
        setState(FADE_OUT);
      }
    }
  }, [isAppReady, state]);

  useEffect(() => {
    if (state === FADE_OUT) {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 5000, // Fade out duration
        delay: 5000, // Minimum time the logo will stay visible
        useNativeDriver: true,
      }).start(() => {
        setState(HIDDEN);
      });
    }
  }, [containerOpacity, state]);
  // const handleClick = () => {
  //   console.log('gooo');
  //   navigation.navigate('Login');
  // };

  if (state === HIDDEN) {
    return null;
  }
  return (
    <Animated.View
      collapsable={false}
      style={[style.container, {opacity: containerOpacity}]}>
      <Animated.Image
        fadeDuration={0}
        source={require('../../assets/images/splashSreen.jpeg')}
        onLoad={() => {
          setState(FADE_IN_IMAGE);
        }}
        style={[style.image, {opacity: imageOpacity}]}
      />
      {/* <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" /> */}

      {/* Logo Section */}
      {/* <View style={styles.flex}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logoCover}
          />
        </View> */}

      {/* Circle Section */}
      {/* <View style={styles.greenCircle}></View>
        <View style={styles.orangeCircle}></View> */}

      {/* Background Image */}
      {/* <View style={styles.flex}>
          <Image
            source={require('../../assets/images/background.png')}
            style={styles.backgroundImage}
          />
        </View> */}

      {/* Go botton */}
      {/* <TouchableOpacity
        // onPress={()=> handleClick()}
        >
          <View style={styles.border}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>GO</Text>
            </View>
          </View>
        </TouchableOpacity> */}
      {/* </SafeAreaView> */}
      {/* </Animated.View> */}
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FEFEFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
