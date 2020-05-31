import React, { Component, useState } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import RectangleImage from '../components/RectangleImage';
import Back from '../components/svgicons/Back';
import LinearGradient from 'react-native-linear-gradient';
import Info from '../components/svgicons/Info';
import { Actions } from 'react-native-router-flux';
import {colors, WIDTH} from '../common/constants';
import Location from '../components/svgicons/Location';
import Phone from '../components/svgicons/Phone';
import Email from '../components/svgicons/Email';
import DepanneurItem from '../components/DepanneurItem';
import { FlatList } from 'react-native-gesture-handler';

const DATA = [
  {
    id: 1,
    image: require("../Assets/depanneur_fibrotech.png"),
    title: "Fibrotech",
    location: "500m, 11 rue de preside...",
    phone: "00 00 00 00 00",
    email: "fibrotech@mail.com"
  },
  {
    id: 2,
    image: require("../Assets/depanneur_igeek.png"),
    title: "igeek",
    location: "600m, 12 rue de preside...",
    phone: "00 00 00 00 01",
    email: "igeek@mail.com"
  },
  {
    id: 3,
    image: require("../Assets/depanneur_cultura.png"),
    title: "Cultura",
    location: "700m, 11 rue de preside...",
    phone: "00 00 00 00 03",
    email: "cultura@mail.com"
  },
  {
    id: 4,
    image: require("../Assets/depanneur_fnac.png"),
    title: "fnac",
    location: "1km, 11 rue de preside...",
    phone: "00 00 00 00 04",
    email: "fnac@mail.com"
  },
  
  {
    id: 5,
    image: require("../Assets/depanneur_fibrotech.png"),
    title: "Fibrotech",
    location: "500m, 11 rue de preside...",
    phone: "00 00 00 00 05",
    email: "fibrotech@mail.com"
  },
  {
    id: 6,
    image: require("../Assets/depanneur_igeek.png"),
    title: "igeek",
    location: "600m, 12 rue de preside...",
    phone: "00 00 00 00 06",
    email: "igeek@mail.com"
  },
  {
    id: 7,
    image: require("../Assets/depanneur_cultura.png"),
    title: "Cultura",
    location: "700m, 11 rue de preside...",
    phone: "00 00 00 00 07",
    email: "cultura@mail.com"
  },
  {
    id: 8,
    image: require("../Assets/depanneur_fnac.png"),
    title: "fnac",
    location: "1km, 11 rue de preside...",
    phone: "00 00 00 00 08",
    email: "fnac@mail.com"
  },
]

class Depanneurs extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={"#28c7ee"} />
          
          <View style={{position:"absolute", right:25, top:25 }}>
            <MenuBtn image={"close"} onPress={() => Actions.home()}/>                  
          </View>

          <View style={{flexDirection: "column", paddingLeft:20, paddingRight:20, paddingTop: 100, paddingBottom: 20}}>
            <Text style={{fontSize: 35,  color:"#251b4d", fontFamily:"Merriweather-Black"}}>Dépanneurs</Text>
            <Text style={{fontSize: 18, marginTop: 15, color:"#928da6", fontFamily:"OpenSans-Regular"}}>
              Si la localisation de nos partenaires ne correspond pas a votre localisation
              <Text style={{color:"#28c7ee", fontFamily:"OpenSans-Regular"}}> cliquez icipour modifier code postal</Text>
            </Text>
          </View>

          <View style={{flex: 1}}>
              
            <FlatList data={DATA}
              renderItem={({item}) => <DepanneurItem id={item.id} image={item.image} title={item.title} location={item.location} phone={item.phone} email={item.email} />}
              keyExtractor={item => item.id.toString()} />
            
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

  contentContainer: {
    flex:1,  
    marginTop: -150, 
    flexDirection: "column"
  },

  contentWrapper:{
    flex: 1, 
    flexDirection:"column", 
    marginTop:-100
  },

  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0, 
  }, 

  ButtonWrapper: {
    overflow: 'hidden',
    borderRadius: 18,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width:48,
    height: 48,
    justifyContent: 'center',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 15,
    position:"absolute", 
    left: WIDTH * 48 / 750, 
    top: WIDTH * 0.4 * 50 / 300
  },

  ActionButton: {
    overflow: 'hidden',
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding:25,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 20,
  },

  ActionButtionNoShadow: {
    overflow: 'hidden',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 65,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 0.5,
    marginLeft:30, 
    marginRight:30,
    zIndex:-1
  },

  infoWrapper:{
    flexDirection:"row", 
    justifyContent:'center',
    alignItems:'center', 
    marginBottom: 20
  },

  infoText:{
    fontSize: 16,
  },

  dunnoText:{
    color:"#908ea6", 
    fontSize: 22
  },

  answerWrapper:{
    paddingLeft: 30, 
    paddingRight:30, 
    paddingBottom: 30, 
    paddingTop: 20, 
    flexDirection:"row", 
    zIndex:-1
  },

  answerText:{
    fontSize: 22 
  },

  progressWrapper:{
    width: WIDTH, 
    height: 30, 
    backgroundColor:"#e1e0e5"
  },

  questionText:{
    paddingLeft: 80, 
    paddingRight: 80, 
    fontSize: 25, 
    color:"#251b4d", 
    textAlign: "center"
  }
}

export default Depanneurs;