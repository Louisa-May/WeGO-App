/* eslint-disable space-infix-ops */
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
import firestore from '@react-native-firebase/firestore';
import RNPickerSelect from 'react-native-picker-select';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';
import { setUser } from '../../../../redux-store/userAuth';
import { useDispatch } from 'react-redux';
const reference = database().ref('/users');

export default function SignUp({navigation}) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState('');
  const dispatch = useDispatch()
  const onLoginPressed = () => {
    navigation.navigate('Login');
  };
  const newReference = database().ref('/users').push();
  const handleClick = () => {
    setIsloading(true);
    if (email  === '' || password === ''|| firstName === '' || lastName === '' ) {
      Alert.alert("one or more of the input fields are empty!");
      setIsloading(false);
      return;
    }
    const Email = email.toLowerCase()
    console.log('Email',Email);
    auth()
    .createUserWithEmailAndPassword(Email, password)
    .then(() => {
      console.log('User account created & signed in!');
      let userData = {
        first_name: firstName,
        last_name: lastName,
        email: Email,
        role: 'user',
        // clciked:false,
        wallet_balance:0,
    }
      let newUser = reference.push();
      userData.id = newUser.key;
      newUser.set(userData)
      dispatch(setUser(userData))
    setIsloading(false)
  }).then(() => {
      navigation.navigate('Congrats');
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
      console.log(error);
      setIsError(error.code)
      setIsloading(false);
    })
  };
  return (
    <SafeAreaView style={styles.container1}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

      {/* Circle Section */}
      <View style={styles.greenCircle} />
      <View style={styles.orangeCircle} />

      {/* Header Text */}
      

      <View style={styles.flex}>
        <View style={styles.container2}>
          <Text style={styles.headerText}>Sign Up</Text>
          <Text style={styles.headerSubText}>Create an account to continue</Text>
        </View>
        <View style={styles.form}>
          <CustomInput
            placeholder="First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <CustomInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <CustomInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
           {/* <CustomInput
            placeholder="Role"
            value={role}
            onChangeText={(text) => setRole(text)}
          /> */}
          <CustomInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          {isError  &&  (
            <Text style={{ textAlign: "center", fontSize:15, color:"red", fontWeight:"500" }}> {isError}</Text>
         )}
          { !isLoading ? (
             <View style={styles.button}>
             <CustomButton  text="Proceed" onPress={handleClick} />
           </View>
            ) : (
              <ActivityIndicator color="purple" animating={true} />
            )
        }
        </View>
      </View>

      {/* Footer Text */}
      <View style={styles.footerContainer}>
        <Text style={{color:'black'}}>
          Already have an account?
            <Text onPress={onLoginPressed} style={styles.footerText}> Login</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};