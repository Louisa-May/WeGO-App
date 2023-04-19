import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors';

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.deepGrey,
    width: 350,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    backgroundColor: colors.grey,
    width: 300,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    fontWeight: 'semiBold',
    color: colors.black,
    fontSize: 16,
  },
  card: {
    borderRadius: 15,
    elevation: 10,
    shadowOffset: {width: 0, height: 10},
    shadowColor: colors.deepGrey,
    shadowOpacity: 0.8,
    shadowradius: 15,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 15,
    width: '100%',
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
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
