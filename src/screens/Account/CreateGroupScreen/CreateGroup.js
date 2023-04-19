import {View, StatusBar, SafeAreaView, Text, Image} from 'react-native';
import React, {useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import Card from '../../../components/card';
import CustomSearch from '../../../components/customSearch';
import CustomButton from '../../../components/customButton';

export default function CreateGroup({navigation}) {
  const handleClick = () => {
    navigation.navigate('CompleteGroup');
  };
  const goBack = () => {
    navigation.navigate('Group');
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
        <Text style={styles.headerText}>Create Group</Text>
      </View>
      <Text style={styles.searchText}>Edit Members</Text>
      {/* Search Bar */}
      <CustomSearch
        placeholder="Search Contacts"
        value={searchInput}
        setValue={setSearchInput}
      />

      {/* Members list */}
      <Card>
        <View style={styles.mainText}>
          <Text>Available slots: 3/12</Text>
          <Text>Hold and drag to reorder</Text>
        </View>
        <View style={styles.mainText}>
          <View>
            <View style={styles.member}>
              <Image source={require('../../../assets/images/userImage.png')} />
            </View>
            <Text style={styles.memberNameText}>You</Text>
            <Text style={styles.adminNameText}>Admin</Text>
          </View>
          <View>
            <View style={styles.member} />
            <Text style={styles.memberNameText}>Name</Text>
          </View>
          <View>
            <View style={styles.member} />
            <Text style={styles.memberNameText}>Name</Text>
          </View>
          <View>
            <View style={styles.member} />
            <Text style={styles.memberNameText}>Name</Text>
          </View>
        </View>
        <View style={styles.mainText}>
          <View>
            <View style={styles.member} />
            <Text style={styles.memberNameText}>Name</Text>
          </View>
          <View>
            <View style={styles.member} />
            <Text style={styles.memberNameText}>Name</Text>
          </View>
          <View>
            <View style={styles.member} />
            <Text style={styles.memberNameText}>Name</Text>
          </View>
          <View>
            <View style={styles.member} />
            <Text style={styles.memberNameText}>Name</Text>
          </View>
        </View>
        <View style={styles.mainText}>
          <View>
            <View style={styles.member} />
            <Text style={styles.memberNameText}>Name</Text>
          </View>
          <View>
            <View style={styles.member} />
            <Text style={styles.memberNameText}>Name</Text>
          </View>
          <View>
            <View style={styles.member} />
            <Text style={styles.memberNameText}>Name</Text>
          </View>
          <View>
            <View style={styles.member} />
            <Text style={styles.memberNameText}>Name</Text>
          </View>
        </View>

        {/* Continue Button Section */}
        <View style={styles.button}>
          <CustomButton text="Continue" onPress={handleClick} />
        </View>
      </Card>
    </SafeAreaView>
  );
}
