/* eslint-disable prettier/prettier */
import {
    View,
    StatusBar,
    SafeAreaView,
    Text,
    TouchableOpacity,
    FlatList
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import EntypoIcon from 'react-native-vector-icons/Entypo';
 import { styles } from './styles';
  import {colors} from '../../../constants/colors';
  import WegoLogo from '../../../assets/svgs/icons/wegoLogo.svg';
  import GroupIcon from '../../../assets/svgs/tab-icons/groupIcon.svg';
  import HomeIcon from '../../../assets/svgs/tab-icons/home-icon.svg';
  import TripIcon from '../../../assets/svgs/tab-icons/trip.svg';
  import PayoutIcon from '../../../assets/svgs/tab-icons/payout.svg';
  import ProfileIcon from '../../../assets/svgs/tab-icons/profile.svg';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
  export default function ApprovePaymentsScreen() {
    const transactionReference = database().ref('transactions');
    let [paymentHistory, setPaymentHistory] = useState([]);

    const navigation = useNavigation();

    const getPaymentHistory = () => {
        transactionReference
        //   .orderByChild('contributor_id')
        //   .equalTo(user.id)
          .on('value', (snapshot) => {
            const paymentHistoryList = snapshot.val();
            if (paymentHistoryList) {
              const restructuredPaymentHistoryList = Object.values(paymentHistoryList);

            console.log('payments',restructuredPaymentHistoryList);
            setPaymentHistory(paymentHistory = restructuredPaymentHistoryList);
            } else {
              return;
            }
          }
      );
    };

    useEffect(() => {
        getPaymentHistory();
      }, []);

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        {/* Header */}
        <View style={styles.row}>
            <WegoLogo  width={200} height={200} />
        </View>
        <View style={styles.cardPadding1}>
          <Text style={styles.summaryText}>Payment History</Text>
              {
                paymentHistory.length > 0 ?
                <FlatList
                data={paymentHistory}
                contentContainerStyle={styles.flatlist}
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
      </SafeAreaView>
    );
  }
