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
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../constants/colors';
import Card from '../../components/card';
export default function Dashboard({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top View */}
      <View style={styles.topView}>
        <View style={styles.imageHello}>
          <View style={styles.userImageCover}>
            <Image
              source={require('../../assets/images/userImage.png')}
              style={styles.userImage}
            />
          </View>
          <View style={styles.welcomeTextCover}>
            <Text style={styles.smallText}>Hello</Text>
            <Text style={styles.mediumText}>Gabriel</Text>
          </View>
        </View>
      </View>

      {/* 1st Card */}
      <Card>
        <View style={styles.cardCoverRow}>
          <FeatherIcon name="info" size={24} color={colors.black} />
          <Text style={styles.smallText}>View newly featured trips</Text>
          <FeatherIcon
            name="arrow-right-circle"
            size={26}
            color={colors.black}
          />
        </View>
      </Card>

      {/* 2nd Card */}
      <Card>
        <View style={styles.cardCover}>
          <Text style={styles.smallText}>Total Savings</Text>
          <View style={styles.row}>
            <Text style={styles.mediumText}>61,500</Text>
            <Text style={styles.smallText}>5,000/month</Text>
          </View>
        </View>
      </Card>

      {/* 3rd Card */}
      <Card>
        <View style={styles.cardCover}>
          <View style={styles.row}>
            <EntypoIcon name="wallet" size={34} color={colors.green} />
            <FeatherIcon name="plus-square" size={34} color={colors.green} />
          </View>
          <View style={styles.row}>
            <Text style={styles.smallText}>55,500</Text>
            <TouchableOpacity>
              <Text style={styles.smallText}>Pending</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={styles.smallText}>36,600</Text>
            <TouchableOpacity>
              <Text style={styles.smallText}>Trip booked</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={styles.smallText}>85,000</Text>
            <TouchableOpacity>
              <Text style={styles.smallText}>Completed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </SafeAreaView>
  );
}
