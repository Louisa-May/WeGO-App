import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import CustomInput from '../../../components/customInput';
import CustomButton from '../../../components/customButton';
export default function SignUp({navigation}) {
  // const handleClick = () => {
  //   navigation.navigate('Login');
  // };

  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onLoginPressed = () => {
    navigation.navigate('Login');
  };
  const handleClick = () => {
    navigation.navigate('Congrats');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

      {/* Circle Section */}
      <View style={styles.greenCircle} />
      <View style={styles.orangeCircle} />

      {/* Header Text */}
      <View style={styles.container}>
        <Text style={styles.headerText}>Sign Up</Text>
        <Text>Create an account to continue</Text>
      </View>

      <View style={styles.flex}>
        <CustomInput
          placeholder="Full Name"
          value={fullname}
          setValue={setFullname}
        />
        <CustomInput
          placeholder="Email"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Confirm Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        {/* Login Button Section */}
        <View style={styles.signupButton}>
          <CustomButton text="Proceed" onPress={handleClick} />
        </View>
      </View>

      {/* Footer Text */}
      <View style={styles.footerContainer}>
        <Text>
          Already have an account?
          <TouchableOpacity onPress={onLoginPressed}>
            <Text style={styles.footerText}> Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
}

// -The footer Login text is not alligning here too; the Sign Up should be in the center
