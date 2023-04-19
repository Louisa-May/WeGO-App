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
  mainText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
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
  },
  memberNameText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  adminNameText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    color: colors.green,
  },
});
