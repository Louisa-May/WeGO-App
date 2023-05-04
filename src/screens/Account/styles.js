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
    paddingHorizontal:16
  },
  topView: {
    flexDirection: 'row',
    width: '100%',
  },
  // imageHello: {
  //   flexDirection: 'row',
  //   width: '100%',
  //   justifyContent:'space-between',
  // },
  tripCardRow: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // width: '70%',
    marginHorizontal:20,
    // backgroundColor:'red',
    paddingTop: 20,
    // height:80,
    // backgroundColor:colors.grey,
    marginTop:20,
    borderRadius:11,
    borderWidth:0.70,


  },
  userImageCover: {
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 54,
    backgroundColor: 'transparent',
    // borderRadius: 27,
    // borderColor: colors.deepGrey,
    // borderWidth: 2,
    // shadowRadius: 27,
    // shadowOpacity: 0.3,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // elevation: 3,
    marginVertical: 30,
    justifyContent:'flex-end',
    marginRight:20, 
  },
  userImage: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    borderRadius: 23,
  },
  welcomeTextCover: {
    marginVertical: 10,
  },
  WelometextDiv:{
    flexDirection:'row',
    borderWidth:0.1,
    borderRadius:30,
    // padding:20,
    paddingHorizontal:30,
    paddingVertical:10
  },
  cardCover:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    paddingBottom:20,
  },
  depositView: {
    width:'100%',
    height:100,
    borderRadius:10,
    borderWidth:0.2,
    borderColor:'grey',
    paddingHorizontal:20,
    paddingVertical:10,
    justifyContent:'space-between',
    flexDirection:'row',
    paddingTop:15
  },
  cardImage: {
    width:380,
    height: 200,

    // borderRadius: 23,
  },
  DepositIcon:{
    height:50,
    width:50
  },
  DepositSmallView:{

  },
  noColorText: {
    fontSize: 26,
    fontWeight: '900',
    color: colors.black,
    textAlign:'center'
  },
  bigText2: {
    color: colors.black,
    fontSize: 26,
    fontWeight: 'bold',
   textAlign:'center'
  },
  wallet_balance_view:{height:150,
    width:'100%',
    marginBottom:20,
    borderRadius:15,
    backgroundColor:colors.deepGrey,
    justifyContent:'center'
  },
  makeDepositView:{
    width:'100%',
    borderRadius:10,
    borderWidth:0.2,
    borderColor:'grey',
    paddingHorizontal:15,
    paddingVertical:20,
    marginTop:15,
    paddingBottom:20

  },
  inputSelect:{
    height: 50,
    width: '100%',
    backgroundColor: colors.grey,
    // borderWidth: 1,
    marginTop: 8,
  },
  DepositText:{
    fontSize:15,
    color:'grey',
    textAlign:'center'
  },
  smallText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'semiBold',
  },
  mediumText: {
    color: colors.black,
    fontSize: 15,
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
  maintrip:{
    width:'100%',
    paddingBottom:30,
    paddingHorizontal:30
  },
    tripText: {
      justifyContent: 'flex-start',
      color: colors.black,
      fontSize: 15,
      fontWeight: 'semiBold',
      // paddingTop: 5,
  
      // backgroundColor:'red'
    },
    tripText1: {
      justifyContent: 'flex-start',
      color: 'gray',
      fontSize: 15,
      fontWeight: 'bold',
     
    },
    tripTextBold: {
      justifyContent: 'flex-start',
      width: '100%',
      color: colors.black,
      fontSize: 20,
      fontWeight: 'bold',
      // paddingTop: 5,
  
      // backgroundColor:'red'
    },
});
