import {View, StatusBar, SafeAreaView, Text, Image} from 'react-native';
import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import Card from '../../../components/card';
import CustomButton from '../../../components/customButton';

export default function GroupDetails({navigation}) {
  const handleClick = () => {
    navigation.navigate('Trip');
  };
  const goBack = () => {
    navigation.navigate('Dashboard');
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
        <Text style={styles.headerText}>Payout</Text>
      </View>
      <Text style={styles.searchText}>Book your trip now</Text>

      <Card>
        <View style={styles.cardPadding}>
          <Text style={styles.bigText}>Book your trip</Text>
          <Text style={styles.noColorText}>Available balance £2,500</Text>
          <Text style={styles.bigText2}>£1,200</Text>
          <Image source={require('../../../assets/images/metric.png')} />

          {/* Choose Trip Button Section */}
          <View style={styles.button}>
            <CustomButton text="Choose Trip" onPress={handleClick} />
          </View>
        </View>
      </Card>
    </SafeAreaView>
  );
}
