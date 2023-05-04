/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height:'100%',
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
    width:'100%',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    height:400
  },
  form: {
    width:350,
  },
  flexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clikableTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    padding: 30,
  },
  clikableText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 'semiBold',
  },
  // Login Screen
  headerText: {
    color: colors.black,
    fontSize: 27,
    fontWeight: 'bold',
    padding: 10,
  },
  headerSubText:{
    color: colors.black,
    fontSize: 15,
    fontWeight: '400',
    padding: 10,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  footerText: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize:15
  },
  button: {
    width:'100%',
  }
});
