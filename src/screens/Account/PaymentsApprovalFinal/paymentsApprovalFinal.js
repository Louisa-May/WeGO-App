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
  export default function PaymentsApprovalFinal({route, navigation}) {
    const transactionReference = database().ref('transactions');
    const reference = database();
    const payments = Object.values(route.params);
    const user = useSelector(
      (state) => state.user.user,
    );
    console.log(payments);
    const dispatch = useDispatch();
    let [paymentHistory, setPaymentHistory] = useState([]);
    const toast = useToast();

    const goBack = () => {
      navigation.goBack();
    };
    const declinePayment = () => {
        const tripTransactionRef = database().ref('tripTransactions').child(payments[0].id);
                tripTransactionRef.once('value', ( snapshot ) => {
                if(snapshot.val().id === payments[0].id){
                    tripTransactionRef.update({status: 'Declined'});
                }
            });
    }

    const approvePayment = () => {
        const tripTransactionRef = database().ref('tripTransactions').child(payments[0].id);
        tripTransactionRef.on('value', ( snapshot ) => {
        if(snapshot.val().id === payments[0].id){
            tripTransactionRef.update({status: 'Approved'});
        }
    });
    }
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
          <Text style={styles.headerText}>Approve Payment</Text>
        </View>
  
        <ScrollView>
          {/* Payout Amount*/}
            <View style={{flexDirection:'column', backgroundColor:colors.grey, borderRadius:20, marginTop:30, paddingBottom:20}}>
              <View style={styles.payoutAmount}>
                <View style={styles.cardRow}>
                 <View style={{width:250}}>
                    <Text style={styles.bigText}>{payments[0].payer}</Text>
                 </View>
                  <Text style={styles.bigText}>£{payments[0].amount}</Text>
                </View>
                <View style={styles.cardRow}>
                  <Text style={styles.pushLeft}>Payer</Text>
                  <Text style={styles.pushRight}>Amount</Text>
                </View>
              </View>
              <View style={styles.payoutAmount}>
                <View style={styles.cardRow}>
                 <View style={{width:150}}>
                    <Text style={styles.bigText}>{payments[0].tripName}</Text>
                 </View>
                 <View style={{marginLeft:25}}>
                    <Text style={styles.bigText}>{payments[0].date}</Text>
                 </View>
                </View>
                <View style={styles.cardRow}>
                  <Text style={styles.pushLeft}>Trip</Text>
                  <Text style={styles.pushRight}>Payment Date</Text>
                </View>
              </View>
              <View style={styles.payoutAmount}>
                {
                    payments[0].status === 'Pending' ? 
                    (  <View style={styles.cardRow}>
                        <TouchableOpacity onPress={()=> {declinePayment()}} style={{backgroundColor:'red', paddingHorizontal:30, paddingVertical:10, borderRadius:20 }}>
                           <Text style={styles.smallText}>Decline</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> {approvePayment()}} style={{backgroundColor:colors.green, paddingHorizontal:30, paddingVertical:10, borderRadius:20, marginLeft:50 }}>
                         <Text style={styles.smallText}>Approve</Text>
                        </TouchableOpacity>
                       </View>
                    ) : (
                        <View style={{width:'95%'}}>
                            <Text style={styles.statuusText}>This transaction has already been {payments[0].status} by the Admin</Text>
                        </View>
                    )
                }
              
               
              </View>
            </View>         
          </ScrollView>
      </SafeAreaView>
    );
  }
  