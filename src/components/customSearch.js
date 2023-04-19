import {View, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CustomSearch = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomSearch;
