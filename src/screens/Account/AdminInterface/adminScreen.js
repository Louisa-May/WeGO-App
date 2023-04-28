/* eslint-disable prettier/prettier */
import {
    View,
    StatusBar,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
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
  export default function AdminScreen() {

    const navigation = useNavigation();

    const goToGroups = () => {
        navigation.navigate('groups');
    };
    const goToTrips = () => {
        navigation.navigate('Trips');
    };

    const approvePayments = () => {
        navigation.navigate('approvePayments');
    };

    const viewUsers = () => {
      navigation.navigate('users');
  };

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        {/* Header */}
        <View style={styles.row}>
            <WegoLogo  width={200} height={200} />
        </View>
          <TouchableOpacity onPress={goToTrips} style={styles.tripCardRow}>
            <TripIcon  width={30} height={30}  style={styles.tripImageCover} />
            <View style={styles.tripInnerRow}>
              <Text style={styles.tripText}>Create and Update Trips</Text>
            </View>
            <EntypoIcon
              name="chevron-right"
              size={32}
              color={colors.black}
              style={styles.chevron}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => approvePayments()} style={styles.tripCardRow}>
           <PayoutIcon width={35} height={35} style={styles.tripImageCover}  />
            <View style={styles.tripInnerRow}>
              <Text style={styles.tripText}>Approve Payments</Text>
            </View>
            <EntypoIcon
              name="chevron-right"
              size={32}
              color={colors.black}
              style={styles.chevron}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToGroups} style={styles.tripCardRow} >
            <GroupIcon width={35} height={35} style={styles.tripImageCover}  />
            <View style={styles.tripInnerRow}>
              <Text style={styles.tripText}>View Groups</Text>
            </View>
            <EntypoIcon
              name="chevron-right"
              size={32}
              color={colors.black}
              style={styles.chevron}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={viewUsers} style={styles.tripCardRow}>
            <ProfileIcon width={35} height={35} style={styles.tripImageCover}  />
            <View style={styles.tripInnerRow}>
              <Text style={styles.tripText}>View Users</Text>
            </View>
            <EntypoIcon
              name="chevron-right"
              size={32}
              color={colors.black}
              style={styles.chevron}
            />
          </TouchableOpacity>
      </SafeAreaView>
    );
  }
