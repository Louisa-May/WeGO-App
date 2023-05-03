/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height:'100%',
    backgroundColor: colors.white,
    position: 'relative',
    // paddingHorizontal:16
    paddingVertical:20,
    // backgroundColor:'red'
  },
  mainGroup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    // flex: 1,
    // flexWrap: 'wrap',
  },
  descriptionText:{
    borderColor:'grey',
    borderWidth:0.1,
    paddingVertical:10,
    paddingHorizontal:10
  },
  flex:{
    width:'100%',
  },
  inputSelect:{
    height: 50,
    width: '100%',
    backgroundColor: colors.grey,
    // borderWidth: 1,
    marginTop: 8,
  },
  container2:{
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
  },
  headerSubText:{
    color: colors.black,
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom:10
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
  },
  bigText: {
    color: colors.black,
    fontSize: 26,
    fontWeight: 'bold',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: 320,
  },
  pushLeft: {
    left: 30,
    paddingVertical: 5,
  },
  pushRight: {
    right: -10,
    paddingVertical: 5,
  },
  pushRight2: {
    right: 20,
    paddingVertical: 5,
  },
  payoutAmount: {
    paddingVertical: 50,
  },
  cardInnerRow: {
    flexDirection: 'row',
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
  },
  cardPadding: {
    paddingVertical: 30,
  },
  scheduleCover: {
    marginHorizontal: 30,
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
  repaymentStatusRow: {
    paddingTop: 20,
  },
  repaymentSmallText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'semiBold',
    paddingTop: 50,
  },
  repaymentStausText: {
    color: colors.green,
    fontSize: 14,
    fontWeight: 'semiBold',
  },
});
