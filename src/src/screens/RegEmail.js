import React, { Component} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH, em} from '../common/constants';
import { TextInput } from 'react-native-gesture-handler';
import MyTextInput from '../components/MyTextInput';

class RegEmail extends Component {
  constructor(props){
    super(props)
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

            <Text style={styles.titleText}>Bievenue!</Text>

            <Text style={styles.contentText}>Quel est votre email?</Text>

            <View style={styles.contentWrapper}>
              <Text style={styles.descText}>Adresse email</Text>
              <MyTextInput style={styles.TextInput} textContentType={"emailAddress"} autoFocus={true}/>

              <Text style={StyleSheet.flatten([styles.descText, {alignSelf:"center", fontSize: 13*em}])}>
                Déjà un compte? 
                <Text style={styles.linkText}> Se connecter ici</Text>
              </Text>

              <TouchableOpacity style={styles.ActionButton} onPress={() => Actions.regname()}>
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

  descText:{
    fontSize: 12*em, 
    marginTop: 10*em, 
    color:"#928da6", 
    fontFamily:"OpenSans-Regular"
  },

  linkText:{
    color:"#28c7ee", 
    fontFamily:"OpenSans-SemiBold"
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
    marginBottom: 60*em,
    fontFamily:"OpenSans-Regular"
  },

  ActionText:{
    color:"#fff", 
    fontSize: 14*em, 
    fontFamily: "OpenSans-SemiBold"
  }
}

export default RegEmail;