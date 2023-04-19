import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.white,
    position: 'relative',
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
    paddingBottom: 10,
    paddingLeft: 20,
  },
  searchText: {
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 20,
    padding: 20,
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
    left: 105,
  },
  bigText: {
    color: colors.black,
    fontSize: 26,
    fontWeight: 'bold',
    left: 90,
    padding: 10,
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
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
});
