import React, { Component} from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import MyTextInput from '../components/MyTextInput';
import {em} from '../common/constants'

class MyName extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: "Florin",
      lastName: "Bruno"
    }
  }

  // componentDidMount(){
  //   requestLocationPermission();
  // }

  render(){
    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={"#28c7ee"} />
          
          <View style={styles.menuWrapper}>
            <MenuBtn image={"close"} onPress={() => Actions.pop()}/>                  
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>Nom / Prénom</Text>

            <View style={styles.contentWrapper}>
              <Text style={styles.descText}>Nom</Text>
              <MyTextInput style={styles.TextInput} autoFocus={true} value={this.state.firstName} handleChange={(text)=>this.setState({firstName:text})}/>

              <Text style={[styles.descText, {marginTop:20}]}>Prénom</Text>
              <MyTextInput style={styles.TextInput} autoFocus={false} value={this.state.lastName} handleChange={(text)=>this.setState({lastName:text})}/>

              <TouchableOpacity style={styles.ActionButton} onPress={() => Actions.pop()}>
                  <Text style={styles.ActionText}>Valider</Text>
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
    paddingLeft:20*em, 
    paddingRight: 20*em
  },

  contentWrapper:{
    flexDirection:"column",
    paddingTop: 18*em,
  },

  titleText:{
    fontSize: 24*em,  
    color:"#251b4d", 
    fontFamily:"Merriweather-Black"
  },

  descText:{
    fontSize: 11*em, 
    marginTop: 11*em, 
    color:"#928da6", 
    fontFamily:"OpenSans-Regular"
  },
  
  ActionButton: {
    overflow: 'hidden',
    borderRadius: 18*em,
    height: 50*em, 
    alignItems: 'center',
    backgroundColor: '#28c7ee',
    justifyContent: 'center',
    marginTop: 100*em
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

export default MyName;