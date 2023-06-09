/* eslint-disable no-trailing-spaces */
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
import CustomInput from '../../../components/customInput';
// import RNPickerSelect from 'react-native-picker-select';
// import moment from 'moment';
import DropDownIcon from '../../../assets/svgs/icons/drop-down.svg';
import { useDispatch, useSelector } from 'react-redux';
import { resetGroupMembers } from '../../../../redux-store/userAuth';
import moment from 'moment';
import { useToast } from 'react-native-toast-notifications';
import SelectDropdown from 'react-native-select-dropdown';




export default function CreateGroupForm({navigation}) {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState('');
  const [contributionAmount, setContributionAmount] = useState(0);
  const [collectionMethod, setCollectionMethod] = useState(0);
  const [groupName, setGroupName] = useState('');
  let [paymentFrequency, setPaymentFrequency] = useState(new Date());
  const dispatch = useDispatch();
  const groupReference = database().ref('/groups').push();
  const toast = useToast();


  const groupMembers = useSelector(
    (state) => state.user.groupMembers.flat(),
  );
  const goBack = () => {
    navigation.goBack();
  };

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    // console.log('array', array);
    return array;
  }

  const createGroup = () => {
    // setIsloading(true);
    if (contributionAmount  === '' ||  groupName === '' || paymentFrequency === '' || collectionMethod === '' ) {
      Alert.alert('one or more of the input fields are empty!');
      setIsloading(false);
      return;
    }

    const paymentsEachPayoutDates = groupMembers.map((member) => {
      const paymentsObjects=[]
      paymentsObjects.push({paid:false,id: member.id,
        first_name: member.first_name,
        last_name: member.last_name})
      return {
        email: member.email,
        id: member.id,
        first_name: member.first_name,
        last_name: member.last_name,
        paid:false
      }
    })
    let payoutOrder = [];
    console.log('group members', groupMembers);
    if (collectionMethod === 'Random' ) {
      // Alert.alert('hey mtf')
      payoutOrder = shuffle(groupMembers);
    } else {
      payoutOrder = groupMembers;
    }

    const restructuredPayoutOrder = payoutOrder.map((member) => {
      
      return {
        clicked: member.clicked,
        email: member.email,
        id: member.id,
        first_name: member.first_name,
        last_name: member.last_name,
        role: member.role,
        wallet_balance: member.wallet_balance,
        payOutDate: moment(date).format('MMMM Do, YYYY'), 
        payments: paymentsEachPayoutDates,
      };
    });
    let restructuredMembers = []
    let date = moment(new Date());
    if (paymentFrequency === '2 weeks') {
      console.log(date);
      restructuredMembers = groupMembers.map((member) => {
        date = date.add(2, 'weeks');
        console.log(date);
        return {
          clicked: member.clicked,
          email: member.email,
          id: member.id,
          first_name: member.first_name,
          last_name: member.last_name,
          role: member.role,
          wallet_balance: member.wallet_balance,
          payOutDate: moment(date).format('MMMM Do, YYYY'),
          // payments: paymentsEachPayoutDates
        };
      });
      
    } else if (paymentFrequency === 'Daily') {
      console.log(date);
      restructuredMembers = groupMembers.map((member) => {
        date = date.add(1, 'day');
        console.log(date);
        return {
          clicked: member.clicked,
          email: member.email,
          id: member.id,
          first_name: member.first_name,
          last_name: member.last_name,
          role: member.role,
          wallet_balance: member.wallet_balance,
          // payments: paymentsEachPayoutDates,
          payOutDate: moment(date).format('MMMM Do, YYYY'),
        };
      });
    }     
    else if (paymentFrequency === '1 month') {
      console.log(date);
      restructuredMembers = groupMembers.map((member) => {
        date = date.add(1, 'month');
        console.log(date);
        return {
          clicked: member.clicked,
          email: member.email,
          id: member.id,
          first_name: member.first_name,
          last_name: member.last_name,
          role: member.role,
          wallet_balance: member.wallet_balance,
          // payments: paymentsEachPayoutDates,
          payOutDate: moment(date).format('MMMM Do, YYYY'),
        };
      });
      
    } else {
      console.log(date);
      restructuredMembers = groupMembers.map((member) => {
        date = date.add(2, 'month');
        console.log(date);
        return {
          clicked: member.clicked,
          email: member.email,
          id: member.id,
          first_name: member.first_name,
          last_name: member.last_name,
          role: member.role,
          wallet_balance: member.wallet_balance,
          payOutDate: moment(date).format('MMMM Do, YYYY'),
          // payments: paymentsEachPayoutDates,
        };
      });
    }

    console.log('group members',restructuredMembers);
   let groupData = {
    contributionAmount: contributionAmount,
    groupName: groupName,
    paymentFrequency: paymentFrequency,
    members_list: restructuredMembers,
    collectionMethod: collectionMethod,
    paymentAmount: contributionAmount * groupMembers.length,
    payoutOrder: restructuredPayoutOrder,
    wallet_balance:0,
   };
   console.log('groupData',groupData);
   let newGroup = groupReference;
      groupData.id = newGroup.key;
      newGroup.set(groupData);
    dispatch(resetGroupMembers());
    toast.show('group created successfully!', {
      type: 'success',
      placement: 'bottom',
      duration: 4000,
      offset: 30,
      animationType: 'zoom-in',
    });
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
            placeholder='Group Name'
            value={groupName}
            onChangeText={(text) => setGroupName(text)}
          />
          <CustomInput
            placeholder='Contribution Amount in pounds'
            value={contributionAmount}
            keyboardType = 'number-pad'
            onChangeText={(text) => setContributionAmount(text)}
          />
          <View style={styles.inputSelect}>
          {/* <RNPickerSelect
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
          /> */}
          <SelectDropdown
             data={['First come, first serve', 'Random']}
             onSelect={(selectedItem, index) => {
              setCollectionMethod(selectedItem);
            }}
          defaultButtonText='Method of collecting Savings'
            dropdownIconPosition='right'
            renderDropdownIcon= {() => {
              return (
                <DropDownIcon
                  width={20}
                  height={20}
                  style={{marginRight: 10}}
                />
              );
            }}
            buttonStyle={{
              // backgroundColor: "white",
              // position: "absolute",
              // top: 40,
              width: "100%",
            }}
          />
        </View>
           <View style={styles.inputSelect} >
          {/* <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={(text) => setPaymentFrequency(text)}
              placeholder={{ label: ' Select Contribution Frequency', value: null }}
              items={[
              { label: 'Daily', value: 'daily'},
              { label: '2 weeks', value: '2 weeks' },
              { label: '1 month', value: '1 month' },
              { label: '2 months', value: '2 month' },
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
          /> */}
            {/* <SelectDropdown
            data={['Daily', '2 weeks', '1 month','2 months']}
            onSelect={(selectedItem, index) => {
              setPaymentFrequency(selectedItem)
            }}
            searchPlaceHolder="Select Contribution Frequency"
            dropdownStyle={{width:'100%', backgroundColor:colors.grey}}
          /> */}
           <SelectDropdown
             data={['Daily', '2 weeks', '1 month','2 months']}
             onSelect={(selectedItem, index) => {
              setPaymentFrequency(selectedItem)
            }}
          defaultButtonText='Select Contribution Frequency'
            dropdownIconPosition='right'
            renderDropdownIcon= {() => {
              return (
                <DropDownIcon
                  width={20}
                  height={20}
                  style={{marginRight: 10}}
                />
              );
            }}
            buttonStyle={{
              // backgroundColor: "white",
              // position: "absolute",
              // top: 40,
              width: "100%",
            }}
          />
        </View>
         {isError  &&  (
            <Text style={{ textAlign: 'center', fontSize:15, color:'red', fontWeight:'500' }}> {isError}</Text>
         )}
          { !isLoading ? (
             <View style={styles.button}>
             <CustomButton  text="Create Group" onPress={createGroup} />
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