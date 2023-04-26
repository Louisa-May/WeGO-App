/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import Card from '../../../components/card';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';

export default function GroupDetails({route, navigation}) {
  const transactionReference = database().ref('transactions');
  const group = route.params;
  const groupMembers = group.item.members_list.flat()
  console.log('group',groupMembers);
  const user = useSelector(
    (state) => state.user.user,
  );
  const [currentGroupUser, setCurrentGroupUser] = useState([]);
  let [paymentHistory, setPaymentHistory] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const getGroupMembers = () => {
    const presentUser = groupMembers.filter((member) => {
      return member.id === user.id;
    });
    setCurrentGroupUser(presentUser);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const getPaymentHistory = () => {
    transactionReference
      .orderByChild('contributor_id')
      .equalTo(user.id)
      .on('value', (snapshot) => {
        const paymentHistoryList = snapshot.val();
        // console.log(paymentHistoryList);
        if (paymentHistoryList) {
          const restructuredPaymentHistoryList = Object.values(paymentHistoryList);
        const restructuredPaymentHistoryListbyGroupName = restructuredPaymentHistoryList.filter((payment) =>{
          return payment.groupName === group.item.groupName;
        });
        console.log('group',group);
        // console.log(restructuredPaymentHistoryListbyGroupName);
        setPaymentHistory(paymentHistory = restructuredPaymentHistoryListbyGroupName);
        const total = paymentHistory.reduce((prev, current) => {
          console.log(current.amount);
          return Number(prev) + Number(current.amount);
        }, 0);
        console.log('total',total);
       setTotalAmount(total);
        } else {
          return;
        }
      }
  );
};


  useEffect(() => {
    getPaymentHistory();
    getGroupMembers();
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

      <ScrollView>
        {/* Payout Amount*/}
          <View style={styles.payoutAmount}>
            <View style={styles.cardRow}>
              <Text style={styles.bigText}>May 24, 2023</Text>
              <Text style={styles.bigText}>£{group.item.paymentAmount}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.pushLeft}>Your payout date</Text>
              <Text style={styles.pushRight}>Payout amount</Text>
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
                <View style={styles.cardInnerRow}>
                  <Text style={styles.bigText}>£{group.item.contributionAmount}</Text>
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
                <View style={{width:200}}>
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
                  <TouchableOpacity  style={styles.repaymentRow1}>
                      <View style={styles.paymentScheduleRow}>
                          <Text style={styles.repaymentStausText}>Name</Text>
                          <Text style={styles.summarySmallText}>{item.first_name} {item.last_name}</Text>
                      </View>
                      <View style={styles.paymentScheduleRow}>
                        <Text style={styles.repaymentStausText}>Payment No</Text>
                        <Text style={styles.summarySmallText}>Payment {index + 1} </Text>
                      </View>
                      <View style={styles.paymentScheduleRow}>
                        <Text style={styles.repaymentStausText}>Payout Date</Text>
                        {/* <Text style={styles.summarySmallText}>£{item.amount}</Text> */}
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
                  <TouchableOpacity  style={styles.repaymentRow1}>
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
                <Text style={styles.nohistoryText}> You are not a member of this group hence you do not have a payment history with them</Text>
              </TouchableOpacity>

              }
             
          </View>
        </ScrollView>
     
    </SafeAreaView>
  );
}
