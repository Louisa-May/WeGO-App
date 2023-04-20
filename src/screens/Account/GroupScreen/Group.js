import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import Card from '../../../components/card';
import CustomSearch from '../../../components/customSearch';

export default function Group({navigation}) {
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
  const createGroup = () => {
    navigation.navigate('CreateGroup');
  };
  const groupDetails = () => {
    navigation.navigate('GroupDetails');
  };
  const [searchInput, setSearchInput] = useState('');

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
        <Text style={styles.headerText}>Group</Text>
      </View>
      <Text style={styles.searchText}>Search or select savings group</Text>
      {/* Search Bar */}
      <CustomSearch
        placeholder="Search Group"
        value={searchInput}
        setValue={setSearchInput}
      />
      <Text style={styles.mainText}>All Groups</Text>

      {/* Group list */}
      <Card>
        <View style={styles.groupCardRow}>
          <Image
            source={require('../../../assets/images/groupImage1.png')}
            style={styles.groupImageCover}
          />
          <Text style={styles.groupText}>Trip to Mauritius</Text>
          <EntypoIcon
            name="chevron-right"
            size={32}
            color={colors.black}
            onPress={groupDetails}
          />
        </View>
      </Card>
      <Card>
        <View style={styles.groupCardRow}>
          <Image
            source={require('../../../assets/images/groupImage1.png')}
            style={styles.groupImageCover}
          />
          <Text style={styles.groupText}>Jazz Club</Text>
          <EntypoIcon
            name="chevron-right"
            size={32}
            color={colors.black}
            onPress={groupDetails}
          />
        </View>
      </Card>
      <Card>
        <View style={styles.groupCardRow}>
          <Image
            source={require('../../../assets/images/groupImage1.png')}
            style={styles.groupImageCover}
          />
          <Text style={styles.groupText}>HBL Office Group</Text>
          <EntypoIcon
            name="chevron-right"
            size={32}
            color={colors.black}
            onPress={groupDetails}
          />
        </View>
      </Card>
      <Card>
        <View style={styles.groupCardRow}>
          <Image
            source={require('../../../assets/images/groupImage1.png')}
            style={styles.groupImageCover}
          />
          <Text style={styles.groupText}>Family Trip</Text>
          <EntypoIcon
            name="chevron-right"
            size={32}
            color={colors.black}
            onPress={groupDetails}
          />
        </View>
      </Card>

      {/* Create Group */}
      <TouchableOpacity style={styles.plusIcon} onPress={createGroup}>
        <FeatherIcon name="plus-circle" size={45} color={colors.green} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
