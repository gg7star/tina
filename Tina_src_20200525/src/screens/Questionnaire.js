import React, { Component, useState } from 'react';
import { View, Text, Dimensions, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import RectangleImage from '../components/RectangleImage';
import Ordinateur from '../components/svgicons/Ordinateur';
import Periferique from '../components/svgicons/Periferique';
import Astuce from '../components/svgicons/Astuce';
import Logiciel from '../components/svgicons/Logiciel';
import Internet from '../components/svgicons/Internet';
import { BlurView } from "@react-native-community/blur";
import MenuContent from '../components/MenuContent';

class Questionnaire extends Component {
  constructor(props){
    super(props)
    
  }

  render(){
    return <View>
      
    </View>
  }
}

var {height, width} = Dimensions.get('window');
const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: '#f6f5fa',
    flexDirection: 'column',
  },

  headerContainer: {
    flex: 1,
    width: width,
    height: height
  },

  helloLogo :  {
    width: 160,
    height: 186,
  }, 

  mainBtn: {
    flex: 1,
    marginTop: 10, 
    marginBottom:10,
    overflow: 'hidden',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'column'
  },

  circleOverlay: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  menuText: {
    color: "#000", 
    fontSize: 16
  },

  menuBackgroundWrapper: {
    flexDirection:"row", 
    flex: 1, 
    justifyContent:"center", 
    paddingTop: 30, 
    paddingLeft: 30, 
    paddingRight:30, 
    paddingBottom:10
  },

  tinaLogoWrapper: {
    marginTop: -20, 
    flexDirection: 'row', 
    justifyContent:'center', 
    alignItems:'flex-end'
  },

  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }, 

  menuContentWrapper: {
    flexDirection:'column', 
    marginTop: 25, 
    marginRight: 25, 
    alignItems:'flex-end'
  }
}
export default Questionnaire;