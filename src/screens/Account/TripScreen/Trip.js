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
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import Card from '../../../components/card';

export default function Trip({navigation}) {
  const goToHome = () => {
    navigation.navigate('Dashboard');
  };
  const goToGroup = () => {
    navigation.navigate('Group');
  };
  const goToPayout = () => {
    navigation.navigate('Payout');
  };
  const goToTrip = () => {
    navigation.navigate('Trip');
  };
  const goToProfile = () => {
    navigation.navigate('Profile');
  };
  const goBack = () => {
    navigation.navigate('Dashboard');
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
        <Text style={styles.headerText}>Trip</Text>
      </View>
      <Text style={styles.mainText}>Choose your trip</Text>

      {/* Trip list */}
      <Card>
        <View style={styles.tripCardRow}>
          <Image
            source={require('../../../assets/images/groupImage1.png')}
            style={styles.tripImageCover}
          />
          <View style={styles.tripInnerRow}>
            <Text style={styles.tripText}>Premium Travels</Text>
            <Text style={styles.tripText}>£5,000 - £10,000</Text>
          </View>

          <EntypoIcon
            name="chevron-right"
            size={32}
            color={colors.black}
            onPress={''}
            style={styles.chevron}
          />
        </View>
      </Card>
      <Card>
        <View style={styles.tripCardRow}>
          <Image
            source={require('../../../assets/images/groupImage1.png')}
            style={styles.tripImageCover}
          />
          <View style={styles.tripInnerRow}>
            <Text style={styles.tripText}>Standard Travels</Text>
            <Text style={styles.tripText}>£2,000 - £5,000</Text>
          </View>

          <EntypoIcon
            name="chevron-right"
            size={32}
            color={colors.black}
            onPress={''}
            style={styles.chevron}
          />
        </View>
      </Card>
      <Card>
        <View style={styles.tripCardRow}>
          <Image
            source={require('../../../assets/images/groupImage1.png')}
            style={styles.tripImageCover}
          />
          <View style={styles.tripInnerRow}>
            <Text style={styles.tripText}>Regular Travels</Text>
            <Text style={styles.tripText}>Below £5,000</Text>
          </View>

          <EntypoIcon
            name="chevron-right"
            size={32}
            color={colors.black}
            onPress={''}
            style={styles.chevron}
          />
        </View>
      </Card>
      <Card>
        <View style={styles.tripCardRow}>
          <Image
            source={require('../../../assets/images/groupImage1.png')}
            style={styles.tripImageCover}
          />
          <View style={styles.tripInnerRow}>
            <Text style={styles.tripText}>Short Trips</Text>
            <Text style={styles.tripText}>Less than £,1000</Text>
          </View>

          <EntypoIcon
            name="chevron-right"
            size={32}
            color={colors.black}
            onPress={''}
            style={styles.chevron}
          />
        </View>
      </Card>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={goToHome}>
          <Text style={styles.mediumText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToGroup}>
          <Text style={styles.mediumText}>Group</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToPayout}>
          <Text style={styles.mediumText}>Payout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToTrip}>
          <Text style={styles.mediumText}>Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToProfile}>
          <Text style={styles.mediumText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
