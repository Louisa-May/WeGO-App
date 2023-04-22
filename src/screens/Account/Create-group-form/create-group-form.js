/* eslint-disable prettier/prettier */
import {View, StatusBar, SafeAreaView, Text, Image, ScrollView, TouchableOpacity, FlatList, Alert, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import Card from '../../../components/card';
import CustomSearch from '../../../components/customSearch';
import CustomButton from '../../../components/customButton';
import database from '@react-native-firebase/database';
import { useEffect } from 'react';
import UserImage from "../../../assets/svgs/images/userProfileImage.svg";
import Checkmark from "../../../assets/svgs/icons/icons8-checkmark.svg";
import CustomInput from '../../../components/customInput';



export default function CreateGroupForm({navigation}) {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState('');
  const [contributionAmount, setContributionAmount] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);
  const [groupName, setGroupName] = useState('')
  const [paymentFrequency, setPaymentFrequency] = useState(new Date())
  const groupReference = database().ref('/groups').push();

  const handleClick = () => {
    navigation.navigate('CreateGroupForm');
  };
  const goBack = () => {
    navigation.goBack();
  };

  const createGroup = () => {
    setIsloading(true);
    if (contributionAmount  === '' || targetAmount === ''|| groupName === '' || paymentFrequency === '' ) {
      Alert.alert("one or more of the input fields are empty!");
      setIsloading(false);
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.flex}>
        <View style={styles.container2}>
          <Text style={styles.headerText}>Sign Up</Text>
          <Text style={styles.headerSubText}>Create an account to continue</Text>
        </View>
        <View style={styles.form}>
          <CustomInput
            placeholder="First Name"
            value={groupName}
            onChangeText={(text) => setGroupName(text)}
          />
          <CustomInput
            placeholder="Last Name"
            value={targetAmount}
            onChangeText={(text) => setTargetAmount(text)}
          />
          <CustomInput
            placeholder="Email"
            value={paymentFrequency}
            onChangeText={(text) => setPaymentFrequency(text)}
          />
           {/* <CustomInput
            placeholder="Role"
            value={role}
            onChangeText={(text) => setRole(text)}
          /> */}
         {isError  &&  (
            <Text style={{ textAlign: "center", fontSize:15, color:"red", fontWeight:"500" }}> {isError}</Text>
         )}
          { !isLoading ? (
             <View style={styles.button}>
             <CustomButton  text="Craete Group" onPress={handleClick} />
           </View>
            ) : (
              <ActivityIndicator color="purple" animating={true} />
            )
        }
        </View>
      </View>

        <View style={styles.button}>
          <CustomButton text="Continue" onPress={handleClick} />
        </View>
      {/* </Card> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
