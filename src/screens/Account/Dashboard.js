/* eslint-disable prettier/prettier */
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Alert
} from 'react-native';
import React, {useState, useEffect} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../constants/colors';
import Card from '../../components/card';
import { useSelector } from 'react-redux';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import DropDownIcon from '../../assets/svgs/icons/drop-down.svg';
import database from '@react-native-firebase/database';
import moment from 'moment';

export default function Dashboard({navigation}) {
  const user = useSelector(
    (state) => state.user.user,
  );
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsloading] = useState(false);
  const [groupName, setGroup] = useState('');
  const [isError, setIsError] = useState('');
  let [availableGroups, setAvailableGroups] = useState([]);
  const groupReference = database().ref('groups');
  const transactionReference = database().ref('transactions');

  const getGroups =  () => {
    groupReference
    .on('value', snapshot => {
      const groupList = snapshot.val();
      console.log("groupslist",groupList);
      const restructuredGroup = Object.values(groupList);
      const finalRestructuredGroups = restructuredGroup.map((item) => {
        return {
          label: item.groupName,
          value: item.groupName,
          id: item.id,
          contributionAmount: item.contributionAmount,
        };
      });
      setAvailableGroups(availableGroups = Object.values(finalRestructuredGroups));
   console.log('groups', availableGroups);
   console.log('user',user);

    });
  };
  const createTransaction = () => {
    setIsloading(true);
    if (  amount === '' ||  groupName === '' ) {
      Alert.alert('one or more of the input fields are empty!');
      setIsloading(false);
      return;
    }
   let transactionData = {
    amount: amount,
    groupName: groupName,
    date: moment().format('MMMM Do, YYYY'),
    contributor: `${user.first_name} ${user.last_name}`,
    contributor_id: user.id,
    status:'Pending',
   };
   let newTransaction = transactionReference.push();
      transactionData.id = newTransaction.key;
      newTransaction.set(transactionData);
    // dispatch(resetGroupMembers());
    Alert.alert('Payment made successfully!');
    setIsloading(false);
  };

  const chooseGroup = (text) => {
    console.log(text);
    groupReference
    .orderByChild('groupName')
    .equalTo(text)
    .on('value', (snapshot) => {
      if (snapshot.exists()) {
        const selectedGroup = snapshot.val();
        const restructuredSelectedGroup = Object.values(selectedGroup);
        console.log(restructuredSelectedGroup[0].contributionAmount);
        setGroup(text);
        setAmount(restructuredSelectedGroup[0].contributionAmount);
      }
    });
  };
  useEffect(()=>{
    getGroups();
   },[]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width:'100%',}}>
          <View style={styles.userImageCover}>
            <View></View>
            <View style={styles.WelometextDiv}>
              <View style={styles.welcomeTextCover}>
                <Text style={styles.mediumText}>Welcome back,</Text>
                <Text  style={styles.mediumText}>{user.first_name}</Text>
              </View>
              <Image
                source={require('../../assets/images/userImage.png')}
                style={styles.userImage}
              />
            </View>
          </View>
      <View style={styles.cardCover}>
            <Image
              source={require('../../assets/images/card-IMAGE.jpg')}
              style={styles.cardImage}
            />
      </View>
      <View style={styles.depositView}>
        <View style={styles.DepositSmallView}>
              <Image
                source={require('../../assets/images/deposit-icon.jpg')}
                style={styles.DepositIcon}
              />
              <Text style={styles.DepositText}>Deposit</Text>
        </View>
        <View style={styles.DepositSmallView}>
              <Image
                source={require('../../assets/images/transfer-icon.jpg')}
                style={styles.DepositIcon}
              />
              <Text style={styles.DepositText}>Transfer</Text>
        </View>
        <View style={styles.DepositSmallView}>
              <Image
                source={require('../../assets/images/withdraw-icon.jpg')}
                style={styles.DepositIcon}
              />
              <Text style={styles.DepositText}>Withdraw</Text>
        </View>
        <View style={styles.DepositSmallView}>
              <Image
                source={require('../../assets/images/more-icon.jpg')}
                style={styles.DepositIcon}
              />
              <Text style={styles.DepositText}>More</Text>
        </View>
      </View>

      <View style={styles.makeDepositView}>
        <View style={{width:'100%'}}>
          <Text style={{color:'black', fontWeight:'bold', fontSize:25}}>
              Quick Transfer
          </Text>
        </View>
        <View style={styles.inputSelect}>
          <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={(text) => chooseGroup(text)}
                placeholder={{ label: 'Select group to pay to', value: null }}
                items={availableGroups}
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
        <View style={{width:'100%', marginTop:10}}>
          {/* <CustomInput
            placeholder="Enter Amount"
            value={amount}
            keyboardType = 'number-pad' */}
           {/* onChangeText={(text) => setAmount(text)} */}
          {/* > */}
          <View style={{width:'100%',height:45, backgroundColor:colors.grey}}>
            <Text style={{color:colors.black, fontSize:20, paddingLeft:15, paddingTop:10}}>£ {amount}</Text>
          </View>
        </View>

        {isError  &&  (
            <Text style={{ textAlign: 'center', fontSize:15, color:'red', fontWeight:'500' }}> {isError}</Text>
         )}
          { !isLoading ? (
             <View style={styles.button}>
             <CustomButton text="Make Payment" onPress={createTransaction} />
           </View>
            ) : (
              <ActivityIndicator color="purple" animating={true} />
            )
        }
      </View>
    </ScrollView>
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
