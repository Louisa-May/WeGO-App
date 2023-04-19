import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Card = props => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

export default Card;
