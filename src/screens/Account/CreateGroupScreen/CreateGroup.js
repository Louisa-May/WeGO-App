/* eslint-disable prettier/prettier */
import {View, StatusBar, SafeAreaView, Text, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import Card from '../../../components/card';
import CustomSearch from '../../../components/customSearch';
import CustomButton from '../../../components/customButton';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import { useEffect } from 'react';
import { firebase } from '@react-native-firebase/database';



export default function CreateGroup({navigation}) {
  const reference = database().ref('/Users')
 
  const handleClick = () => {
    navigation.navigate('CompleteGroup');
  };
  const goBack = () => {
    navigation.goBack()
  };
  const [searchInput, setSearchInput] = useState('');
  let [users, setUsers] = useState([]);

  const getUsers =  () => {
    database()
    .ref('/users/123')
    .on('value', snapshot => {
      console.log('User data: ', snapshot.val());
    });
  //   database()
  // .ref('/users')
  // .on('value', snapshot => {
  //   console.log('User data: ', snapshot.val());
  // })

    // setUsers(reference);
    // console.log('users',users);
  };

  useEffect(()=>{
   getUsers();
  },[setUsers]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      {/* <ScrollView style={{width:'90%', height:800, }}> */}
      <View style={styles.row}>
        <EntypoIcon
          name="chevron-left"
          size={32}
          color={colors.black}
          onPress={goBack}
        />
        <Text style={styles.headerText}>Create Group</Text>
      </View>
      {/* <Text style={styles.searchText}>Edit Members</Text> */}
      {/* Search Bar */}
      {/* <CustomSearch
        placeholder="Search Contacts"
        value={searchInput}
        setValue={setSearchInput}
      /> */}

      {/* Members list */}
      {/* <Card> */}
        <View style={styles.mainText}>
          <Text style={styles.searchText}>Available slots: 3/12</Text>
          {/* <Text style={styles.searchText}>Hold and drag to reorder</Text> */}
        </View>
            <FlatList 
            // refreshControl={
            //     <RefreshControl
            //     colors={["tomato","gray"]}
            //     refreshing
            // }
            // showsHorizontalScrollIndicator={false}
             data={users}
             contentContainerStyle={styles.mainGroup}
            numColumns={2}
            key={'#'}
             renderItem={({user})=> {
            return  (
              <TouchableOpacity activeOpacity={0.8} onPress={(userDetail) => {
                console.log(userDetail);
                console.log(user);
              }} style={styles.individualUser}>
                <View style={styles.member}>
                  <Image source={require('../../../assets/images/userImage.png')} />
                </View>
                <Text style={styles.memberNameText}>
                  {/* {user} */}
                 {/* {user.last_name} */}
                 </Text>
                <Text style={styles.adminNameText}>
                  {/* {user._data.role} */}
                  </Text>
              </TouchableOpacity>
            );
               }  }
             keyExtractor={(user,index) => index}
            />
        {/* Continue Button Section */}
        <View style={styles.button}>
          <CustomButton text="Continue" onPress={handleClick} />
        </View>
      {/* </Card> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
