/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {View, StatusBar, SafeAreaView, Text, Alert, ActivityIndicator, StyleSheet,Platform, Button, Image} from 'react-native';
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
import { useToast } from 'react-native-toast-notifications';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import { ScrollView } from 'react-native-gesture-handler';


export default function CreateTripForm({navigation}) {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState('');
  const [tripCost, setTripCost] = useState(0);
  const [TripName, setTripName] = useState('')
  const [description, setDescription] = useState('')
  const TripReference = database().ref('/Trips').push();
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [photo, setPhoto] = React.useState(null);
  const toast = useToast()

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      if (response) {
      let image = Object.values(response)
       let finalImage = image.flat()[0];
       console.log(finalImage);
        setPhoto(finalImage);
        console.log(photo);
      }
    });
  };

  const createFormData = (photo, body = {}) => {
    const data = new FormData();
  
    data.append('photo', {
      name: photo.fileName,
      type: photo.type,
      uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
    });
  
    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });
    console.log(data);
    return data;
  };

  const createTrip = () => {
    // setIsloading(true);
    if (tripCost  === '' ||  TripName === '' || photo === '' || date === ''  ) {
      Alert.alert('one or more of the input fields are empty!');
      setIsloading(false);
      return;
    }
   
   let TripData = {
    TripName: TripName,
    tripCost: tripCost,
    tripMembers:[],
    description: description,
    image: createFormData(photo),
    date: moment(date).format('MMMM Do, YYYY')
   };
   console.log(TripData.image);
   let newTrip = TripReference;
      TripData.id = newTrip.key;
      newTrip.set(TripData);
    setIsloading(false);
    toast.show(`${TripData.TripName} trip launched successfully!`, {
      type: 'success',
      placement: 'bottom',
      duration: 10000,
      offset: 30,
      animationType: 'zoom-in',
    });
    navigation.navigate('Trips');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width:'90%' }}>
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
            placeholder="Cost of Trip in Pounds"
            value={tripCost}
            keyboardType = "number-pad"
            onChangeText={(text) => setTripCost(text)}
          />

          <CustomInput
            placeholder="Description for the Trip"
            value={tripCost}
            multiline={true}
            numberOfLines={5}
            onChangeText={(text) => setDescription(text)}
          />
          
          <CustomButton text="Select Date of Trip" onPress={() => setOpen(true)} />
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
        <CustomButton text="Select Image for the trip" onPress={() => handleChoosePhoto()} />
        {photo && (
        <>
        <View style={{width:'100%', justifyContent:'center', alignItems:'center' }}>
          <Image
              source={{ uri: photo.uri }}
              style={{ width: 300, height: 300, borderRadius:10, resizeMode: 'contain' }}
            />
        </View>
        </>
      )}
         {isError  &&  (
            <Text style={{ textAlign: 'center', fontSize:15, color:'red', fontWeight:'500' }}> {isError}</Text>
         )}
          { !isLoading ? (
             <View style={styles.button}>
             <CustomButton  text="Create Trip" onPress={createTrip} />
           </View>
            ) : (
              <ActivityIndicator color="purple" animating={true} />
            )
        }
        </View>
      {/* </View> */}
      </ScrollView>
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