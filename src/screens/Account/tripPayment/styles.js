/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colors.white,
    height:'100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
    marginTop:20,
   
  },
  headerText: {
    color: colors.black,
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 20,
  },
  searchText: {
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 20,
    padding: 20,
  },
  mainText: {
    justifyContent: 'flex-start',
    width: '100%',
    padding: 20,
    fontSize: 20,
    color: colors.black,
    marginBottom:-20,
    fontWeight:'bold'
  },
  tripCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '91%',
    paddingHorizontal: 10,
    paddingTop: 20,
    height:80,
    // backgroundColor:colors.grey,
    marginTop:20,
    borderRadius:20,
    borderWidth:0.5,


  },

  maintrip:{
  width:'50%',
  paddingBottom:30
},
  tripText: {
    justifyContent: 'flex-start',
    color: colors.black,
    fontSize: 15,
    fontWeight: 'semiBold',
    // paddingTop: 5,

    // backgroundColor:'red'
  },
  tripText1: {
    justifyContent: 'flex-start',
    color: 'gray',
    fontSize: 15,
    fontWeight: 'bold',
   
  },
  tripTextBold: {
    justifyContent: 'flex-start',
    width: '100%',
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    // paddingTop: 5,

    // backgroundColor:'red'
  },
  mediumText: {
    color: colors.black,
    fontSize: 22,
    fontWeight: 'semiBold',
  },
  plusIcon: {
    position: 'absolute',
    bottom:10,
    right:20
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
    width: '100%',
  },
});
