import React, { Component} from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH} from '../common/constants';
import { TextInput } from 'react-native-gesture-handler';
import Position from '../components/svgicons/Position';
import MyTextInput from '../components/MyTextInput';

class RegPostcode extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={"#28c7ee"} />
          
          <View style={styles.menuWrapper}>
            <MenuBtn image={"back"} onPress={() => Actions.home()}/>                  
          </View>

          <View style={styles.contentContainer}>
            <Image source={require('../Assets/tina_logo.png')} style={styles.tinaLogo} resizeMode={'stretch'} />

            <Text style={styles.titleText}>Pour mieux vous aider</Text>

            <Text style={styles.contentText}>Quel est votre code postal?</Text>

            <View style={styles.contentWrapper}>
              <MyTextInput style={styles.TextInput} textContentType={"telephoneNumber"} autoFocus={true} placeholder={"Code postal"}/>
              <View style={styles.positionWrapper}>
                <Position width={17} height={17} />
                <Text style={styles.contentBlueText}>Position actuelle : 33000 Bordeaux</Text>
              </View>

              <TouchableOpacity style={styles.ActionButton} onPress={() => Actions.regpassword()}>
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
  }
}

export default RegPostcode;