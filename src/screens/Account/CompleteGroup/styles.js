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
    marginTop: 5,
    marginLeft: 100,
    marginBottom: 150,
    padding: 15,
  },
  mainText: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 10,
    color: colors.black,
    fontWeight: 'bold',
    marginTop: 30,
  },
  rightChevron: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    marginTop: 150,
    backgroundColor: colors.deepGrey,
    left: 140,
    bottom: 50,
    borderRadius: 12,
  },
});
