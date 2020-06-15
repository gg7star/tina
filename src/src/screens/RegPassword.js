import React, { Component} from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH, em} from '../common/constants';
import TermsNormal from '../components/svgicons/TermsNormal';
import MyTextInput from '../components/MyTextInput';

class RegPassword extends Component {
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
            <MenuBtn image={"back"} onPress={() => Actions.pop()}/>                  
          </View>

          <View style={styles.contentContainer}>
            <Image source={require('../Assets/tina_logo.png')} style={styles.tinaLogo} resizeMode={'stretch'} />

            <Text style={styles.titleText}>Pour finir</Text>

            <Text style={styles.contentText}>Créez un mot de passe</Text>

            <View style={styles.contentWrapper}>
              <MyTextInput style={styles.TextInput} secureTextEntry={true} textContentType={"password"} autoFocus={true} placeholder={"Mot de passe"}/>
              
                <View style={{flexDirection:"row", marginTop:80*em, marginBottom: 20*em}}>

                <TermsNormal width={18*em} height={18*em} />
                  <Text style={styles.TermsText}>
                    En cochant cette case j'accepte les
                    <Text style={styles.linkText}> Conditions d'utilisation </Text>
                    et la
                    <Text style={styles.linkText}> Politique de confidentiallte</Text>
                    de Tina.
                  </Text>
                
                </View>

              <TouchableOpacity style={styles.ActionButton} onPress={this.handleLoginDone}>
                  <Text style={styles.ActionText}>Continuer</Text>
              </TouchableOpacity>
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
    left:20*em,
    top:20*em
  },

  contentContainer: {
    flexDirection: "column", 
    marginTop: 45*em, 
    alignItems:"center"
  },

  tinaLogo:{
    width: 80*em, 
    height:85*em, 
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
    color:"#251b4d", 
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
    borderBottomColor:"#28c7ee", 
    fontFamily:"OpenSans-Regular"
  },

  ActionText:{
    color:"#fff", 
    fontSize: 14*em, 
    fontFamily: "OpenSans-SemiBold"
  },

  TermsText:{
    paddingLeft:15*em,
    fontSize: 11*em,
    marginTop:-2*em, 
    color:"#928da6", 
    lineHeight: 18*em,
    fontFamily:"OpenSans-Regular"
  },

  linkText:{
    color:"#28c7ee", 
    fontFamily:"OpenSans-Regular"
  }
}

export default RegPassword;