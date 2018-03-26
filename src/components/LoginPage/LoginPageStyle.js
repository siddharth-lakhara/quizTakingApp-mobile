import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  LoginPageMain: {
    flex: 1,
  },

  LoginCardTop: {
    backgroundColor: '#6BC5F0',
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  LoginCardTopText1: {
    fontSize: 50,
    fontWeight: 'bold',
  },

  LoginCardTopText2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 45,
  },

  LoginCardBottom: {
    // textAlign: 'left',
    backgroundColor: 'white',
    width: '100%',
    height: '50%',
    flex: 1,
    flexDirection: 'row',
    // marginBottom: 20,
    // height: 400,
    // display: 'flex',
  },

  loginContentsAligner: {
    height: '50%',
    width: '11%',
  },

  loginContentsItems: {
    flex: 1,
    // display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  userNameInput: {
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    width: '80%',
    height: 30,
  },

  // userNameInput: focus, LoginCardRightBtn: focus :{
  //     outline: 0,
  // },

  LoginCardBottomBtn: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 20,
    width: '70%',
    padding: 10,
    // fontSize: 30,
    marginLeft: -15,
  },

  LoginCardBottomText: {
    fontSize: 30,
  },

});
