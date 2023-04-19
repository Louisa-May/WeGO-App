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

export default function ProfileDetails({navigation}) {
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
    navigation.navigate('Profile');
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
        <Text style={styles.headerText}>Profile Details</Text>
      </View>

      <View style={styles.profileImageCover}>
        <Image
          source={require('../../../assets/images/userImage.png')}
          style={styles.profileImage}
        />
      </View>

      {/* Personal Details list */}
      <View style={styles.profileCardCover}>
        <Text>Name</Text>
        <Card>
          <View style={styles.profileCardRow}>
            <Text style={styles.profileText}>FirstName LastName</Text>
          </View>
        </Card>
      </View>

      <View style={styles.profileCardCover}>
        <Text>Login Name</Text>
        <Card>
          <View style={styles.profileCardRow}>
            <Text style={styles.profileText}>Login Name</Text>
          </View>
        </Card>
      </View>

      <View style={styles.profileCardCover}>
        <Text>Mobile Number</Text>
        <Card>
          <View style={styles.profileCardRow}>
            <Text style={styles.profileText}>08065784341</Text>
          </View>
        </Card>
      </View>

      <View style={styles.profileCardCover}>
        <Text>Email</Text>
        <Card>
          <View style={styles.profileCardRow}>
            <Text style={styles.profileText}>Email Address</Text>
          </View>
        </Card>
      </View>

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
