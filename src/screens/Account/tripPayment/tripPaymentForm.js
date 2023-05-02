/* eslint-disable prettier/prettier */
import {
    View,
    StatusBar,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Alert
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import FeatherIcon from 'react-native-vector-icons/Feather';
  import EntypoIcon from 'react-native-vector-icons/Entypo';
  import {styles} from './styles';
  import {colors} from '../../../constants/colors';
  import database from '@react-native-firebase/database';
  import TravelIcon from '../../../assets/svgs/icons/travel-icon.svg'
  import { useSelector } from 'react-redux';
  import Checkmark from "../../../assets/svgs/icons/icons8-checkmark.svg";
  import { useToast } from 'react-native-toast-notifications';
  import moment from 'moment';

  export default function TripPayment({navigation}) {
    const tripReference = database().ref('Trips');
    let [trips, setTrips] = useState([]);
    const toast = useToast();
    const reference = database();
    const tripTransactionReference = database().ref('tripTransactions').push()
    const goBack = () => {
      navigation.goBack();
    };
    const createtrip = () => {
      navigation.navigate('createTripForm');
    };
    const user = useSelector(
      (state) => state.user.user,
    );
    const gettrips =  () => {
      tripReference
      .on('value', snapshot => {
        const tripList = snapshot.val();
        if (tripList) {
          const restructuredtrip = Object.values(tripList);
        // console.log("tripslist",restructuredtrip);
          setTrips(trips = Object.values(restructuredtrip));
        } else {
          return
        }
      });
    };

    const payForTrips = (item) => {
        // console.log(item);
        reference.ref('tripTransactions').orderByChild('payer_id').equalTo(user.id)
        .once('value', snapshot => {
          if (snapshot.exists()) {
          const paidTrips = Object.values(snapshot.val());
          console.log('paid trips',paidTrips);
          const paidForPresentTrip = paidTrips.filter(trip => trip.tripName === item.TripName )
          if (paidForPresentTrip.length > 0) {
            toast.show(`Payment for this trip isnt successful as you have paid for this trip before`, {
              type: 'danger',
              placement: 'bottom',
              duration: 5000,
              offset: 30,
              animationType: 'slide-in',
            });
            return
          } 
          const userRef= reference.ref('users').orderByChild('id').equalTo(user.id);
          userRef.once('value', snapshot => {
          if (snapshot.exists()) {
              const User = snapshot.val();
              const currentUser = Object.values(User)
              console.log(Number(currentUser[0].wallet_balance), Number(item.tripCost));
              if (Number(currentUser[0].wallet_balance) >= Number(item.tripCost)) {
                  reference.ref(`users/${user.id}`).update({
                      wallet_balance: Number(currentUser[0].wallet_balance) - Number(item.tripCost),
                  });
  
                  let transactionData = {
                    amount: Number(item.tripCost),
                    tripName: item.TripName,
                    date: moment().format('MMMM Do, YYYY'),
                    payer: `${user.first_name} ${user.last_name}`,
                    payer_id: user.id,
                    status:'Pending',
                   };
                  let newTransaction = tripTransactionReference;
                  transactionData.id = newTransaction.key;
                  let transactionDataClone = {...transactionData, id: newTransaction.key}
                  newTransaction.set(transactionDataClone);
                  toast.show(`Payment of £${item.tripCost} for the ${item.TripName} trip payment is successful!`, {
                  type: 'success',
                  placement: 'bottom',
                  duration: 5000,
                  offset: 30,
                  animationType: 'slide-in',
                });
              } 
              else {
                  toast.show(`Payment of £${item.tripCost} for the ${item.TripName} trip payment wasnt successful as you do not have enough money in your wallet!`, {
                  type: 'danger',
                  placement: 'bottom',
                  duration: 5000,
                  offset: 30,
                  animationType: 'slide-in',
                });
                return
              }    
          }
      })
        } else {
           const userRef= reference.ref('users').orderByChild('id').equalTo(user.id);
        userRef.once('value', snapshot => {
        if (snapshot.exists()) {
            const User = snapshot.val();
            const currentUser = Object.values(User)
            console.log(Number(currentUser[0].wallet_balance), Number(item.tripCost));
            if (Number(currentUser[0].wallet_balance) >= Number(item.tripCost)) {
                reference.ref(`users/${user.id}`).update({
                    wallet_balance: Number(currentUser[0].wallet_balance) - Number(item.tripCost),
                });

                let transactionData = {
                  amount: Number(item.tripCost),
                  tripName: item.TripName,
                  date: moment().format('MMMM Do, YYYY'),
                  payer: `${user.first_name} ${user.last_name}`,
                  payer_id: user.id,
                  status:'Pending',
                 };
                let newTransaction = tripTransactionReference;
                transactionData.id = newTransaction.key;
                let transactionDataClone = {...transactionData, id: newTransaction.key}
                newTransaction.set(transactionDataClone);
                toast.show(`Payment of £${item.tripCost} for the ${item.TripName} trip payment is successful!`, {
                type: 'success',
                placement: 'bottom',
                duration: 5000,
                offset: 30,
                animationType: 'slide-in',
              });
            } 
            else {
                toast.show(`Payment of £${item.tripCost} for the ${item.TripName} trip payment wasnt successful as you do not have enough money in your wallet!`, {
                type: 'danger',
                placement: 'bottom',
                duration: 5000,
                offset: 30,
                animationType: 'slide-in',
              });
              return
            }    
        }
    })
        }
      })      
    }
  
  useEffect(()=>{
    gettrips()
  },[])
  
    return (
      <View style={styles.container}>
        {/* Header */}
       <View style={{width:'100%'}}>
       <View style={styles.row}>
          <EntypoIcon
            name="chevron-left"
            size={32}
            style={{marginTop:7}}
            color={colors.black}
            onPress={goBack}
          />
          <Text style={styles.headerText}>Pay for a desired trip</Text>
        </View>
        {/* <Text style={styles.searchText}>Search or select savings trip</Text> */}
        {/* Search Bar */}
        {/* <CustomSearch
          placeholder="Search trip"
          value={searchInput}
          setValue={setSearchInput}
        /> */}
        <Text style={styles.mainText}>Choose from Available Trips</Text>
        <View style={{width:'100%',  justifyContent: 'center',paddingHorizontal:10, alignItems: 'center', alignContent:"center"}}>
         {
          trips.length > 0 ?
        <FlatList
          data={trips}
          // contentContainerStyle={styles.maintrip}
          vertical
          keyExtractor={(item) => item.id}
          renderItem={({item, index})=> {
          return  (
            // <Card >
            <TouchableOpacity onPress={() => payForTrips(item)} style={styles.tripCardRow}>
              <TravelIcon 
                width={35}
                height={35}
                style={styles.tripImageCover}
              />
              <View style={styles.maintrip}>
                <Text style={styles.tripTextBold}>{item.TripName}</Text>
                <View style={{flexDirection:'row',width:150, justifyContent:'space-between'}}>
                <Text style={styles.tripText}>£{item.tripCost}</Text>
                <Text style={styles.tripText1}>{item.date}</Text>
                </View>
              </View>
              <EntypoIcon
                name="chevron-right"
                size={32}
                color={colors.black}
                onPress={() => {
                  navigation.navigate('tripDetails', {item})
                }}
              />
            </TouchableOpacity>
          // </Card>
        );
            }  }
        /> : <Text style={styles.mainText}> No created trips at the moment</Text>
         }
        </View>
  
       </View>
        {/* Create trip */}
       {
        user.role === 'admin' ?
        ( <TouchableOpacity style={styles.plusIcon} onPress={createtrip}>
         <FeatherIcon name="plus-circle" size={45} color={colors.green} />
       </TouchableOpacity> ) :
        ( null)
       }
      </View>
    );
  }
  