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
import { useToast } from 'react-native-toast-notifications';



export default function Login({navigation}) {

  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState('');
  const dispatch = useDispatch();
  const toast = useToast()

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };
  const handleClick =  () => {
    setIsError('')
    setIsloading(true);
    if (Email  === '' || password === '') {
      Alert.alert("Kindly input your email and password!");
      setIsloading(false);
      return;
    }
    const email = Email.toLowerCase()
    console.log(email);
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(async() => {
     let usersRef = database().ref('users').orderByChild('email').equalTo(email);
    console.log(usersRef);
     usersRef.on('value', snapshot => {
      console.log('snapshot', snapshot);
      if (snapshot.exists()) {
        snapshot.forEach(userSnapshot => {
          if (userSnapshot.val().email === Email) {
            const user = userSnapshot.val();
        // console.log('user first name:', user);
        // console.log('User account signed in!');
      dispatch(setUser(user))
      dispatch(setIsAunthenticated(true));
      setIsloading(false);
      toast.show(`Hi ${user.first_name}!, welcome back`, {
        type: 'success',
        placement: 'top',
        duration: 5000,
        offset: 30,
        animationType: 'slide-in',
      });
      }
      setIsloading(false);
    }
     )}else{
      setIsloading(false);
      setIsError('An error occured while signing you in, check back later please')
      toast.show(`'An error occured while signing you in, check back later please!`, {
        type: 'danger',
        placement: 'top',
        duration: 5000,
        offset: 30,
        animationType: 'slide-in',
      });
     }
    
    }
     
     )
  })
    .catch(error => {
      setIsloading(false);
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
      setIsloading(false);
      setIsError(error.message)
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