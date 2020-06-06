import React, { Component} from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import MyTextInput from '../components/MyTextInput';

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
    left:25,
    top:25
  },

  contentContainer: {
    flexDirection: "column", 
    marginTop: 120, 
    paddingLeft:25, 
    paddingRight: 25
  },

  tinaLogo:{
    width: 110, 
    height:118, 
    marginBottom: 20
  },

  contentWrapper:{
    flexDirection:"column",
    paddingTop: 20,
  },

  titleText:{
    fontSize: 32,  
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
    fontSize: 15, 
    marginTop: 15, 
    color:"#928da6", 
    fontFamily:"OpenSans-Regular"
  },
  
  ActionButton: {
    overflow: 'hidden',
    borderRadius: 26,
    height: 70, 
    alignItems: 'center',
    backgroundColor: '#28c7ee',
    justifyContent: 'center',
    marginTop: 150
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

export default MyName;