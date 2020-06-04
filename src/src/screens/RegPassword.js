import React, { Component} from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH} from '../common/constants';
import { TextInput } from 'react-native-gesture-handler';
import Position from '../components/svgicons/Position';
import CheckBox from '@react-native-community/checkbox';
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
              
                <View style={{flexDirection:"row", marginTop:100, marginBottom: 30}}>

                <TermsNormal width={25} height={25} />
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
    left:25,
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
    borderBottomColor:"#28c7ee", 
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
    fontFamily:"OpenSans-Regular"
  }
}

export default RegPassword;