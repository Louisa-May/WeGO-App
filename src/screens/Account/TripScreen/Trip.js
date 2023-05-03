/* eslint-disable prettier/prettier */
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import database from '@react-native-firebase/database';
import TravelIcon from '../../../assets/svgs/icons/travel-icon.svg'
import { useSelector } from 'react-redux';


export default function Trip({navigation}) {
  const tripReference = database().ref('Trips');
  let [trips, setTrips] = useState([]);
  const goBack = () => {
    navigation.goBack();
  };

  const createtrip = () => {
    navigation.navigate('createTripForm');
  }
 
  const user = useSelector(
    (state) => state.user.user,
  );
  const gettrips =  () => {
    tripReference
    .on('value', snapshot => {
      const tripList = snapshot.val();
      if (tripList) {
        const restructuredtrip = Object.values(tripList);
      console.log("tripslist",restructuredtrip);
        setTrips(trips = Object.values(restructuredtrip));
      } else {
        return
      }
    });
  };

useEffect(()=>{
  gettrips()
},[])

  return (
    <View style={styles.container}>
      {/* Header */}
     <View style={{width:'100%'}}>
     <View style={styles.row}>
        <EntypoIcon
          name="chevron-left"
          size={32}
          style={{marginTop:7}}
          color={colors.black}
          onPress={goBack}
        />
        <Text style={styles.headerText}>Trips</Text>
      </View>
      {/* <Text style={styles.searchText}>Search or select savings trip</Text> */}
      {/* Search Bar */}
      {/* <CustomSearch
        placeholder="Search trip"
        value={searchInput}
        setValue={setSearchInput}
      /> */}
      <Text style={styles.mainText}>Available Trips</Text>
      <View style={{width:'100%',  justifyContent: 'center',paddingHorizontal:10, alignItems: 'center', alignContent:"center"}}>
       {
        trips.length > 0 ?
      <FlatList
        data={trips}
        // contentContainerStyle={styles.maintrip}
        vertical
        keyExtractor={(item) => item.id}
        renderItem={({item, index})=> {
        return  (
          <TouchableOpacity onPress={() => {
            navigation.navigate('tripDetails', {item})
          }}  style={styles.tripCardRow}  >
            <View style={{ justifyContent:'center',  marginTop:-20, alignItems:'center' }}>
              <Image
                  source={{ uri: item.image._parts.flat()[1].uri }}
                  style={{ width: 55, height:55, borderRadius:10, resizeMode: 'contain' }}
                />
            </View>
          
            <View style={styles.maintrip}>
              <Text style={styles.tripTextBold}>{item.TripName}</Text>
              <View style={{flexDirection:'row',width:150, justifyContent:'space-between'}}>
                <Text style={styles.tripText}>£{item.tripCost}</Text>
                <Text style={styles.tripText1}>{item.date}</Text>
              </View>
            </View>
            <EntypoIcon
              name="chevron-right"
              size={32}
              color={colors.black}
              
            />
          </TouchableOpacity>
        // </Card>
      );
          }  }
      /> : <Text style={styles.mainText}> No created trips at the moment</Text>
       }
      </View>

     </View>
      {/* Create trip */}
     {
      user.role === 'admin' ?
      ( <TouchableOpacity style={styles.plusIcon} onPress={createtrip}>
       <FeatherIcon name="plus-circle" size={45} color={colors.green} />
     </TouchableOpacity> ) :
      ( null)
     }
    </View>
  );
}
