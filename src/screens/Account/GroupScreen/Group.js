/* eslint-disable prettier/prettier */
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import {useEffect} from 'react';
import database from '@react-native-firebase/database';

export default function Group({navigation}) {
  const groupReference = database().ref('groups');
  let [groups, setGroups] = useState([]);
  const goBack = () => {
    navigation.goBack();
  };

  const createGroup = () => {
    navigation.navigate('CreateGroup');
  };

  // const groupDetails = () => {
  //   navigation.navigate('GroupDetails');
  // };
  const [searchInput, setSearchInput] = useState('');

  const getGroups = () => {
    groupReference.once('value', snapshot => {
      const groupList = snapshot.val();
      console.log(groupList);
      if (groupList) {
        const restructuredGroup = Object.values(groupList);
        setGroups((groups = Object.values(restructuredGroup)));
        console.log('groups', groups);
      } else {
        return;
      }
    });
  };

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{width: '100%', marginBottom: 100}}>
        <View style={styles.row}>
          {/* <EntypoIcon
          name="chevron-left"
          size={32}
          style={{marginTop:7}}
          color={colors.black}
          onPress={goBack}
        /> */}
          <Text style={styles.headerText}>Group</Text>
        </View>
        {/* <Text style={styles.searchText}>Search or select savings group</Text> */}
        {/* Search Bar */}
        {/* <CustomSearch
        placeholder="Search Group"
        value={searchInput}
        setValue={setSearchInput}
      /> */}
        <Text style={styles.mainText}>Available Groups</Text>
        {/* <View
          style={{
            width: '100%',
          }}> */}
        {groups.length > 0 ? (
          <FlatList
            data={groups}
            // contentContainerStyle={{marginBottom: 200}}
            contentContainerStyle={{
              width: '90%',
              paddingBottom: 40,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                // <Card >
                <TouchableOpacity
                  style={styles.groupCardRow}
                  onPress={() => {
                    navigation.navigate('GroupDetails', {item});
                  }}>
                  <Image
                    source={require('../../../assets/images/groupImage1.png')}
                    style={styles.groupImageCover}
                  />
                  <Text style={styles.groupText}>{item.groupName}</Text>
                  <EntypoIcon
                    name="chevron-right"
                    size={32}
                    color={colors.black}
                  />
                </TouchableOpacity>
                // </Card>
              );
            }}
          />
        ) : (
          <Text style={styles.mainText}> No created groups at the moment</Text>
        )}
        {/* </View> */}

        {/* <Card>
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
      </Card> */}
      </View>
      {/* Create Group */}
      <TouchableOpacity style={styles.plusIcon} onPress={createGroup}>
        <FeatherIcon name="plus-circle" size={45} color={colors.green} />
      </TouchableOpacity>
    </View>
  );
}
