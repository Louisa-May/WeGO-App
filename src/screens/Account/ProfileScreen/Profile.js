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
import LogoutIcon from '../../../assets/svgs/icons/log-out-icon.svg'
import { useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { resetGroupMembers, resetUser } from '../../../../redux-store/userAuth';
import { useDispatch } from 'react-redux';

export default function Profile({navigation}) {
  const user = useSelector(
    (state) => state.user.user,
  );
  const dispatch = useDispatch()
  const handleClick = () => {
    navigation.navigate('ProfileDetails');
  };
  const onSignOut = () => {
    auth()
  .signOut()
  .then(() => 
  {
    console.log('User signed out!')
    dispatch(resetUser())
    dispatch(resetGroupMembers());
    console.log('user',user);
  }
  )
  .catch((error) => console.log(error))
  dispatch(resetUser())
  console.log('user',user);
  
  }
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
        <View style={{width:'90%', backgroundColor:colors.deepGrey, borderRadius:20, padding:20}}>
                <Text style={styles.profileText}>Name : {user.first_name} {user.last_name} </Text>
                <Text style={styles.profileText}>Email : {user.email}  </Text>
          </View>
      </View>
      {/* <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center',alignContent:'center', marginTop:20}}>
        <View style={{width:'90%', height:100, backgroundColor:colors.grey, borderRadius:20, padding:20, paddingTop:30, flexDirection:'row', justifyContent:'space-around'}}>
           <FontAwesomeIcon name="bank" size={32} color={colors.black} />
          <Text style={styles.profileText1}>Payment Details</Text>
          <EntypoIcon
            name="chevron-right"
            size={32}
            color={colors.black}
            onPress={''}
            style={styles.chevron}
          />
          </View>
      </TouchableOpacity>
      <TouchableOpacity style={{width:'100%', justifyContent:'center', alignItems:'center',alignContent:'center', marginTop:20}}>
        <View style={{width:'90%', height:100, backgroundColor:colors.grey, borderRadius:20, padding:20, paddingTop:30, flexDirection:'row', justifyContent:'space-around'}}>
        <FontAwesomeIcon name="group" size={32} color={colors.black} />
          <Text style={styles.profileText1}>Invite Friends to WeGO</Text>
          <EntypoIcon
            name="chevron-right"
            size={32}
            color={colors.black}
            onPress={''}
            style={styles.chevron}
            />
          </View>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={onSignOut} style={{width:'100%', justifyContent:'center', alignItems:'center',alignContent:'center', marginTop:20}}>
        <View style={{width:'90%', height:100, backgroundColor:colors.deepGrey, borderRadius:20, padding:20, paddingTop:30, flexDirection:'row', justifyContent:'space-around'}}>
        <View style={styles.profileCardRow}>
          {/* <FontAwesomeIcon icon="fa-arrow-right-from-bracket" size={32} color={colors.black} /> */}
          <LogoutIcon height={32} width={32} />
          <Text style={styles.profileText1}>Log Out </Text>
        </View>
          </View>
      </TouchableOpacity>
     
       
      
    </SafeAreaView>
  );
}
