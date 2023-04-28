/* eslint-disable prettier/prettier */
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
    marginTop:20
  },
  headerText: {
    color: colors.black,
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 20,
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
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
    color:colors.black
  },
  bigText: {
    color: colors.black,
    fontSize: 26,
    fontWeight: 'bold',
  },
  bigTextCenter: {
    color: colors.black,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign:'center'
  },
  bigTextRight: {
    color: colors.black,
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft:85
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 10,
    width: 320,
  },
  pushLeft: {
    // left: 30,
    paddingVertical: 5,
    color:colors.black
  },
  pushRight: {
    right: -10,
    paddingVertical: 5,
    color:colors.black
  },
  pushRight2: {
    // right: 55,
    paddingVertical: 5,
    color:colors.black,
  },
  payoutAmount: {
    paddingVertical: 50,
    paddingHorizontal:20,
    shadowColor:'black',
    shadowOffset: { width: 20, height: 20},
    shadowOpacity:0.5,
    // shadowRadius:20,
    backgroundColor:colors.grey,
    borderRadius:20
  },
  cardInnerRow: {
    flexDirection: 'row',
    // alignItems:'center',
    // justifyContent:'center',
    width:'50%',
    textAlign:'left'
  },
  cardInnerRightRow: {
    flexDirection: 'row',
    // alignItems:'center',
    // justifyContent:'center',
    width:'50%',
    textAlign:'right'
  },
  walletBalanceView: {
    width:'100%',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  walletBalance: {
    width: 150,
  },
  summaryText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  summarySmallText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'semiBold',
    paddingVertical: 10,
    textAlign:'center',
    textTransform: 'capitalize'
  },
  cardPadding: {
    paddingVertical: 30,
    marginTop:10,
    width:'100%'
  },
  cardPadding1: {
    paddingVertical: 10,
    width:'100%',
  },
  mainGroup: {
    // height:400
  },
  scheduleCover: {
    width:'100%',
  },
  nohistoryText:{
    color: colors.black,
  },
  nohistoryView: {
    backgroundColor:colors.grey,
    width: '98%',
    paddingHorizontal: 20,
    paddingVertical:10
  },
  paymentToday: {
    backgroundColor: colors.grey,
    padding: 15,
  },
  repaymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  repaymentRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.grey,
    borderRadius:15,
    paddingHorizontal:20,
    marginTop:15,
    // paddingVertical:20
  },
  repaymentStatusRow: {
    paddingTop: 20,
    // width:'30%'
  },
  paymentScheduleRow: {
    paddingTop: 20,
    width:'30%'
  },
  repaymentSmallText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'semiBold',
    paddingTop: 50,
    textAlign:'center'
  },
  repaymentStausText: {
    color: colors.green,
    fontSize: 14,
    fontWeight: 'semiBold',
    textTransform: 'capitalize',
    textAlign:'center'
  },
});
