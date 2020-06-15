import React, { Component} from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH, em} from '../common/constants';
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
                  <TouchableOpacity style={[styles.ActionButton, {height: 70*em}]} onPress={()=>Actions.myaccount()}>
                    <View style={styles.ButtonWrapper}>
                        <View style={[styles.circleIconOverlay, {backgroundColor:"#e9f9fd"}]}>
                            <User width={14*em} height={14*em} />
                        </View>

                        <Text style={styles.contentTitle}>Mon compte</Text>

                        <ArrowSmall width={14*em} height={14*em} />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.ActionButton, {height: 90*em, marginTop:20*em}]} onPress={()=>this.setState({isNotificationChecked:!this.state.isNotificationChecked})}>
                    
                    <View style={styles.ButtonWrapper}>
                        <View style={[styles.circleIconOverlay, {backgroundColor:"#f1eeff"}]}>
                            <Notification width={14*em} height={14*em} />
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
    left:20*em,
    top:20*em
  },

  contentContainer: {
    flexDirection: "column", 
    marginTop: 90*em, 
    paddingLeft: 20*em,
    paddingRight:20*em
  },

  titleText:{
    fontSize: 24*em,  
    color:"#251b4d", 
    fontFamily:"Merriweather-Black"
  },
  
  ActionButton: {
    overflow: 'hidden',
    borderRadius: 18*em,
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

  ChoiceWrapper:{
    flex: 1, 
    flexDirection: "column", 
    marginTop: 18*em
  },

  ButtonWrapper:{
    flexDirection:"row", 
    justifyContent:"center", 
    alignItems:"center", 
    paddingLeft:15*em,
    paddingRight:15*em,
  },

  contentTitle:{
    flex:1, 
    color:"#251b4d", 
    fontSize: 14*em, 
    paddingLeft: 15*em, 
    paddingRight: 15*em,
    fontFamily:"OpenSans-SemiBold"
  },

  contentDesc:{
    marginLeft: -30*em,
    color:"#ada9bc", 
    fontSize: 12*em, 
    fontFamily:"OpenSans-Regular",
  },

  circleIconOverlay: {
    width: 34*em,
    height: 34*em,
    borderRadius: 17*em,
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default Settings;