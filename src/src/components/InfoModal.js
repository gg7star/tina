import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import Modal from 'react-native-modal'
import MenuBtn from './MenuBtn'
import { BlurView } from "@react-native-community/blur";

import {WIDTH, em} from '../common/constants'

export default InfoModal = ({isModalVisible, onPress}) => (
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
            style={{margin:0, flex:1, justifyContent:'flex-end'}}>

            <View style={styles.modalWrapper}>
              <Image source={require('../Assets/info_dlg_bg.png')} style={styles.infoBg} resizeMode={"center"}/>

              <View style={styles.contentWrapper}>
                  <Image source={require('../Assets/img_365_refer.png')} style={styles.infoThumb} resizeMode={"center"}/>
                  <Text style={styles.infoTextTitle}>Microsoft Office 365</Text>
                  <Text style={styles.infoTextContent}>Microsoft Office 365 est un service qui regroupe les applications courantes de bureautique, communication et collaboration en ligne.</Text>
              </View>

              <MenuBtn image={"close"} onPress={onPress}/>
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
    alignItems: 'center', 
    marginBottom:20*em
  },

  infoBg:{
    width: WIDTH - 40*em, 
    height: (WIDTH - 40*em) * 1.08, 
    marginBottom: 20*em
  },
  
  infoThumb:{
    width: 80*em, 
    height: 80*em
  },

  contentWrapper:{
    position:"absolute", 
    paddingBottom: 50*em, 
    flexDirection:"column", 
    justifyContent:"center", 
    alignItems:"center"
  },

  infoTextTitle: {
    color:"#251b4d", 
    fontSize: 18*em, 
    paddingTop:16*em,
    textAlign:"center",
    fontFamily:"Merriweather-Black"
  },

  infoTextContent: {
    color:"#928da6", 
    textAlign: "center", 
    fontSize: 13*em, 
    fontFamily: "OpenSans-Regular",
    paddingLeft:50*em, 
    paddingRight:50*em, 
    marginTop: 20*em
  }
}