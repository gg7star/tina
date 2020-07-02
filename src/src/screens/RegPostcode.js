import React, { Component} from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH, em} from '../common/constants';
import { TextInput } from 'react-native-gesture-handler';
import Position from '../components/svgicons/Position';
import MyTextInput from '../components/MyTextInput';
import { showRootToast } from '../common/utils';

class RegPostcode extends Component {
  constructor(props){
    super(props)

    this.state = {
      zipcode:"",
      address:""
    }
  }

  onPickedZipcode = (zipcode, address) => {
    this.setState({zipcode, address})
  }

  handleFocus = () => {
    Actions.searchpostcode({cb: this.onPickedZipcode})
  }

  handleContinue = () => {
    const {email, firstname, lastname} = this.props;
    const {zipcode} = this.state;

    if (zipcode == ""){
      showRootToast('Please enter your zipcode');
    }else{
      Actions.regpassword({email, firstname, lastname, zipcode})
    }
  }

  render(){
    const {zipcode, address} = this.state;
    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={"#28c7ee"} />
          
          <View style={styles.menuWrapper}>
            <MenuBtn image={"back"} onPress={() => Actions.pop()}/>                  
          </View>

          <View style={styles.contentContainer}>
            <Image source={require('../Assets/tina_logo.png')} style={styles.tinaLogo} resizeMode={'stretch'} />

            <Text style={styles.titleText}>Pour mieux vous aider</Text>

            <Text style={styles.contentText}>Quel est votre code postal?</Text>

            <View style={styles.contentWrapper}>
              <MyTextInput handleFocus={this.handleFocus} style={styles.TextInput} textContentType={"telephoneNumber"} placeholder={"Code postal"} value={zipcode} />
                {(zipcode != null && address != "") &&
                  <View style={styles.positionWrapper}>
                    <Position width={14*em} height={14*em} />
                    <Text style={styles.contentBlueText}>Position actuelle: {address}</Text>
                  </View>
                }
              <TouchableOpacity style={styles.ActionButton} onPress={this.handleContinue.bind(this)}>
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

  contentBlueText:{
    fontSize: 13*em, 
    fontFamily:"OpenSans-Regular",
    color:"#28c7ee",
    marginLeft: 10*em
  },

  positionWrapper:{
    flexDirection:"row",
    alignItems:"center",
    marginTop: 15*em, 
    marginBottom: 60*em
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
  }
}

export default RegPostcode;