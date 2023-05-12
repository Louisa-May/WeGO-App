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
import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications

export default function GroupDetails({route, navigation}) {
  const transactionReference = database().ref('transactions');
  const reference = database();
  const group = route.params;
  const groupMembers = group.item.members_list.flat();
  console.log('group',groupMembers);
  const user = useSelector(
    (state) => state.user.user,
  );
  const dispatch = useDispatch();
  let [currentGroupUser, setCurrentGroupUser] = useState([]);
  let [paymentHistory, setPaymentHistory] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const toast = useToast();
  const [alGroupPayments, setGroupPayments] = useState([]);
  const getGroupMembers = () => {
    const presentUser = groupMembers.filter((member) => {
      return member.id === user.id;
    });
    setCurrentGroupUser(currentGroupUser = presentUser);
  };

  const getPymentsHistoryByAllMembers = () => {
    const groupHistory = group.item.payoutOrder
    .map((member)=>{
      return member.payments;
    });
    console.log('history',groupHistory);
    setGroupPayments(groupHistory);
  };
  const goBack = () => {
    navigation.goBack();
  };

  const getPaymentHistory = () => {
    transactionReference
      .orderByChild('contributor_id')
      .equalTo(user.id)
      .once('value', (snapshot) => {
        const paymentHistoryList = snapshot.val();
        // console.log(paymentHistoryList);
        if (paymentHistoryList) {
          const restructuredPaymentHistoryList = Object.values(paymentHistoryList);
        const restructuredPaymentHistoryListbyGroupName = restructuredPaymentHistoryList.filter((payment) =>{
          return payment.groupName === group.item.groupName;
        });
        // console.log('group',group);
        // console.log(restructuredPaymentHistoryListbyGroupName);
        setPaymentHistory(paymentHistory = restructuredPaymentHistoryListbyGroupName);
        const total = paymentHistory.reduce((prev, current) => {
          console.log(current.amount);
          return Number(prev) + Number(current.amount);
        }, 0);
        // console.log('total',total);
       setTotalAmount(total);
        } else {
          return;
        }
      }
  );
};

const checkForContributionDate = () => {
  const checkPaymentDate = group.item.members_list.filter((member) => {
    return member.payOutDate === moment(new Date()).format('MMMM Do, YYYY');
  });
  console.log('checkDate',checkPaymentDate);
  if (checkPaymentDate.length > 0) {
    toast.show('Kindly pay your contribution to the group', {
      type: 'warning',
      placement: 'bottom',
      duration: 4000,
      offset: 30,
      animationType: 'zoom-in',
    });
  }
};

const payOutUser = () => {
  console.log('wallet balance',Math.floor(group.item.wallet_balance),Math.floor(totalAmount));
  if ( Number(group.item.wallet_balance) > 0 && Number(group.item.wallet_balance) >= Number(totalAmount)) {
  loop: for (let index = 0; index < groupMembers.length; index++) {
      console.log(groupMembers[index].id, user.id, groupMembers[index].payOutDate, moment(new Date()).format('MMMM Do, YYYY'));
      if (groupMembers[index].id === user.id && groupMembers[index].payOutDate === moment(new Date()).format('MMMM Do, YYYY')) {
        console.log('wallet balance1',group.item.wallet_balance,totalAmount);
        reference.ref(`users/${user.id}`).update({
        wallet_balance: Number(user.wallet_balance) + Number(group.item.wallet_balance),
        });
        console.log(group.item.id);
        reference.ref(`groups/${group.item.id}`).update({
          wallet_balance: Number(group.item.wallet_balance) - Number(group.item.wallet_balance),
          });

          toast.show(`Payment of £${group.item.wallet_balance} to you is successful!`, {
            type: 'success',
            placement: 'bottom',
            duration: 4000,
            offset: 30,
            animationType: 'zoom-in',
          });

          let usersRef = database().ref('users').orderByChild('email').equalTo(user.email);
          console.log(usersRef);
           usersRef.once('value', snapshot => {
            console.log('snapshot', snapshot);
            if (snapshot.exists()) {
              snapshot.forEach(userSnapshot => {
                if (userSnapshot.val().email === user.email) {
                  const user = userSnapshot.val();
                  dispatch(setUser(user));
                }
              });
            }
          });
      } else {
        toast.show('Today is not your payout date', {
          type: 'warning',
          placement: 'bottom',
          duration: 4000,
          offset: 30,
          animationType: 'zoom-in',
        });
        break loop;
      }
    }

  }

};

  useEffect(() => {
    getPaymentHistory();
    getGroupMembers();
    checkForContributionDate();
    payOutUser();
    // getPymentsHistoryByAllMembers();
  }, [totalAmount]);

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
        <Text style={styles.headerText}>Group Details</Text>
      </View>

      <ScrollView style={{width:'92%'}}>
        {/* Payout Amount*/}
          <View style={{flexDirection:'column', backgroundColor:colors.grey, borderRadius:20, paddingBottom:20}}>
            <View style={styles.payoutAmount}>
              <View style={styles.cardRow}>
              {currentGroupUser.length > 0 ?
               <View style={{width:200}}>
                  <Text style={styles.bigText}>{currentGroupUser[0]?.payOutDate}</Text>
               </View> :
              <View style={{width:100}}>
                <Text style={styles.pushLeft}>You are not a member of this group</Text>
              </View>
               }
                <Text style={styles.bigText}>£{group.item.paymentAmount}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.pushLeft}>Your payout date</Text>
                <Text style={styles.pushRight}>Payout amount</Text>
              </View>
            </View>
            <View style={styles.walletBalanceView}>
              <View style={styles.walletBalance}>
                  <Text style={styles.bigTextCenter}> £{group.item.wallet_balance}</Text>
                  <Text style={styles.pushRight}>Group Wallet Balance</Text>
              </View>
            </View>
          </View>
        {/* Payout Summary*/}
        {/* <Card> */}
          <View style={styles.cardPadding}>
            <Text style={styles.summaryText}>PAYMENT SUMMARY</Text>
            {/* <Image source={require('../../../assets/images/metric.png')} /> */}
            <View style={styles.payoutAmount}>
              <View style={styles.cardRow}>
                <View style={styles.cardInnerRow}>
                  <Text style={styles.bigText}>£{totalAmount}</Text>
                  <Text style={styles.noColorText}>/£{group.item.paymentAmount}</Text>
                </View>
                <View style={styles.cardInnerRightRow}>
                  <Text style={styles.bigTextRight}>£{group.item.contributionAmount}</Text>
                  <Text style={styles.noColorText}> X {groupMembers.length}</Text>
                </View>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.pushLeft}>Total Payment</Text>
                <Text style={styles.pushRight2}>Monthly</Text>
              </View>
            </View>
            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
              <View style={styles.cardRow}>
                <Text style={styles.summaryText}>Drawing Type</Text>
                <Text style={styles.summarySmallText}>{group.item.collectionMethod}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.summaryText}>Total Payment</Text>
                <View>
                {currentGroupUser.length > 0 ?  <Text style={styles.summarySmallText}>£{totalAmount}</Text>
                : <Text style={styles.summarySmallText}>You are not a current member of this group</Text>}
                </View>
              </View>
            </View>
          </View>
        {/* </Card> */}
        {/* Payment Schedule*/}
        {/* <View style={styles.scheduleCover}>
          <Text style={styles.summaryText}>Payment Schedule</Text>
          <View style={styles.paymentToday}>
            <Text style={{color: colors.black}}>You have no payment due today</Text>
          </View>
        </View> */}
        {/* </ScrollView>
        <ScrollView> */}
        <View style={styles.cardPadding1}>
          <Text style={styles.summaryText}>Payout Payment Schedule</Text>
              {
                groupMembers.length > 0 ?
                <FlatList
                data={groupMembers}
                contentContainerStyle={styles.mainGroup}
                vertical
                keyExtractor={(item,index) => index}
                renderItem={({item, index})=> {
                return  (
                  <TouchableOpacity  style={styles.repaymentRow2}>
                      <View style={styles.paymentScheduleRow}>
                          <Text style={styles.repaymentStausTextLeft}>Name</Text>
                          <Text style={styles.summarySmallTextLeft}>{item.first_name} {item.last_name}</Text>
                      </View>
                      <View style={styles.paymentScheduleRow}>
                        <Text style={styles.repaymentStausText}>Payment No</Text>
                        <Text style={styles.summarySmallText}>Payment {index + 1} </Text>
                      </View>
                      <View style={styles.paymentScheduleRow}>
                        <Text style={styles.repaymentStausTextRight}>Payout Date</Text>
                        <Text style={styles.summarySmallTextRight}>{item.payOutDate}</Text>
                      </View>
                </TouchableOpacity>
              );
                  }  }
              />
              : <TouchableOpacity style={styles.nohistoryView}>
                <Text style={styles.nohistoryText}> You are not a member of this group hence you do not have a payment history with them</Text>
              </TouchableOpacity>

              }
          </View>
          <View style={styles.cardPadding1}>
              <Text style={styles.summaryText}>Payment History</Text>
              {
                paymentHistory.length > 0 ?
                <FlatList
                data={paymentHistory}
                // contentContainerStyle={styles.mainGroup}
                vertical
                keyExtractor={(item) => item.id}
                renderItem={({item, index})=> {
                return  (
                  <TouchableOpacity  style={styles.repaymentRow2}>
                      <View style={styles.repaymentStatusRow}>
                          <Text style={styles.repaymentStausText}>Date</Text>
                          <Text style={styles.summarySmallText}>{item.date}</Text>
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
                <Text style={styles.nohistoryText}> You have not made any payments with this group</Text>
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
