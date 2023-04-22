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
import UserImage from "../../../assets/svgs/images/userProfileImage.svg"
import Checkmark from "../../../assets/svgs/icons/icons8-checkmark.svg"



export default function CreateGroup({navigation}) {
  const userReference = database().ref('users');
  const [groupMembers, setGroupMembers] = useState([])

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
    .on('value', snapshot => {
      const usersList = snapshot.val();
      setUsers(users = Object.values(usersList));
    });

  };

  const createGroup = () => {

  }
  const addMember = (email) => {
       const clickedUser = users.filter((member)=>{
      return member.email === email
    })
  
      if (clickedUser[0].clicked) {
         return database()
          .ref(`/users/${clickedUser[0].id}`)
          .update({
            clicked: false,
          })
          .then(() => {
            // console.log('Data updated.')
            // console.log('email',clickedUser)
           const newGroupMembers = groupMembers.filter((member) => {
              return member.id !== clickedUser
            } )
            setGroupMembers(newGroupMembers);
            console.log('groupMmebers', groupMembers);
        })
      } else {
          database()
          .ref(`/users/${clickedUser[0].id}`)
          .update({
            clicked: true,
          })
          .then(() => {
            // console.log('Data updated.')
            // console.log('email',clickedUser)
            groupMembers.push(clickedUser);
            setGroupMembers(groupMembers);
            console.log('groupMmebers', groupMembers);
        });
      }
}

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
              <TouchableOpacity activeOpacity={0.8} onPress={() => addMember(user.item.email)} style={styles.individualUser}>
                <View style={styles.member}>
                 {
                  user.item.clicked === true &&  <Checkmark style={{marginLeft:50}} />
                 }
                  <UserImage />
                </View>
                <Text style={styles.memberNameText}>
                {user.item.first_name} {user.item.last_name}
                 </Text>
                <Text style={styles.adminNameText}>
                  {user.item.role}
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
