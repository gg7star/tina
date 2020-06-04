import React, { Component} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH} from '../common/constants';
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

              <Text style={StyleSheet.flatten([styles.descText, {alignSelf:"center", fontSize: 20}])}>
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
    color:"#251b4d", 
    fontFamily:"OpenSans-Regular"
  },

  descText:{
    fontSize: 18, 
    marginTop: 15, 
    color:"#928da6", 
    fontFamily:"OpenSans-Regular"
  },

  linkText:{
    color:"#28c7ee", 
    fontFamily:"OpenSans-SemiBold"
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
    borderBottomColor:"#28c7ee", 
    marginBottom: 100,
    fontFamily:"OpenSans-Regular"
  },

  ActionText:{
    color:"#fff", 
    fontSize: 20, 
    fontFamily: "OpenSans-SemiBold"
  }
}

export default RegEmail;