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
export default function Login({navigation}) {
  // const handleClick = () => {
  //   navigation.navigate('Login');
  // };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = () => {
    navigation.navigate('AppStack');
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

      {/* Circle Section */}
      <View style={styles.greenCircle} />
      <View style={styles.orangeCircle} />

      {/* Header Text */}
      <View style={styles.container}>
        <Text style={styles.headerText}>Login</Text>
        <Text>Please sign in to continue</Text>
      </View>

      <View style={styles.flex}>
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

        {/* Login Button Section */}
        <View style={styles.container}>
          <CustomButton text="Login" onPress={handleClick} />
        </View>
      </View>

      {/* Footer Text */}
      <View style={styles.footerContainer}>
        <Text>
          Don't have an account?
          <TouchableOpacity onPress={onSignUpPressed}>
            <Text style={styles.footerText}> Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
}

// -The footer SignUP text is not alligning; -I want to put a Forgot text inside the password input
