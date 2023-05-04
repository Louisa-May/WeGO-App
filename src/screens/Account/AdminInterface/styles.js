/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    backgroundColor: colors.white,
    // position: 'relative',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign:'center',
    width: '100%',
    paddingHorizontal: 10,
    // backgroundColor:'red',
    height:200,
    marginTop:-100
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
    fontSize: 22,
  },
  tripCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 10,
    paddingTop: 5,
    borderRadius: 15,
    backgroundColor:colors.grey,
    marginTop:20,
    height:70
  },
  tripInnerRow: {
    width: '80%',
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'


  },
  tripText: {
    justifyContent: 'flex-start',
    width: '80%',
    color: colors.black,
    fontSize: 20,
    fontWeight: 'semiBold',
    // paddingTop: 5,
  },
  tripImageCover: {
    marginTop: 15,
  },
  chevron: {
    marginTop: 20,
  },
  mediumText: {
    color: colors.black,
    fontSize: 22,
    fontWeight: 'semiBold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
    width: '100%',
  },
});
