/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors';

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.grey,
    width: '100%',
    borderColor:  colors.deepGrey,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    color:colors.black,
  },
  buttonContainer: {
    backgroundColor: colors.black,
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderColor:  colors.white,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'semiBold',
    color: colors.white,
    fontSize: 16,
  },
  card: {
    borderRadius: 15,
    // shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 10},
    elevation: 10,
    shadowColor: colors.deepGrey,
    // borderWidth:0.5,
    marginHorizontal: 4,
    marginVertical: 10,
    height:80,
    justifyContent:'center',
    alignItems:'center',
    alignContent:"center",
    width: '95%',
    backgroundColor:colors.grey
  },
  cardContent: {
    marginHorizontal: 18,
    // marginVertical: 10,
  },
  searchContainer: {
    backgroundColor: colors.deepGrey,
    width: 366,
    height: 40,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
