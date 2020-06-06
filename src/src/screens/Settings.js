import React, { Component} from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH} from '../common/constants';
import { TextInput } from 'react-native-gesture-handler';
import MyTextInput from '../components/MyTextInput';
import Notification from '../components/svgicons/Notification';
import User from '../components/svgicons/User';
import ArrowSmall from '../components/svgicons/ArrowSmall';
import Switch from '../components/Switch';

class Settings extends Component {
  constructor(props){
    super(props)

    this.state = {
      isNotificationChecked: true
    }
  }

  render(){
    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={"#28c7ee"} />
          
          <View style={styles.menuWrapper}>
            <MenuBtn image={"back"} onPress={() => Actions.pop()}/>                  
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>Réglages</Text>

            <View style={styles.ChoiceWrapper}>
                  <TouchableOpacity style={[styles.ActionButton, {height: 90}]} onPress={()=>Actions.myaccount()}>
                    <View style={styles.ButtonWrapper}>
                        <View style={[styles.circleIconOverlay, {backgroundColor:"#e9f9fd"}]}>
                            <User width={20} height={20} />
                        </View>

                        <Text style={styles.contentTitle}>Mon compte</Text>

                        <ArrowSmall width={17} height={17} />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.ActionButton, {height: 120, marginTop:30}]} onPress={()=>this.setState({isNotificationChecked:!this.state.isNotificationChecked})}>
                    
                    <View style={styles.ButtonWrapper}>
                        <View style={[styles.circleIconOverlay, {backgroundColor:"#f1eeff"}]}>
                            <Notification width={20} height={20} />
                        </View>

                        <View style={{flex:1, flexDirection:"row", justifyContent:"space-around"}}>
                          <Text style={styles.contentTitle}>Notifications</Text>
                          <Switch checked={this.state.isNotificationChecked} />
                        </View>
                    </View>

                    <Text style={styles.contentDesc}>Recevoir des notifications push</Text>
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
    marginTop: 120, 
    paddingLeft: 25,
    paddingRight:25
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
  
  ActionButton: {
    overflow: 'hidden',
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 10,
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
  },

  ChoiceWrapper:{
    flex: 1, 
    flexDirection: "column", 
    marginTop: 20
  },

  ButtonWrapper:{
    flexDirection:"row", 
    justifyContent:"center", 
    alignItems:"center", 
    paddingLeft:20,
    paddingRight:20,
  },

  contentTitle:{
    flex:1, 
    color:"#251b4d", 
    fontSize: 18, 
    paddingLeft: 20, 
    paddingRight: 15,
    fontFamily:"OpenSans-SemiBold"
  },

  contentDesc:{
    marginLeft: -95,
    color:"#ada9bc", 
    fontSize: 16, 
    fontFamily:"OpenSans-Regular",
  },

  circleOverlay: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#fff",
    elevation: 20
  },

  circleIconOverlay: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default Settings;