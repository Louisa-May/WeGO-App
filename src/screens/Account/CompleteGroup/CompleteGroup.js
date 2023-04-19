import {View, StatusBar, SafeAreaView, Text} from 'react-native';
import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import Card from '../../../components/card';
import CustomButton from '../../../components/customButton';

export default function CompleteGroup({navigation}) {
  const handleClick = () => {
    navigation.navigate('Group');
  };
  const goBack = () => {
    navigation.navigate('CreateGroup');
  };

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
      <Text style={styles.searchText}>Complete group creation</Text>

      {/* Payout Method */}
      <Card>
        <Text style={styles.mainText}>Select how payout is determined</Text>

        <View>
          <CustomButton text="Random" onPress={''} />
        </View>
        <View>
          <CustomButton text="First come, first served" onPress={''} />
        </View>
        <View>
          <CustomButton text="Set by group admin" onPress={''} />
        </View>
      </Card>

      <View style={styles.rightChevron}>
        <EntypoIcon
          name="chevron-right"
          size={50}
          color={colors.green}
          onPress={handleClick}
        />
      </View>
    </SafeAreaView>
  );
}
