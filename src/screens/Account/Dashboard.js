/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-labels */
/* eslint-disable semi */
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
  Alert,
  FlatList,
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
import { useToast } from 'react-native-toast-notifications';
import objectUnfreeze from 'object-unfreeze'
import { setUser } from '../../../redux-store/userAuth';
import { useDispatch } from 'react-redux';

export default function Dashboard({navigation}) {
  const user = useSelector(
    (state) => state.user.user,
  );
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsloading] = useState(false);
  const [groupName, setGroup] = useState('');
  const [isError, setIsError] = useState('');
  const [haveUserGroup, setHaveUserGroup] = useState(false)
  let [availableGroups, setAvailableGroups] = useState([]);
  let [membersPayout, setMembersPayout] = useState([])
  let [chosenGroup, setChosenGroup] = useState({})
  let [trips, setTrips] = useState([]);
  let [payments, setPayments] = useState([])
  const groupReference = database().ref('groups');
  const tripReference = database().ref('Trips');
  const reference = database()
  const transactionReference = database().ref('transactions').push();
  const toast = useToast()
  const dispatch = useDispatch()


  const gettrips =  () => {
    tripReference
    .on('value', snapshot => {
      const tripList = snapshot.val();
      if (tripList) {
        const restructuredtrip = Object.values(tripList);
      console.log("tripslist",restructuredtrip);
        setTrips(trips = Object.values(restructuredtrip));
      } else {
        return
      }
    });
  };

const getBalance = () => {
  const email = user.email
  let usersRef = database().ref('users').orderByChild('email').equalTo(email);
   usersRef.on('value', snapshot => {
    if (snapshot.exists()) {
      snapshot.forEach(userSnapshot => {
        if (userSnapshot.val().email === email) {
          const user = userSnapshot.val();
      // console.log('user first name:', user);
      // console.log('User account signed in!');
    dispatch(setUser(user))
    }
    })
  }
  })
}
  const getGroups =  () => {
   
    groupReference
    .on('value', snapshot => {
      const groupList = snapshot.val();
      if (groupList) {
      const restructuredGroup = Object.values(groupList);
      // console.log('groupslist',restructuredGroup);
     const currentUserGroups = restructuredGroup.filter((group) => {
      // console.log(group.members_list);
        return group.members_list.some((members) => {
            // console.log(members.first_name, user.first_name );
            return members.id === user.id;
          }
        )
      });
      // console.log('current user groups',currentUserGroups);
      if (currentUserGroups.length > 0) {
        setHaveUserGroup(true);
        const finalRestructuredGroups = currentUserGroups.map((item) => {
          return {
            label: item.groupName,
            value: item.groupName,
            id: item.id,
            contributionAmount: item.contributionAmount,
            wallet_balance: item.wallet_balance,
          };
        });
        setAvailableGroups(availableGroups = Object.values(finalRestructuredGroups));
        // console.log('groups', availableGroups);
        // console.log('user',user);
      } else {
        setHaveUserGroup(false)
      }
      } else {
        return null
      }

    });
  };
  const createTransaction = () => {
    // setIsloading(true);
    if (  amount === '' ||  groupName === '' ) {
      Alert.alert('one or more of the input fields are empty!');
      setIsloading(false);
      return;
    }
    groupReference
    .orderByChild('groupName')
    .equalTo(groupName)
    .once('value', (snapshot) => {
      if (snapshot.exists()) {
        const restructuredSelectedGroup = Object.values(snapshot.val());
        setChosenGroup(chosenGroup = restructuredSelectedGroup[0])
        console.log('members1',chosenGroup);
        reference.ref('transactions')
        .orderByChild('groupName')
        .equalTo(groupName)
        .once('value', (snapshot) => {
          if (snapshot.exists()) {
           console.log( snapshot.val());
            const paymentsByMmebers = Object.values(snapshot.val());
            console.log('allMembers',paymentsByMmebers);
            const paymentsByUser = paymentsByMmebers.filter((member) => {
              return member.contributor_id === user.id
            })
            console.log('user payemnts',paymentsByUser);

            setPayments(payments = paymentsByUser)
          }
        });
        console.log('members', chosenGroup);
        // console.log('group paymnts',payments, );
    
        let transactionData = {
          amount: amount,
          groupName: groupName,
          date: moment().format('MMMM Do, YYYY'),
          contributor: `${user.first_name} ${user.last_name}`,
          contributor_id: user.id,
          status:'Pending',
         };
         console.log('payemnts',payments.length,'members', chosenGroup.members_list.length);
        if ( payments.length >= chosenGroup.members_list.length  ) {
           toast.show(`Payment of £${amount} to ${transactionData.groupName} for contribution payment was unsuccessful because you have completed payments!`, {
            type: 'warning',
            placement: 'bottom',
            duration: 5000,
            offset: 30,
            animationType: 'slide-in',
          });
          setIsloading(false);
          return
        } else {
           const selectedGroup  = availableGroups.filter((group) => {
            console.log(groupName, group.label);
            return group.label === groupName;
           })
              reference.ref(`groups/${selectedGroup[0].id}`).once('value', snapshot => {
                const group = snapshot.val();
                if (group) {
               const groupMembersPayout = group.payoutOrder;
                setMembersPayout(membersPayout = groupMembersPayout);
                let newTransaction = transactionReference;
                transactionData.id = newTransaction.key;
                let transactionDataClone = {...transactionData, id: newTransaction.key}
                newTransaction.set(transactionDataClone);
                reference.ref(`groups/${selectedGroup[0].id}`).update({
                wallet_balance: Number(selectedGroup[0].wallet_balance) + Number(amount),
             });
                const groupChildRef = database().ref('groups').child(selectedGroup[0].id);
                groupChildRef.once('value', ( snapshot ) => {
                  // console.log('snapshot',snapshot);
                    if (snapshot.val().id === selectedGroup[0].id){
                        groupChildRef.update({
                          wallet_balance: Number(selectedGroup[0].wallet_balance) + Number(amount),
                        });
                    }
                });
                  toast.show(`Payment of £${amount} to ${transactionData.groupName} 
                  for contribution payment ${payments.length + 1} successful!`, {
                  type: 'success',
                  placement: 'bottom',
                  duration: 5000,
                  offset: 30,
                  animationType: 'slide-in',
                });
                setIsloading(false);
                console.log('paid');
                  return;
               }
          });
        }
      }
    });
  
  };

  const chooseGroup = (text) => {
    groupReference
    .orderByChild('groupName')
    .equalTo(text)
    .on('value', (snapshot) => {
      if (snapshot.exists()) {
        const selectedGroup = snapshot.val();
        const restructuredSelectedGroup = Object.values(selectedGroup);
        setGroup(text);
        setAmount(restructuredSelectedGroup[0].contributionAmount);
      }
    });
  };
  useEffect(()=>{
    getGroups();
    getBalance();
    gettrips()
   },[]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width:'100%'}}>
          <View style={styles.userImageCover}>
            <View />
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
          <View style={styles.wallet_balance_view}>
              <View style={{width:'100%',height:30}}>
                <Text style={{color: colors.black, textAlign:'center'}}>
                  Funds from your savings
                </Text>
              </View>
              <View>
                <Text style={styles.noColorText}>Available balance </Text>
                <Text style={styles.bigText2}>£{user.wallet_balance}</Text>
              </View>
          </View>
      <View  style={{width:'100%',}}>
      {
        trips.length > 0 ?
      <FlatList
        data={trips}
        // contentContainerStyle={{width:'100%'}}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=> {
        return  (
          <TouchableOpacity onPress={() => {
            console.log(item);
            // navigation.navigate('tripDetails', {item})
          }}  style={styles.tripCardRow}  >
            <View style={{ width:'100%',justifyContent:'center',  marginTop:-20, alignItems:'center' }}>
              <Image
                  source={{ uri: item.image._parts.flat()[1].uri }}
                  style={{ width: '100%', height:200, borderTopLeftRadius:10, borderTopRightRadius:10, resizeMode: 'contain' }}
                />
            </View>
          
            <View style={styles.maintrip}>
              <Text style={styles.tripTextBold}>{item.TripName}</Text>
              <View style={{flexDirection:'row',width:150, justifyContent:'space-between'}}>
                <Text style={styles.tripText}>£{item.tripCost}</Text>
                <Text style={styles.tripText1}>{item.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        // </Card>
      );
          }  }
      /> : <Text style={styles.mainText}> No created trips at the moment</Text>
       }
      </View>
      

      {
        haveUserGroup ?
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
      </View> :
      <View style={styles.makeDepositView}>
          <Text style={{color:colors.black, fontSize:20, textAlign:'center'}}>You have not been added to a group.</Text>
      </View>
      }

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
