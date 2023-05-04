/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    // flex: 1,
    backgroundColor: colors.white,
    position: 'relative',
    paddingTop:30,
    height:'100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
  },
  headerText: {
    color: colors.black,
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 20,
    marginTop:-5
  },
  searchText: {
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 20,
    padding: 20,
    fontSize:20,
    color:colors.black
  },
  smallText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'semiBold',
  },
  mediumText: {
    color: colors.black,
    fontSize: 22,
    fontWeight: 'semiBold',
  },
  noColorText: {
    fontSize: 14,
    fontWeight: 'semiBold',
    color: colors.black,
    textAlign:'center'
  },
  bigText: {
    color: colors.black,
    fontSize: 26,
    fontWeight: 'bold',
    padding: 10,
    textAlign:'center'
  },
  bigText2: {
    color: colors.black,
    fontSize: 26,
    fontWeight: 'bold',
    left: 120,
    padding: 15,
    paddingBottom: 40,
  },
  cardPadding: {
    paddingVertical: 30,
    backgroundColor: colors.deepGrey,
    width:'90%',
    borderRadius:20
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
    paddingVertical: 40,
    width:'100%'
  },
});
