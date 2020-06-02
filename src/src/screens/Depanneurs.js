import React, { Component, useState } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
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
          
          <View style={styles.menuWrapper}>
            <MenuBtn image={"close"} onPress={() => Actions.home()}/>                  
          </View>

          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>Dépanneurs</Text>
            <Text style={styles.contentText}>
              Si la localisation de nos partenaires ne correspond pas a votre localisation
              <Text style={styles.linkText}> cliquez icipour modifier code postal</Text>
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
    flexDirection: "column", 
    paddingLeft:20, 
    paddingRight:20, 
    paddingTop: 100, 
    paddingBottom: 20
  },

  menuWrapper:{
    position:"absolute", 
    right:25,
    top:25
  },

  contentWrapper:{
    flex: 1, 
    flexDirection:"column", 
    marginTop:-100
  },

  titleText:{
    fontSize: 35,  
    color:"#251b4d", 
    fontFamily:"Merriweather-Black"
  },

  contentText:{
    fontSize: 18, 
    marginTop: 15, 
    color:"#928da6", 
    fontFamily:"OpenSans-Regular"
  },

  linkText:{
    color:"#28c7ee", 
    fontFamily:"OpenSans-Regular"
  }
}

export default Depanneurs;