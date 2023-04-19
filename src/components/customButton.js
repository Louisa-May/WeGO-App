import {Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;
