/* eslint-disable prettier/prettier */
import {View, StatusBar, SafeAreaView, Text, Image, ScrollView, TouchableOpacity, FlatList, Alert, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import Card from '../../../components/card';
import CustomSearch from '../../../components/customSearch';
import CustomButton from '../../../components/customButton';
import database from '@react-native-firebase/database';
import { useEffect } from 'react';
import UserImage from '../../../assets/svgs/images/userProfileImage.svg';
import Checkmark from '../../../assets/svgs/icons/icons8-checkmark.svg';
import CustomInput from '../../../components/customInput';
import RNPickerSelect from 'react-native-picker-select';
import moment from 'moment';
import DropDownIcon from '../../../assets/svgs/icons/drop-down.svg'
import { useDispatch, useSelector } from 'react-redux';
import { resetGroupMembers } from '../../../../redux-store/userAuth';



export default function CreateGroupForm({navigation}) {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState('');
  const [contributionAmount, setContributionAmount] = useState(0);
  const [collectionMethod, setCollectionMethod] = useState(0);
  const [groupName, setGroupName] = useState('')
  const [paymentFrequency, setPaymentFrequency] = useState(new Date())
  const dispatch = useDispatch();
  const groupReference = database().ref('/groups').push();


  const groupMembers = useSelector(
    (state) => state.user.groupMembers,
  );

  const handleClick = () => {
    navigation.navigate('CreateGroupForm');
  };
  const goBack = () => {
    navigation.goBack();
  };

  const createGroup = () => {
    setIsloading(true);
    if (contributionAmount  === '' ||  groupName === '' || paymentFrequency === '' || collectionMethod === '' ) {
      Alert.alert('one or more of the input fields are empty!');
      setIsloading(false);
      return;
    }
    console.log('group members', groupMembers);
    console.log(contributionAmount, paymentFrequency,groupName);
   let groupData = {
    contributionAmount: contributionAmount,
    groupName: groupName,
    paymentFrequency: paymentFrequency,
    members_list: groupMembers,
    collectionMethod: collectionMethod,
    paymentAmount: contributionAmount * groupMembers.length
   }
   let newGroup = groupReference;
      groupData.id = newGroup.key;
      newGroup.set(groupData);
    dispatch(resetGroupMembers());
    Alert.alert('group created successfully!');
    setIsloading(false);
    navigation.navigate('GroupStackNavigator');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.flex}>
        <View style={styles.container2}>
          <Text style={styles.headerText}> Final Step!</Text>
          <Text style={styles.headerSubText}>Kindly fill tell us more about your group</Text>
        </View>
        <View style={styles.form}>
          <CustomInput
            placeholder="Group Name"
            value={groupName}
            onChangeText={(text) => setGroupName(text)}
          />
          <CustomInput
            placeholder="Contribution Amount in pounds"
            value={contributionAmount}
            keyboardType = 'number-pad'
            onChangeText={(text) => setContributionAmount(text)}
          />
          <View style={styles.inputSelect}>
          <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={(text) => setCollectionMethod(text)}
              placeholder={{ label: 'Method of collecting Savings', value: null }}
              items={[
              { label: 'First come, first serve', value: 'First come, first serve' },
              { label: 'At Random', value: 'Random' },
              ]}
              Icon={() => {
                return (
                  <DropDownIcon
                    width={20}
                    height={20}
                    style={{marginTop: 20, marginRight: 10}}
                  />
                );
              }}
          />
        </View>
           <View style={styles.inputSelect} >
          <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={(text) => setPaymentFrequency(text)}
              placeholder={{ label: ' Select Contribution Frequency', value: null }}
              items={[
              { label: '2 weeks', value: '2 weeks' },
              { label: '1 month', value: '1 month' },
              { label: '2 months', value: '2 months' },
              ]}
              Icon={() => {
                return (
                  <DropDownIcon
                    width={20}
                    height={20}
                    style={{marginTop: 20, marginRight: 10}}
                  />
                );
              }}
          />
        </View>
         {isError  &&  (
            <Text style={{ textAlign: 'center', fontSize:15, color:'red', fontWeight:'500' }}> {isError}</Text>
         )}
          { !isLoading ? (
             <View style={styles.button}>
             <CustomButton  text="Craete Group" onPress={createGroup} />
           </View>
            ) : (
              <ActivityIndicator color="purple" animating={true} />
            )
        }
        </View>
      </View>
    </SafeAreaView>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderRadius: 8,
    color:colors.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0,
    borderRadius: 20,
    color:'#00214E',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});