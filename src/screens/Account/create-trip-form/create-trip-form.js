/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {View, StatusBar, SafeAreaView, Text, Alert, ActivityIndicator, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors} from '../../../constants/colors';
import Card from '../../../components/card';
import CustomSearch from '../../../components/customSearch';
import CustomButton from '../../../components/customButton';
import database from '@react-native-firebase/database';
import CustomInput from '../../../components/customInput';
import moment from 'moment';
import DatePicker from 'react-native-date-picker'





export default function CreateTripForm({navigation}) {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState('');
  const [tripCost, setTripCost] = useState(0);
  const [TripName, setTripName] = useState('')
  const TripReference = database().ref('/Trips').push();
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const createTrip = () => {
    setIsloading(true);
    if (tripCost  === '' ||  TripName === ''  ) {
      Alert.alert('one or more of the input fields are empty!');
      setIsloading(false);
      return;
    }
   
   let TripData = {
    TripName: TripName,
    tripCost: tripCost,
    tripMmebers:[],
    date: moment()
   };
   let newTrip = TripReference;
      TripData.id = newTrip.key;
      newTrip.set(TripData);
    Alert.alert('Trip created successfully!');
    setIsloading(false);
    navigation.navigate('Trips');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.flex}>
        <View style={styles.container2}>
          <Text style={styles.headerText}> Final Step!</Text>
          <Text style={styles.headerSubText}>Kindly fill tell us more about the Trip</Text>
        </View>
        <View style={styles.form}>
          <CustomInput
            placeholder="Trip Name"
            value={TripName}
            onChangeText={(text) => setTripName(text)}
          />
          <CustomInput
            placeholder="Contribution Amount in pounds"
            value={tripCost}
            keyboardType = 'number-pad'
            onChangeText={(text) => setTripCost(text)}
          />
          <Button title="Open" onPress={() => setOpen(true)} />
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
        </View>
         {isError  &&  (
            <Text style={{ textAlign: 'center', fontSize:15, color:'red', fontWeight:'500' }}> {isError}</Text>
         )}
          { !isLoading ? (
             <View style={styles.button}>
             <CustomButton  text="Craete Trip" onPress={createTrip} />
           </View>
            ) : (
              <ActivityIndicator color="purple" animating={true} />
            )
        }
        </View>
      {/* </View> */}
    </SafeAreaView>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderRadius: 8,
    color:colors.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0,
    borderRadius: 20,
    color:'#00214E',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});