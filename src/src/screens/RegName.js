import React, { Component} from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, PermissionsAndroid } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH} from '../common/constants';
import { TextInput } from 'react-native-gesture-handler';
import MyTextInput from '../components/MyTextInput';

// const requestLocationPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'Autoriser "Tina" a acceder a votre position?',
//         message:
//           "Pour mieux vous aider, nous avons besoin d'utiliser la geolocalisation, ces donnees resteront strictement confidentielles.",
//         buttonNeutral: "Demande moi plus tard",
//         buttonNegative: "Annuler",
//         buttonPositive: "D'accord"
//       }
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log("You can use the location");
//     } else {
//       console.log("Location permission denied");
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };


class RegName extends Component {
  constructor(props){
    super(props)
  }

  // componentDidMount(){
  //   requestLocationPermission();
  // }

  render(){
    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={"#28c7ee"} />
          
          <View style={styles.menuWrapper}>
            <MenuBtn image={"back"} onPress={() => Actions.home()}/>                  
          </View>

          <View style={styles.contentContainer}>
            <Image source={require('../Assets/tina_logo.png')} style={styles.tinaLogo} resizeMode={'stretch'} />

            <Text style={styles.titleText}>Super</Text>

            <Text style={styles.contentText}>Quelle est votre nom?</Text>

            <View style={styles.contentWrapper}>
              <Text style={styles.descText}>Nom</Text>
              <MyTextInput style={styles.TextInput} autoFocus={true}/>

              <TouchableOpacity style={styles.ActionButton} onPress={() => Actions.regpostcode()}>
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
    marginBottom: 100,
    fontFamily:"OpenSans-Regular"
  },

  ActionText:{
    color:"#fff", 
    fontSize: 20, 
    fontFamily: "OpenSans-SemiBold"
  }
}

export default RegName;