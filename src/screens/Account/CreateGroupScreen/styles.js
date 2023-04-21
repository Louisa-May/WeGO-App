/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height:'100%',
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop:50
    // paddingHorizontal: 10,
  },
  headerText: {
    color: colors.black,
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 20,
  },
  searchText: {
    // justifyContent: 'flex-start',
    // width: '100%',
    marginTop: 20,
    padding: 20,
    color:colors.black
  },
  mainText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
  },
  mainGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1,
  },
  member: {
    backgroundColor: colors.deepGrey,
    justifyContent: 'center',
    alignItems: 'center',
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    width:'90%'
  },
  memberNameText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    color: 'black',
    textAlign:'center'
  },
  adminNameText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    color: colors.green,
    textAlign:'center'
  },
  individualUser: {
    width:100,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
