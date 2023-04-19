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

export default function GroupDetails({navigation}) {
  //   const handleClick = () => {
  //     navigation.navigate('Group');
  //   };
  const goBack = () => {
    navigation.navigate('Group');
  };

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
        <Card>
          <View style={styles.payoutAmount}>
            <View style={styles.cardRow}>
              <Text style={styles.bigText}>May 24, 2023</Text>
              <Text style={styles.bigText}>£9000</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.pushLeft}>Your payout date</Text>
              <Text style={styles.pushRight}>Payout amount</Text>
            </View>
          </View>
        </Card>
        {/* Payout Summary*/}
        <Card>
          <View style={styles.cardPadding}>
            <Text style={styles.summaryText}>PAYMENT SUMMARY</Text>
            <Image source={require('../../../assets/images/metric.png')} />
            <View style={styles.payoutAmount}>
              <View style={styles.cardRow}>
                <View style={styles.cardInnerRow}>
                  <Text style={styles.bigText}>£4000</Text>
                  <Text style={styles.noColorText}>/£9000</Text>
                </View>
                <View style={styles.cardInnerRow}>
                  <Text style={styles.bigText}>£1000</Text>
                  <Text style={styles.noColorText}> X 9</Text>
                </View>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.pushLeft}>Total Payment</Text>
                <Text style={styles.pushRight2}>Monthly</Text>
              </View>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.summaryText}>Drawing Type</Text>
              <Text style={styles.summarySmallText}>Random</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.summaryText}>Total Payment</Text>
              <Text style={styles.summarySmallText}>£9000</Text>
            </View>
          </View>
        </Card>
        {/* Payment Schedule*/}
        <View style={styles.scheduleCover}>
          <Text style={styles.summaryText}>PAYMENT SCHEDULE</Text>
          <View style={styles.paymentToday}>
            <Text>You have no payment due today</Text>
          </View>
        </View>

        <Card>
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
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
