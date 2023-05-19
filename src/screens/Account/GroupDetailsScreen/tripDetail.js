/* eslint-disable no-extra-semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-labels */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import moment from 'moment';
import {useToast} from 'react-native-toast-notifications';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../../../redux-store/userAuth';
export default function TripDetails({route, navigation}) {
  // const transactionReference = database().ref('transactions');
  const tripTransactionReference = database().ref('tripTransactions').push();
  const reference = database();
  const trip = route.params;
  console.log(trip.item);
  let [ApprovedtripMembers, setApprovedTripMembers] = useState([]);
  const user = useSelector(state => state.user.user);
  // const dispatch = useDispatch();
  // let [paymentHistory, setPaymentHistory] = useState([]);
  const toast = useToast();
  const [isLoading, setIsloading] = useState(false);
  const goBack = () => {
    navigation.goBack();
  };

  const payForTrips = trip => {
    // console.log(item);
    setIsloading(true);
    // console.log(trip.item.TripName);
    trip.trip;
    reference
      .ref('tripTransactions')
      .orderByChild('payer_id')
      .equalTo(user.id)
      .once('value', snapshot => {
        if (snapshot.exists()) {
          const paidTrips = Object.values(snapshot.val());
          console.log('paid trips', paidTrips);
          const paidForPresentTrip = paidTrips.filter(
            paidtrip => paidtrip.tripName === trip.item.TripName,
          );
          console.log(paidForPresentTrip.length);
          if (paidForPresentTrip.length > 0) {
            toast.show(
              'Payment for this trip isnt successful as you have paid for this trip before',
              {
                type: 'danger',
                placement: 'bottom',
                duration: 5000,
                offset: 30,
                animationType: 'slide-in',
              },
            );
            setIsloading(false);
            return;
          }
          const userRef = reference
            .ref('users')
            .orderByChild('id')
            .equalTo(user.id);
          userRef.once('value', snapshot => {
            if (snapshot.exists()) {
              const User = snapshot.val();
              const currentUser = Object.values(User);
              console.log(
                Number(currentUser[0].wallet_balance),
                Number(trip.item.tripCost),
              );
              if (
                Number(currentUser[0].wallet_balance) >=
                Number(trip.item.tripCost)
              ) {
                reference.ref(`users/${user.id}`).update({
                  wallet_balance:
                    Number(currentUser[0].wallet_balance) -
                    Number(trip.item.tripCost),
                });

                let transactionData = {
                  amount: Number(trip.item.tripCost),
                  tripName: trip.item.TripName,
                  date: moment().format('MMMM Do, YYYY'),
                  payer: `${user.first_name} ${user.last_name}`,
                  payer_id: user.id,
                  status: 'Pending',
                };
                let newTransaction = tripTransactionReference;
                transactionData.id = newTransaction.key;
                let transactionDataClone = {
                  ...transactionData,
                  id: newTransaction.key,
                };
                newTransaction.set(transactionDataClone);
                toast.show(
                  `Payment of £${trip.item.tripCost} for the ${trip.item.TripName} trip payment is successful!!!`,
                  {
                    type: 'success',
                    placement: 'bottom',
                    duration: 5000,
                    offset: 30,
                    animationType: 'slide-in',
                  },
                );
                setIsloading(false);
                return;
              } else {
                toast.show(
                  `Payment of £${trip.item.tripCost} for the ${trip.item.TripName} trip payment wasnt successful as you do not have enough money in your wallet!`,
                  {
                    type: 'danger',
                    placement: 'bottom',
                    duration: 5000,
                    offset: 30,
                    animationType: 'slide-in',
                  },
                );
                setIsloading(false);
                return;
              }
            }
          });
          setIsloading(false);
          return;
        }
        const userRef = reference
          .ref('users')
          .orderByChild('id')
          .equalTo(user.id);
        userRef.once('value', snapshot => {
          if (snapshot.exists()) {
            const User = snapshot.val();
            const currentUser = Object.values(User);
            console.log(
              Number(currentUser[0].wallet_balance),
              Number(trip.item.tripCost),
            );
            if (
              Number(currentUser[0].wallet_balance) >=
              Number(trip.item.tripCost)
            ) {
              reference.ref(`users/${user.id}`).update({
                wallet_balance:
                  Number(currentUser[0].wallet_balance) -
                  Number(trip.item.tripCost),
              });

              let transactionData = {
                amount: Number(trip.item.tripCost),
                tripName: trip.item.TripName,
                date: moment().format('MMMM Do, YYYY'),
                payer: `${user.first_name} ${user.last_name}`,
                payer_id: user.id,
                status: 'Pending',
              };
              let newTransaction = tripTransactionReference;
              transactionData.id = newTransaction.key;
              let transactionDataClone = {
                ...transactionData,
                id: newTransaction.key,
              };
              newTransaction.set(transactionDataClone);
              toast.show(
                `Payment of £${trip.item.tripCost} for the ${trip.item.TripName} trip payment is successful!`,
                {
                  type: 'success',
                  placement: 'bottom',
                  duration: 5000,
                  offset: 30,
                  animationType: 'slide-in',
                },
              );
              setIsloading(false);
              return;
            } else {
              toast.show(
                `Payment of £${trip.item.tripCost} for the ${trip.item.TripName} trip payment wasnt successful as you do not have enough money in your wallet!`,
                {
                  type: 'danger',
                  placement: 'bottom',
                  duration: 5000,
                  offset: 30,
                  animationType: 'slide-in',
                },
              );
              setIsloading(false);
              return;
            }
          }
          setIsloading(false);
          return;
        });
        setIsloading(false);
        return;
      });
  };

  const getTripMembers = () => {
    const tripTransactionRef = database()
      .ref('tripTransactions')
      .orderByChild('tripName')
      .equalTo(trip.item.TripName);
    tripTransactionRef.once('value', snapshot => {
      if (snapshot.exists()) {
        const payedMembersList = Object.values(snapshot.val());
        console.log(payedMembersList);
        const Approvedmmebers = payedMembersList.filter(member => {
          console.log(member.status, 'Approved');
          return member.status === 'Approved';
        });
        setApprovedTripMembers((ApprovedtripMembers = Approvedmmebers));
        console.log('approved members', ApprovedtripMembers);
      }
    });
  };
  useEffect(() => {
    getTripMembers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      {/* Header */}
      <View style={styles.row}>
        <EntypoIcon
          name="chevron-left"
          size={32}
          color={colors.black}
          onPress={goBack}
        />
        <Text style={styles.headerText}>Trip Details</Text>
      </View>

      <ScrollView style={{width: '90%'}}>
        <View
          style={{
            flexDirection: 'column',
            borderWidth: 0.5,
            borderColor: 'grey',
            width: '100%',
            marginTop: 20,
            borderRadius: 10,
            paddingBottom: 20,
          }}>
          <View style={styles.payoutAmountTrip}>
            <Image
              source={{uri: trip.item.image}}
              style={{
                width: '100%',
                height: 300,
                borderRadius: 1,
                resizeMode: 'cover',
              }}
            />
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={styles.bigText}>{trip.item.TripName} Trip</Text>
              <Text style={styles.pushRight}>Event</Text>
            </View>
            <View style={styles.cardRow}>
              <View style={{width: 200}}>
                <Text style={styles.bigText}>{trip.item.date}</Text>
              </View>
              <Text style={styles.bigText}>£{trip.item.tripCost}</Text>
            </View>
            <View style={styles.cardRowText}>
              <Text style={styles.pushLeft}>The Trip date</Text>
              <Text style={styles.pushRight}>Trip Cost</Text>
            </View>
          </View>
        </View>
        <View>
          {isLoading ? (
            <ActivityIndicator color="purple" animating={true} />
          ) : (
            <TouchableOpacity
              onPress={() => {
                payForTrips(trip);
              }}
              style={{
                backgroundColor: colors.green,
                paddingHorizontal: 30,
                paddingVertical: 10,
                marginTop: 20,
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{color: colors.white, fontSize: 14, fontWeight: 'bold'}}>
                Pay £{trip.item.tripCost} for {trip.item.TripName} Trip
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.cardPadding1}>
          <Text style={styles.summaryText}>Trip Description</Text>
          <View style={styles.descriptionText}>
            <Text style={{color: colors.black}}>{trip.item.description}</Text>
          </View>
        </View>
        <View style={styles.cardPadding1}>
          <Text style={styles.summaryText}>List of Members for the trip</Text>
          {ApprovedtripMembers.length > 0 ? (
            <FlatList
              data={ApprovedtripMembers}
              // contentContainerStyle={styles.mainGroup}
              vertical
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity style={styles.repaymentRow2}>
                    <View style={styles.repaymentStatusRow}>
                      <Text style={styles.repaymentStausText}>name</Text>
                      <Text style={styles.summarySmallText}>{item.payer}</Text>
                    </View>
                    <View style={styles.repaymentStatusRow}>
                      <Text style={styles.repaymentStausText}>Amount</Text>
                      <Text style={styles.summarySmallText}>
                        £{item.amount}
                      </Text>
                    </View>
                    <View style={styles.repaymentStatusRow}>
                      <Text style={styles.repaymentStausText}>Status</Text>
                      <Text style={styles.summarySmallText}>{item.status}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          ) : (
            <TouchableOpacity style={styles.nohistoryView}>
              <Text style={styles.nohistoryText}>
                {' '}
                There are no members yet on this trip
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
