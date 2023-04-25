/* eslint-disable prettier/prettier */
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import CustomInput from '../../../components/customInput';
import CustomButton from '../../../components/customButton';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { setIsAunthenticated, setUser } from '../../../../redux-store/userAuth';
import database from '@react-native-firebase/database';
export default function Login({navigation}) {

  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState('');

  const dispatch = useDispatch()

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };
  const handleClick =  () => {
    console.log(Email, password);
    setIsloading(true);
    if (Email  === '' || password === '') {
      Alert.alert("Kindly input your email and password!");
      setIsloading(false);
      return;
    }
    auth()
    .signInWithEmailAndPassword(Email, password)
    .then(async() => {
     let usersRef = database().ref('users').orderByChild('email').equalTo(Email);
     usersRef.once('value', snapshot => {
      if (snapshot.exists()) {
        snapshot.forEach(userSnapshot => {
          if (userSnapshot.val().email === Email) {
            const user = userSnapshot.val();
        // const user = snapshot.val()
        console.log('user first name:', user);
        console.log('User account signed in!');
      dispatch(setUser(user))
      dispatch(setIsAunthenticated(true));
      setIsloading(false);
      }
      setIsloading(false);
    }
     )}})
  })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        setIsError("That email address is invalid!");
        setIsloading(false);
        return;
      }
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        setIsError("That email address is already in use!");
        setIsloading(false);
        return;
      }
      setIsError(error.code)
      console.error(error);
    });

}
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

      {/* Circle Section */}
      <View style={styles.greenCircle} />
      <View style={styles.orangeCircle} />
      <View style={styles.flex}>
      {/* Header Text */}
        <View style={styles.container}>
            <Text style={styles.headerText}>Login</Text>
            <Text style={styles.headerSubText}>Please sign in to continue</Text>
        </View>
        <View style={styles.form}>
        <CustomInput
          placeholder="Email"
          value={Email}
          onChangeText={(text) => setEmail(text)}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          textContentType="password"
          secure
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        {/* Login Button Section */}
        {isError  &&  (
            <Text style={{ textAlign: "center", fontSize:15, color:"red", fontWeight:"500" }}> {isError}</Text>
         )}
          { !isLoading ? (
             <View style={styles.button}>
             <CustomButton  text="Login" onPress={handleClick} />
           </View>
            ) : (
              <ActivityIndicator color="purple" animating={true} />
            )
        }
        </View>
         {/* Footer Text */}
      <View style={styles.footerContainer}>
        <Text style={{color:'black'}}>
          Don't have an account?
            <Text onPress={onSignUpPressed} style={styles.footerText}> Sign up</Text>
        </Text>
      </View>
      </View>
    </SafeAreaView>
  );
};

// -The footer SignUP text is not alligning; -I want to put a Forgot text inside the password input