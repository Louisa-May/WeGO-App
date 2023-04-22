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
import { useSelector } from 'react-redux';

export default function Profile({navigation}) {
  const user = useSelector(
    (state) => state.user.user,
  );
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
      <IonIcon
            name="person-circle-outline"
            size={102}
            color={colors.black}
          />
      </View>

      {/* Trip list */}
      {/* <Card> */}
     <View style={{width:'100%', alignItems:'center',justifyContent:"center", flexDirection:'row'}}>
        <View style={{flexDirection:'row', width:250, }}>
            <FontAwesomeIcon name="info-circle" size={32} style={{marginTop:13}} color={colors.black} />
            <Text style={styles.bigText}>Personal Details</Text>
        </View>
     </View>
      <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
        <View style={{width:'90%', backgroundColor:colors.grey, borderRadius:20, padding:20}}>
                <Text style={styles.profileText}>Name : {user.first_name} {user.last_name} </Text>
                <Text style={styles.profileText}>Role : {user.email}  </Text>
                <Text style={styles.profileText}>Role : {user.role}  </Text>
          </View>
      </View>
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
