/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
  groupCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  groupText: {
    justifyContent: 'flex-start',
    width: '70%',
    color: colors.black,
    fontSize: 20,
    fontWeight: 'semiBold',
    paddingTop: 5,
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
