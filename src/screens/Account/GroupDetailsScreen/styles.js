/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    width: '100%',
    backgroundColor: colors.white,
    // position: 'relative',
    height: '100%',
    // paddingHorizontal:10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
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
    color: colors.black,
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
    textAlign: 'center',
  },
  bigTextRight: {
    color: colors.black,
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 85,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    width: '100%',
  },
  cardRowText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
  pushLeft: {
    // left: 30,
    // paddingVertical: 5,
    color: colors.black,
  },
  pushRight: {
    right: 0,
    // paddingVertical: 5,
    color: colors.black,
  },
  pushRight2: {
    // right: 55,
    paddingVertical: 5,
    color: colors.black,
  },
  payoutAmount: {
    // paddingHorizontal:20,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {width: 20, height: 20},
    shadowOpacity: 0.5,
    // shadowRadius:20,
    borderRadius: 20,
    backgroundColor: colors.grey,
    padding: 10,
  },
  payoutAmountTrip: {
    // paddingHorizontal:20,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {width: 20, height: 20},
    shadowOpacity: 0.5,
    // shadowRadius:20,
    borderRadius: 20,
    backgroundColor: colors.white,
    // padding:20
  },
  cardInnerRow: {
    flexDirection: 'row',
    // alignItems:'center',
    // justifyContent:'center',
    // backgroundColor: 'red',
    width: '40%',
    textAlign: 'left',
  },
  cardInnerRightRow: {
    flexDirection: 'row',
    // alignItems:'center',
    // justifyContent:'center',
    // width: '90%',
    // backgroundColor: 'red',
    textAlign: 'right',
  },
  walletBalanceView: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  walletBalance: {
    width: 150,
    marginBottom: 30,
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
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  summarySmallTextLeft: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'semiBold',
    paddingVertical: 10,
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  cardPadding: {
    paddingVertical: 30,
    marginTop: 10,
    width: '100%',
  },
  cardPadding1: {
    paddingVertical: 10,
    width: '100%',
  },
  mainGroup: {
    // height:400
  },
  scheduleCover: {
    width: '100%',
  },
  nohistoryText: {
    color: colors.black,
  },
  nohistoryView: {
    backgroundColor: colors.grey,
    width: '98%',
    paddingHorizontal: 20,
    paddingVertical: 10,
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: colors.grey,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginTop: 15,
    // paddingVertical:20
  },
  repaymentRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.grey,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginTop: 15,
    // paddingVertical:20
  },
  repaymentStatusRow: {
    paddingTop: 20,
    // width:'30%'
  },
  repaymentStatusRow1: {
    paddingTop: 20,
    width: '30%',
  },
  paymentScheduleRow: {
    paddingTop: 20,
    width: '30%',
  },
  repaymentSmallText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'semiBold',
    paddingTop: 50,
    textAlign: 'center',
  },
  summarySmallTextRight: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'semiBold',
    paddingTop: 14,
    textAlign: 'right',
  },
  repaymentStausText: {
    color: colors.green,
    fontSize: 14,
    fontWeight: 'semiBold',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  repaymentStausTextLeft: {
    color: colors.green,
    fontSize: 14,
    fontWeight: 'semiBold',
    textTransform: 'capitalize',
    textAlign: 'left',
  },
  repaymentStausTextRight: {
    color: colors.green,
    fontSize: 14,
    fontWeight: 'semiBold',
    textTransform: 'capitalize',
    textAlign: 'right',
  },
});
