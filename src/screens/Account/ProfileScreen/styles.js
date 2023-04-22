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
    height:'100%',
    paddingTop:20,

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
  },
  headerText: {
    color: colors.black,
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  bigText: {
    color: colors.black,
    fontSize: 26,
    fontWeight: 'bold',
    left: 90,
    padding: 10,
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
  profileImageCover: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 110,
    backgroundColor: 'transparent',
    borderRadius: 75,
    borderColor: colors.deepGrey,
    // borderWidth: 2,
  },
  profileImage: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '100%',
    // paddingHorizontal: 10,
    // paddingVertical: 10,
  },
  profileText: {
    justifyContent: 'flex-start',
    width: '70%',
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  chevron: {
    marginTop: 5,
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
