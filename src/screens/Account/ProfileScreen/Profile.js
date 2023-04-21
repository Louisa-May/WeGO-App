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
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import Card from '../../../components/card';

export default function Profile({navigation}) {
  
  const handleClick = () => {
    navigation.navigate('ProfileDetails');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

      {/* Header */}
      <View style={styles.row}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.profileImageCover}>
        <Image
          source={require('../../../assets/images/userImage.png')}
          style={styles.profileImage}
        />
      </View>

      {/* Trip list */}
      <Card>
        <View style={styles.profileCardRow}>
          <IonIcon
            name="person-circle-outline"
            size={32}
            color={colors.black}
          />
          <Text style={styles.profileText}>Personal Details</Text>
          <EntypoIcon
            name="chevron-right"
            size={32}
            color={colors.black}
            onPress={() => handleClick()}
            style={styles.chevron}
          />
        </View>
      </Card>
      <Card>
        <View style={styles.profileCardRow}>
          <FontAwesomeIcon name="bank" size={32} color={colors.black} />
          <Text style={styles.profileText}>Payment Details</Text>
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
        <View style={styles.profileCardRow}>
          <AntDesignIcon name="contacts" size={32} color={colors.black} />
          <Text style={styles.profileText}>Contacts</Text>
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
        <View style={styles.profileCardRow}>
          <FontAwesomeIcon name="group" size={32} color={colors.black} />
          <Text style={styles.profileText}>Invite Friends to WeGO</Text>
          <EntypoIcon
            name="chevron-right"
            size={32}
            color={colors.black}
            onPress={''}
            style={styles.chevron}
          />
        </View>
      </Card>
    </SafeAreaView>
  );
}
