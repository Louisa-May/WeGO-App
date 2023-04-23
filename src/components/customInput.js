/* eslint-disable prettier/prettier */
import {View, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import { colors } from '../constants/colors';

const CustomInput = ({value, setValue, placeholder, secureTextEntry, onChangeText, keyboardType}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.lightBlue}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        
      />
    </View>
  );
};

export default CustomInput;
