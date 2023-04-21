/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    height:'100%',
    backgroundColor: colors.white,
    position: 'relative',
  },
  topView: {
    
    flexDirection: 'row',
    width: '90%',
    marginRight: 50,
  },
  imageHello: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
  },
  userImageCover: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 54,
    height: 54,
    backgroundColor: 'transparent',
    borderRadius: 27,
    borderColor: colors.deepGrey,
    borderWidth: 2,
    shadowRadius: 27,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 3,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  userImage: {
    resizeMode: 'contain',
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  welcomeTextCover: {
    marginVertical: 10,
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
  bigText: {
    color: colors.black,
    fontSize: 26,
    fontWeight: 'bold',
  },
  cardCoverRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  cardCover: {
    // width: '100%',
    // paddingVertical: 10,
    backgroundColor:'red'
  },
  graphImage: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
    width: '100%',
  },
});
