import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.white,
  },
  logoCover: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },
  greenCircle: {
    width: 200,
    height: 200,
    backgroundColor: colors.green,
    borderRadius: 100,
    position: 'absolute',
    top: -50,
    right: -120,
  },
  orangeCircle: {
    width: 200,
    height: 200,
    backgroundColor: colors.orange,
    borderRadius: 100,
    position: 'absolute',
    bottom: -50,
    left: -120,
  },
  iconCover: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  iconText: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'semiBold',
    padding: 10,
  },
  flex: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: colors.black,
    fontSize: 27,
    fontWeight: 'bold',
    padding: 10,
  },
  signupButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 25,
  },
  footerText: {
    color: colors.orange,
    fontWeight: 'bold',
    marginTop: 50,
  },
  //   Congrats Screen
  congratsCover: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    paddingRight: 40,
  },
  congratsImage: {
    resizeMode: 'contain',
    width: 250,
    height: 250,
  },
  congratsTextCover: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  congratsText: {
    color: colors.black,
    fontWeight: 'semiBold',
    fontSize: 24,
  },
  getStartedButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 70,
  },
});
