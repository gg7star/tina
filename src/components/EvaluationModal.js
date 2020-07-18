import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
import { BlurView } from "@react-native-community/blur";
import RatingStars from './RatingStars';
import {WIDTH, em} from '../common/constants';

var {height, width} = Dimensions.get('window');

export default ElevationModal = ({isModalVisible, onPressSend, onPressSkip}) => (
  <View style={styles.absolute}>
    
    <BlurView
          style={styles.absolute}
          blurType="dark"
          blurAmount={10}
          reducedTransparencyFallbackColor="black"
        />

    <View style={styles.absolute}>
        <Modal isVisible={isModalVisible} 
            backdropOpacity={0} 
            animationIn={"slideInUp"}
            style={{flex:1, justifyContent:'flex-end', alignItems:'center'}}>

            <View style={styles.modalWrapper}>
              <Image source={require('../Assets/tina_logo_3.png')} style={styles.tinaLogo} resizeMode={"center"}/>

              <View style={{backgroundColor:"#fff", borderRadius:20*em, padding:38*em, marginTop:-30*em, zIndex:-1}}>
                <Text style={styles.infoTextTitle}>Je suis ravie de vous avoir dépanné!</Text>

                <Text style={styles.infoTextContent}>Notre réponse a été :</Text>

                <RatingStars rating={4} />

                <Text style={styles.relevantText}>Pertinente</Text>
              </View>

              <View style={styles.ActionWrapper}>
                <TouchableOpacity style={styles.ActionButtonBlue} onPress={onPressSend}>
                  <Text style={styles.ActionWhiteText}>Envoyer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ActionButtonNoBg} onPress={onPressSkip}>
                  <Text style={StyleSheet.flatten([styles.ActionWhiteText, {padding:20*em}])}>Passer</Text>
                </TouchableOpacity>
              </View>
            </View>
        </Modal>
    </View>
  </View>    
  
)

const styles = {
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0, 
  }, 

  modalWrapper:{
    width: WIDTH - 40*em,
    flexDirection: "column", 
    justifyContent:'center', 
    alignItems: 'center'
  },

  tinaLogo:{
    width: 130*em,
    height: 130*em
  },

  infoTextTitle: {
    color:"#251b4d", 
    fontSize: 18*em, 
    textAlign:"center",
    fontFamily:"Merriweather-Black"
  },

  infoTextContent: {
    color:"#928da6", 
    textAlign: "center", 
    fontSize: 12*em, 
    paddingLeft:50*em, 
    paddingRight:50*em, 
    marginTop: 20*em,
    fontFamily: "OpenSans-Regular"
  },

  relevantText: {
    color:"#f7d100", 
    textAlign: "center", 
    fontSize: 13*em,
    fontFamily: "OpenSans-Bold"
  },

  ActionButtonBlue: {
    overflow: 'hidden',
    borderRadius: 18*em,
    alignItems: 'center',
    backgroundColor: '#28c7ee',
    height: 50*em,
    justifyContent: 'center',
    marginLeft:20*em, 
    marginRight:20*em,
    fontFamily: "OpenSans-Regular"
  },

  ActionWrapper:{
    width:WIDTH, 
    paddingTop: 20*em, 
    justifyContent:"center"
  },

  ActionButtonNoBg: {
    justifyContent:"center", alignSelf:"center"
  },

  ActionWhiteText:{
    color:"#fff", 
    fontSize: 14*em,
    fontFamily: "OpenSans-Regular"
  },
}