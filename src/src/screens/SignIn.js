import React, { Component} from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH} from '../common/constants';
import MyTextInput from '../components/MyTextInput';
import Position from '../components/svgicons/Position';
import CheckBox from '@react-native-community/checkbox';
import TermsNormal from '../components/svgicons/TermsNormal';

class SignIn extends Component {
  constructor(props){
    super(props)
  }

  handleLoginDone(){
    Actions.popTo('home');
    setTimeout(() => {
      Actions.refresh({isLoggedIn:true})
    })
  }

  render(){
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
              <Text style={styles.linkText} onPress={()=>Actions.regemail()}> Créer ici </Text>
            </Text>

            <View style={styles.contentWrapper}>
              <MyTextInput style={styles.TextInput}  textContentType={"emailAddress"} autoFocus={true} placeholder={"Email"}/>

              <View>
                <MyTextInput style={[styles.TextInput, {marginTop:30}]} secureTextEntry={true} textContentType={"password"} placeholder={"Mot de passe"}/>
                <TouchableOpacity style={{position:"absolute", right:0, top: 50}}><Text style={styles.linkText}>Oublié?</Text>
                  </TouchableOpacity>
              </View>

              <TouchableOpacity style={[styles.ActionButton, {marginTop:30, marginBottom:10}]} onPress={this.handleLoginDone}>
                  <Text style={styles.ActionText}>Continuer</Text>
              </TouchableOpacity>

              <Text style={[styles.descText, {alignSelf:"center", fontSize: 20}]}>
                Déjà un compte ? 
                <Text style={styles.linkText}> Se connecter ici</Text>
              </Text>
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
    right:25,
    top:25
  },

  contentContainer: {
    flexDirection: "column", 
    marginTop: 50, 
    alignItems:"center"
  },

  tinaLogo:{
    width: 110, 
    height:118, 
    marginBottom: 20
  },

  contentWrapper:{
    width:WIDTH, 
    paddingLeft: 30, 
    paddingRight: 30, 
    paddingTop: 20
  },

  titleText:{
    fontSize: 35,  
    color:"#251b4d", 
    fontFamily:"Merriweather-Black"
  },

  contentText:{
    fontSize: 18, 
    marginTop: 10, 
    color:"#928da6", 
    fontFamily:"OpenSans-Regular"
  },

  contentBlueText:{
    fontSize: 18, 
    fontFamily:"OpenSans-Regular",
    color:"#28c7ee",
    marginLeft: 15
  },

  positionWrapper:{
    flexDirection:"row",
    alignItems:"center",
    marginTop: 20, 
    marginBottom: 100
  },

  descText:{
    fontSize: 18, 
    marginTop: 15, 
    color:"#928da6", 
    fontFamily:"OpenSans-Regular"
  },
  
  ActionButton: {
    overflow: 'hidden',
    borderRadius: 26,
    height: 70, 
    alignItems: 'center',
    backgroundColor: '#918da6',
    justifyContent: 'center',
    marginTop: 20
  },

  TextInput:{
    height: 60, 
    fontSize: 20, 
    color:"#28c7ee", 
    borderBottomWidth:2, 
    fontFamily:"OpenSans-Regular"
  },

  ActionText:{
    color:"#fff", 
    fontSize: 20, 
    fontFamily: "OpenSans-SemiBold"
  },

  TermsText:{
    paddingLeft:20,
    fontSize: 15,
    marginTop:-3, 
    color:"#928da6", 
    lineHeight: 24,
    fontFamily:"OpenSans-Regular"
  },

  linkText:{
    color:"#28c7ee", 
    fontFamily:"OpenSans-SemiBold"
  }
}

export default SignIn;