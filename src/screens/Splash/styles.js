import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.white,
    position: 'relative',
  },
  logoCover: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },
  flex: {
    flex: 1,
  },
  greenCircle: {
    width: 400,
    height: 400,
    backgroundColor: colors.green,
    borderRadius: 200,
    position: 'absolute',
    bottom: 96,
    right: -126,
  },
  orangeCircle: {
    width: 400,
    height: 400,
    backgroundColor: colors.orange,
    borderRadius: 200,
    position: 'absolute',
    bottom: -126,
    left: -126,
  },
  backgroundImage: {
    width: 600,
    height: 600,
    position: 'absolute',
    bottom: -56,
    right: -256,
  },
  border: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 26,
    right: -35,
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: colors.green,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.green,
  },

  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'semiBold',
  },
});
