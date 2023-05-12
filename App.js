/* eslint-disable prettier/prettier */
import React from 'react';
import {persistor, store} from './redux-store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Navigation from './src/navigation';
import { ToastProvider } from 'react-native-toast-notifications';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ArrowForwardIcon from './src/assets/svgs/icons/arrow-forward-svgrepo-com.svg';
import CheckMarkIcon from './src/assets/svgs/icons/icons8-checkmark (1).svg';
import { colors } from './src/constants/colors';
import { useSelector } from 'react-redux';

const slides = [
  {
    key: 1,
    title: "Let's tour the World",
    text: 'We are redefining travel for  Africans',
    image: require('./src/assets/images/slide1.png'),
    backgroundColor: 'white',
  },
  {
    key: 2,
    title: 'View Trips and Pay',
    text: 'Lets see the world together the african way',
    image: require('./src/assets/images/slide2.png'),
    backgroundColor: 'white',
  },
];
export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);
  // const isAuthenticated = useSelector(
  //   (state) => state.user.isAunthenticated,
  // );
  const _renderItem = ({ item }) => {
    return (
        <View style={styles.slide}>
          <Text style={styles.title}>{item.title}</Text>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
        // <StatusBar />
    );
  };
  const  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowRealApp(true);
  };

 const  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <ArrowForwardIcon width={40} height={40} />
      </View>
    );
  };
 const  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <CheckMarkIcon width={40} height={40} />
      </View>
    );
  };
  if (showRealApp) {
    return (
          <Provider store={store}>
            <ToastProvider>
              <PersistGate loading={null} persistor={persistor}>
                  <Navigation />
              </PersistGate>
            </ToastProvider>
          </Provider>
    );
  }
  else {
    return <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} renderDoneButton={_renderDoneButton}  renderNextButton={_renderNextButton}/>;
  }

}

const styles = StyleSheet.create({
  screen : {
   paddingTop: 20,
   flex:1,
   justifyContent: 'flex-start',
   alignItems: 'center',
   width: '100%',
  },
  slide:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 100,
    height:100,
    width:'100%',
  },
  title: {
    padding: 10,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.green,
  },
  text:{
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    paddingVertical: 30,
    fontWeight: 'bold',
  },
  image:{
    width: '90%',
    height: 400,
    resizeMode: 'contain',
  },
  buttonCircle: {
    height:50,
    width:50,
    borderRadius:50,
    // borderColor:'gray'
    backgroundColor: 'rgba(0, 0, 0, .2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
