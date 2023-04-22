/* eslint-disable prettier/prettier */
import {View, StatusBar, SafeAreaView, Text, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import Card from '../../../components/card';
import CustomSearch from '../../../components/customSearch';
import CustomButton from '../../../components/customButton';
import database from '@react-native-firebase/database';
import { useEffect } from 'react';



export default function CreateGroup({navigation}) {
  const userReference = database().ref('users');

  const handleClick = () => {
    navigation.navigate('CompleteGroup');
  };
  const goBack = () => {
    navigation.goBack()
  };
  const [searchInput, setSearchInput] = useState('');
  let [users, setUsers] = useState([]);

  const getUsers =  () => {
    userReference
    .once('value')
    .then(snapshot => {
      const usersList = snapshot.val();
      setUsers(users = Object.values(usersList));
      console.log('User data: ', users);

    });

  };

  useEffect(()=>{
    getUsers();
   },[]);

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
             data={users}
             contentContainerStyle={styles.mainGroup}
            numColumns={4}
            key={'#'}
             renderItem={(user)=> {
            return  (
              <TouchableOpacity activeOpacity={0.8} onPress={(userDetail) => {
                console.log('userdetail',userDetail);
                console.log('user',user);
              }} style={styles.individualUser}>
                <View style={styles.member}>
                  <Image source={require('../../../assets/images/userImage.png')} />
                </View>
                <Text style={styles.memberNameText}>
                {user.item.first_name} {user.item.last_name}
                 </Text>
                <Text style={styles.adminNameText}>
                  {user.role}
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
