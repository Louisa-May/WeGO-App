import {View, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;
