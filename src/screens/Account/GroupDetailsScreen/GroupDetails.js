/* eslint-disable prettier/prettier */
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import Card from '../../../components/card';
import { useSelector, useStore } from 'react-redux';
import { useEffect, useState } from 'react';

export default function GroupDetails({route, navigation}) {
  const group = route.params;
  const groupMembers = group.item.members_list[group.item.members_list.length-1]
  const user = useSelector(
    (state) => state.user.user,
  );
  const [currentGroupUser, setCurrentGroupUser] = useState([]);
  const getGroupMembers = () => {
    const presentUser = groupMembers.filter((member) => {
      console.log(member.id, user.id);
      return member.id === user.id
    })
    console.log(presentUser);
    setCurrentGroupUser(presentUser);
  }
  const goBack = () => {
    navigation.navigate('Group');
  };


  useEffect(() => {
    getGroupMembers();
  }, [])

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
                  <Text style={styles.bigText}>£4000</Text>
                  <Text style={styles.noColorText}>/£{group.item.paymentAmount}</Text>
                </View>
                <View style={styles.cardInnerRow}>
                  <Text style={styles.bigText}>£{group.item.contributionAmount}</Text>
                  <Text style={styles.noColorText}> X 9</Text>
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
                {currentGroupUser.length > 0 ?  <Text style={styles.summarySmallText}>£{user.wallet_amount}</Text>
                : <Text style={styles.summarySmallText}>You are not a current member of this group</Text>}
                </View>
              </View>
            </View>
          </View>
        {/* </Card> */}
        {/* Payment Schedule*/}
        <View style={styles.scheduleCover}>
          <Text style={styles.summaryText}>PAYMENT SCHEDULE</Text>
          <View style={styles.paymentToday}>
            <Text>You have no payment due today</Text>
          </View>
        </View>

        {/* <Card> */}
          <View style={styles.cardPadding}>
            <Card>
              <View style={styles.repaymentRow}>
                <Text style={styles.repaymentSmallText}>Sep 20</Text>
                <View style={styles.repaymentStatusRow}>
                  <Text style={styles.repaymentStausText}>Paid</Text>
                  <Text style={styles.summarySmallText}>Payment 1</Text>
                </View>
                <Text style={styles.repaymentSmallText}>£1000</Text>
              </View>
            </Card>
            <Card>
              <View style={styles.repaymentRow}>
                <Text style={styles.repaymentSmallText}>Sep 20</Text>
                <View style={styles.repaymentStatusRow}>
                  <Text style={styles.repaymentStausText}>Paid</Text>
                  <Text style={styles.summarySmallText}>Payment 2</Text>
                </View>
                <Text style={styles.repaymentSmallText}>£1000</Text>
              </View>
            </Card>
            <Card>
              <View style={styles.repaymentRow}>
                <Text style={styles.repaymentSmallText}>Sep 20</Text>
                <View style={styles.repaymentStatusRow}>
                  <Text style={styles.repaymentStausText}>Paid</Text>
                  <Text style={styles.summarySmallText}>Payment 3</Text>
                </View>
                <Text style={styles.repaymentSmallText}>£1000</Text>
              </View>
            </Card>
            <Card>
              <View style={styles.repaymentRow}>
                <Text style={styles.repaymentSmallText}>Sep 20</Text>
                <View style={styles.repaymentStatusRow}>
                  <Text style={styles.repaymentStausText}>Paid</Text>
                  <Text style={styles.summarySmallText}>Payment 4</Text>
                </View>
                <Text style={styles.repaymentSmallText}>£1000</Text>
              </View>
            </Card>
            <Card>
              <View style={styles.repaymentRow}>
                <Text style={styles.repaymentSmallText}>Sep 20</Text>
                <View style={styles.repaymentStatusRow}>
                  <Text style={styles.repaymentStausText}>Paid</Text>
                  <Text style={styles.summarySmallText}>Payment 5</Text>
                </View>
                <Text style={styles.repaymentSmallText}>£1000</Text>
              </View>
            </Card>
            <Card>
              <View style={styles.repaymentRow}>
                <Text style={styles.repaymentSmallText}>Sep 20</Text>
                <View style={styles.repaymentStatusRow}>
                  <Text style={styles.repaymentStausText}>Paid</Text>
                  <Text style={styles.summarySmallText}>Payment 6</Text>
                </View>
                <Text style={styles.repaymentSmallText}>£1000</Text>
              </View>
            </Card>
            <Card>
              <View style={styles.repaymentRow}>
                <Text style={styles.repaymentSmallText}>Sep 20</Text>
                <View style={styles.repaymentStatusRow}>
                  <Text style={styles.repaymentStausText}>Paid</Text>
                  <Text style={styles.summarySmallText}>Payment 7</Text>
                </View>
                <Text style={styles.repaymentSmallText}>£1000</Text>
              </View>
            </Card>
            <Card>
              <View style={styles.repaymentRow}>
                <Text style={styles.repaymentSmallText}>Sep 20</Text>
                <View style={styles.repaymentStatusRow}>
                  <Text style={styles.repaymentStausText}>Paid</Text>
                  <Text style={styles.summarySmallText}>Payment 8</Text>
                </View>
                <Text style={styles.repaymentSmallText}>£1000</Text>
              </View>
            </Card>
            <Card>
              <View style={styles.repaymentRow}>
                <Text style={styles.repaymentSmallText}>Sep 20</Text>
                <View style={styles.repaymentStatusRow}>
                  <Text style={styles.repaymentStausText}>Paid</Text>
                  <Text style={styles.summarySmallText}>Payment 9</Text>
                </View>
                <Text style={styles.repaymentSmallText}>£1000</Text>
              </View>
            </Card>
          </View>
        {/* </Card> */}
      </ScrollView>
    </SafeAreaView>
  );
}
