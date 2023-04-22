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
import UserImage from "../../../assets/svgs/images/userProfileImage.svg";
import Checkmark from "../../../assets/svgs/icons/icons8-checkmark.svg";



export default function CreateGroup({navigation}) {
  const userReference = database().ref('users');
  let [groupMembers, setGroupMembers] = useState([]);
  let [adhocUsers, setAdhocUsers] = useState([]);
  let [users, setUsers] = useState([]);

  const handleClick = () => {
    navigation.navigate('CreateGroupForm');
  };
  const goBack = () => {
    navigation.goBack();
  };
  const [searchInput, setSearchInput] = useState('');

  const getUsers =  () => {
    userReference
    .on('value', snapshot => {
      const usersList = snapshot.val();
      setUsers(users = Object.values(usersList));
      setAdhocUsers(adhocUsers = Object.values(usersList));
    });

  };

  const createGroup = () => {

  };

  const addMember = (index) => {
    const newAdhocUsers = [...adhocUsers];
      if (newAdhocUsers[index].clicked) {
          newAdhocUsers[index].clicked = false;
         const currentAddedMembers = adhocUsers.filter((item,ItemIndex)=>{
          console.log(index, ItemIndex);
            // return index !== ItemIndex;
            return item.clicked === true
         });
         setGroupMembers(groupMembers = currentAddedMembers);
         console.log('false',groupMembers);
          setAdhocUsers(newAdhocUsers);
          return ;
      } else {
        newAdhocUsers[index].clicked = true;
        const currentAddedMembers = adhocUsers.filter((item,ItemIndex)=>{
          console.log(index, ItemIndex);
            // return index !== ItemIndex;
            return item.clicked === true
         });
        console.log('true',groupMembers);
        // setGroupMembers( groupMembers = [...groupMembers, newAdhocUsers[index]]);
        setGroupMembers( groupMembers = [...groupMembers, currentAddedMembers]);

        setAdhocUsers(newAdhocUsers);
        return; 
      }
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
          <Text style={styles.searchText}>Group Members Added: {groupMembers.length}</Text>
          {/* <Text style={styles.searchText}>Hold and drag to reorder</Text> */}
        </View>
            <FlatList
             data={adhocUsers}
             contentContainerStyle={styles.mainGroup}
            numColumns={4}
            key={'#'}
             renderItem={({item, index})=> {
            return  (
              <TouchableOpacity  activeOpacity={0.8} onPress={() => addMember(index)} style={styles.individualUser}>
                <View style={styles.member}>
                 {
                  item.clicked === true &&  <Checkmark style={{marginLeft:50}} />
                 }
                  <UserImage />
                </View>
                <Text style={styles.memberNameText}>
                {item.first_name} {item.last_name}
                 </Text>
                <Text style={styles.adminNameText}>
                  {item.role}
                  </Text>
              </TouchableOpacity>
            );
               }  }
             keyExtractor={(user,index) => user}
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
