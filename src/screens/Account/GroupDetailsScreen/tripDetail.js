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
    Alert,
  } from 'react-native';
  import React from 'react';
  import EntypoIcon from 'react-native-vector-icons/Entypo';
  import {styles} from './styles';
  import {colors} from '../../../constants/colors';
  import Card from '../../../components/card';
  import { useSelector } from 'react-redux';
  import { useEffect, useState } from 'react';
  import database from '@react-native-firebase/database';
  import moment from 'moment';
  import { useToast } from 'react-native-toast-notifications';
  import { useDispatch } from 'react-redux';
  import { setUser } from '../../../../redux-store/userAuth';
  
  export default function TripDetails({route, navigation}) {
    const transactionReference = database().ref('transactions');
    const reference = database();
    const trip = route.params;
    let [ApprovedtripMembers, setApprovedTripMembers] = useState([])
    const user = useSelector(
      (state) => state.user.user,
    );
    const dispatch = useDispatch();
    let [paymentHistory, setPaymentHistory] = useState([]);
    const toast = useToast();

    const goBack = () => {
      navigation.goBack();
    };


    const getTripMembers = () => {
        const tripTransactionRef = database().ref('tripTransactions').orderByChild('tripName').equalTo(trip.item.TripName);
        tripTransactionRef.once('value', (snapshot) => {
            if (snapshot.exists()) {
                    const payedMembersList = Object.values(snapshot.val())
                    console.log(payedMembersList);
                  const Approvedmmebers = payedMembersList.filter((member) => {
                    console.log(member.status, 'Approved');
                   return member.status === 'Approved';
                  })
                  setApprovedTripMembers(ApprovedtripMembers=Approvedmmebers)
                  console.log('approved members', ApprovedtripMembers);
            }})

           
      
    }
    useEffect(() => {
        getTripMembers()
    },[])

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
  
        <ScrollView>
          {/* Payout Amount*/}
            <View style={{flexDirection:'column', backgroundColor:colors.grey, borderRadius:20, paddingBottom:20}}>
              <View style={styles.payoutAmount}>
                    <View style={styles.walletBalanceView}>
                        <View style={styles.walletBalance}>
                            <Text style={styles.bigTextCenter}>{trip.item.TripName}</Text>
                        </View>
                    </View>
                <View style={styles.cardRow}>
                   
                 <View style={{width:200}}>
                    <Text style={styles.bigText}>{trip.item.date}</Text>
                 </View>
                  <Text style={styles.bigText}>£{trip.item.tripCost}</Text>
                </View>
                <View style={styles.cardRow}>
                  <Text style={styles.pushLeft}>The Trip date</Text>
                  <Text style={styles.pushRight}>Trip Cost</Text>
                </View>
              </View>
            </View>
            <View style={styles.cardPadding1}>
                <Text style={styles.summaryText}>List of Members for the trip</Text>
                {
                  ApprovedtripMembers.length > 0 ?
                  <FlatList
                  data={ApprovedtripMembers}
                  // contentContainerStyle={styles.mainGroup}
                  vertical
                  keyExtractor={(item) => item.id}
                  renderItem={({item, index})=> {
                  return  (
                    <TouchableOpacity  style={styles.repaymentRow2}>
                        <View style={styles.repaymentStatusRow}>
                            <Text style={styles.repaymentStausText}>name</Text>
                            <Text style={styles.summarySmallText}>{item.payer}</Text>
                        </View>
                        <View style={styles.repaymentStatusRow}>
                          <Text style={styles.repaymentStausText}>Payment No</Text>
                          <Text style={styles.summarySmallText}>Payment {index + 1} </Text>
                        </View>
                        <View style={styles.repaymentStatusRow}>
                          <Text style={styles.repaymentStausText}>Amount</Text>
                          <Text style={styles.summarySmallText}>£{item.amount}</Text>
                        </View>
                        <View style={styles.repaymentStatusRow}>
                          <Text style={styles.repaymentStausText}>Status</Text>
                          <Text style={styles.summarySmallText}>{item.status}</Text>
                        </View>
                  </TouchableOpacity>
                );
                    }  }
                /> : <TouchableOpacity style={styles.nohistoryView}>
                  <Text style={styles.nohistoryText}> There are no members yet on this trip</Text>
                </TouchableOpacity>
  
                }
            </View>
  
            {/* <View style={styles.cardPadding1}>
                <Text style={styles.summaryText}>Payment History by Members</Text>
                {
                  alGroupPayments.length > 0 ?
                  <FlatList
                  data={alGroupPayments}
                  // contentContainerStyle={styles.mainGroup}
                  vertical
                  keyExtractor={(item, index) => index}
                  renderItem={({item, index} )=> {
                  return  (
                    <TouchableOpacity  style={styles.repaymentRow1}>
                      {
                        item.map((payments,index2) => {
                          return (
                           <View style={{flexDirection:'row', justifyContent:'space-between'}} >
                             <View style={styles.repaymentStatusRow1}>
                                <Text style={styles.repaymentStausTextLeft}>Name</Text>
                                <Text style={styles.summarySmallTextLeft}>{payments.first_name} {payments.last_name}</Text>
                            </View>
                            <View style={styles.repaymentStatusRow1}>
                              <Text style={styles.repaymentStausText}>Payment No</Text>
                              <Text style={styles.summarySmallText}>Payment {Number(index) + 1} </Text>
                            </View>
                            <View style={styles.repaymentStatusRow1}>
                              <Text style={styles.repaymentStausTextRight}>Status</Text>
                              <Text style={styles.summarySmallTextRight}>{payments.paid ? 'paid' : 'Unpaid'}</Text>
                            </View>
                           </View>
                          );
                        })
                      }
                  </TouchableOpacity>
                );
                    }  }
                /> : <TouchableOpacity style={styles.nohistoryView}>
                  <Text style={styles.nohistoryText}> You are not a member of this group hence you do not have a payment history with them</Text>
                </TouchableOpacity>
  
                }
            </View> */}
          </ScrollView>
      </SafeAreaView>
    );
  }
  