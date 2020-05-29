import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
import MenuBtn from './MenuBtn'
import { BlurView } from "@react-native-community/blur";
import Review from './svgicons/Review';
import RatingStars from './RatingStars';
import {WIDTH} from '../common/constants';

var {height, width} = Dimensions.get('window');

export default ElevationModal = ({isModalVisible, onPress}) => (
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
            style={{flex:1, justifyContent:'flex-end'}}>

            <View style={styles.modalWrapper}>
              <Image source={require('../Assets/tina_logo_3.png')} style={styles.tinaLogo} resizeMode={"center"}/>

              <View style={{backgroundColor:"#fff", borderRadius:25, padding:50, marginTop:-40, zIndex:-1}}>
                <Text style={styles.infoTextTitle}>Je suis ravie de vous avoir depanne!</Text>

                <Text style={styles.infoTextContent}>Notre reponse a ete :</Text>

                <RatingStars rating={4} />

                <Text style={styles.relevantText}>Pertinente</Text>
              </View>

              <View style={styles.ActionWrapper}>
                <TouchableOpacity style={styles.ActionButtonBlue} onPress={onPress}>
                  <Text style={styles.ActionWhiteText}>Envoyer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ActionButtonNoBg} onPress={onPress}>
                  <Text style={StyleSheet.flatten([styles.ActionWhiteText, {padding:30}])}>Passer</Text>
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
    flexDirection: "column", 
    justifyContent:'center', 
    alignItems: 'center'
  },

  tinaLogo:{
    width: 200,
    height: 200
  },

  infoTextTitle: {
    color:"#251b4d", 
    fontSize: 25, 
    fontWeight:"bold",
    textAlign:"center"
  },

  infoTextContent: {
    color:"#928da6", 
    textAlign: "center", 
    fontSize: 20, 
    paddingLeft:80, 
    paddingRight:80, 
    marginTop: 30
  },

  relevantText: {
    color:"#f7d100", 
    textAlign: "center", 
    fontSize: 20,
    fontWeight: "bold"
  },

  ActionButtonBlue: {
    overflow: 'hidden',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#28c7ee',
    height: 65,
    justifyContent: 'center',
    marginLeft:30, 
    marginRight:30,
  },

  ActionWrapper:{
    width:WIDTH, 
    paddingTop: 25, 
    justifyContent:"center"
  },

  ActionButtonNoBg: {
    justifyContent:"center", alignSelf:"center"
  },

  ActionWhiteText:{
    color:"#fff", 
    fontSize: 20
  },
}