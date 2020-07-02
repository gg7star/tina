import React, { Component} from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, DrawerLayoutAndroidBase} from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH, em} from '../common/constants';
import MyTextInput from '../components/MyTextInput';
import Position from '../components/svgicons/Position';
import CheckBox from '@react-native-community/checkbox';
import TermsNormal from '../components/svgicons/TermsNormal';
import { validateEmail, showRootToast } from '../common/utils';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppActions, LoginActions } from '../actions'

class SignIn extends Component {
  constructor(props){
    super(props)

    this.state = {
      email:"",
      password:""
    }
  }

  handleLoginDone = () => {
    const {email, password} = this.state;
    const {loginActions, appActions} = this.props;
    const {isFetching} = this.props.auth;

    if (!validateEmail(email)){
      showRootToast('Please enter valid email address')
      return;
    }

    if (password == ""){
      showRootToast('Please enter your password');
      return;
    }

    const timerId = setTimeout(() => {
       if (isFetching){
         loginActions.loginFailed("DB: Timeout")
         appActions.setGlobalNotification({
          message: "Check the device network connection",
        })
       }
    }, 5000);
    loginActions.tryLogin({
      email,
      password
    })
  }

  handleGoSignup = () => {
    Actions.pop();
    Actions.regemail();
  }

  render(){
    const {email, password} = this.state;
    const {app, appActions} = this.props;

    if (app.globalNotification && app.globalNotification.message) {      
      const { message, type, duration } = app.globalNotification;
      showRootToast(message);
      appActions.setGlobalNotification({"message":""});
    }

    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={"#28c7ee"} />
          
          <View style={styles.menuWrapper}>
            <MenuBtn image={"close"} onPress={() => Actions.pop()}/>                  
          </View>

          <View style={styles.contentContainer}>
            <Image source={require('../Assets/tina_logo.png')} style={styles.tinaLogo} resizeMode={'stretch'} />

            <Text style={styles.titleText}>Connectez-vous</Text>

            <Text style={styles.contentText}>
              Pas de compte? 
              <Text style={styles.linkText} onPress={this.handleGoSignup}> Créer ici </Text>
            </Text>

            <View style={styles.contentWrapper}>
              <MyTextInput style={styles.TextInput}  textContentType={"emailAddress"} autoFocus={true} placeholder={"Email"} value={email} handleChange={(text)=>this.setState({email:text})}/>

              <View>
                <MyTextInput style={[styles.TextInput, {marginTop:25*em}]} secureTextEntry={true} textContentType={"password"} placeholder={"Mot de passe"} value={password} handleChange={(text)=>this.setState({password:text})}/>
                <TouchableOpacity style={{position:"absolute", right:0, top: 45*em}}><Text style={styles.linkText}>Oublié?</Text>
                  </TouchableOpacity>
              </View>

              <TouchableOpacity style={[styles.ActionButton, {marginTop:25*em, marginBottom:8*em}]} onPress={this.handleLoginDone}>
                  <Text style={styles.ActionText}>Continuer</Text>
              </TouchableOpacity>

              {/* <Text style={[styles.descText]}>
                Déjà un compte ? 
                <Text style={styles.linkText}> Se connecter ici</Text>
              </Text> */}
            </View>
          </View>
        </View>
    )
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: '#f6f5fa',
    flexDirection: 'column',
  },

  headerContainer: {
    flex: 1
  },

  menuWrapper:{
    position:"absolute", 
    right:20*em,
    top:20*em
  },

  contentContainer: {
    flexDirection: "column", 
    marginTop: 45*em, 
    alignItems:"center"
  },

  tinaLogo:{
    width: 80*em, 
    height: 85*em, 
    marginBottom: 15*em
  },

  contentWrapper:{
    width:WIDTH, 
    paddingLeft: 20*em, 
    paddingRight: 20*em, 
    paddingTop: 15*em
  },

  titleText:{
    fontSize: 22*em,  
    color:"#251b4d", 
    fontFamily:"Merriweather-Black"
  },

  contentText:{
    fontSize: 13*em, 
    marginTop: 8*em, 
    color:"#928da6", 
    fontFamily:"OpenSans-Regular"
  },

  descText:{
    alignSelf:"center",
    fontSize: 13*em, 
    marginTop: 13*em, 
    color:"#928da6", 
    fontFamily:"OpenSans-Regular"
  },
  
  ActionButton: {
    overflow: 'hidden',
    borderRadius: 18*em,
    height: 50*em, 
    alignItems: 'center',
    backgroundColor: '#918da6',
    justifyContent: 'center',
    marginTop: 18*em
  },

  TextInput:{
    height: 45*em, 
    fontSize: 13*em, 
    color:"#28c7ee", 
    borderBottomWidth:1*em, 
    fontFamily:"OpenSans-Regular"
  },

  ActionText:{
    color:"#fff", 
    fontSize: 14*em, 
    fontFamily: "OpenSans-SemiBold"
  },

  linkText:{
    color:"#28c7ee", 
    fontFamily:"OpenSans-SemiBold"
  }
}

const mapStateToProps = state => ({
  app: state.app || {},
  auth: state.auth || {}
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(AppActions, dispatch),
  loginActions: bindActionCreators(LoginActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn);