import React from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import NonVersion from './svgicons/NonVersion'
import Arrow from './svgicons/Arrow'
import User from './svgicons/User'
import Help from './svgicons/Help'
import History from './svgicons/History'
import Announceur from './svgicons/Announceur'
import Setting from './svgicons/Setting'
import RectangleImage from './RectangleImage'
import Modal from 'react-native-modal'
import MenuBtn from './MenuBtn'
import { BlurView } from "@react-native-community/blur";
import { Actions } from 'react-native-router-flux'
import Tina from './svgicons/Tina'
import LeftArrow from './svgicons/LeftArrow'
import { em } from '../common/constants'

var {height, width} = Dimensions.get('window');

export default MenuModal = ({isModalVisible, isLoggedIn, onPress, onPressHistory, onPressFAQ, onPressSignIn, onPressRegister, onPressBecomeAdvertiser, onPressSettings, onPressAbout, onPressLogout}) => (
  <View style={styles.absolute}>
      <BlurView
        style={styles.absolute}
        blurType="dark"
        blurAmount={15}
        reducedTransparencyFallbackColor="black"
      />

        {(!isLoggedIn)? 
        (<View style={styles.absolute}>
          <View style={{position: 'absolute', left: 10*em, top: 80*em}}>
            <RectangleImage image={"B1"} size={33*em} />
          </View>

          <View style={{position: 'absolute', left: 40*em, bottom: 100*em}}>
          <RectangleImage image={"B2"} size={25*em} />
          </View>

          <View style={{position: 'absolute', right: 30*em, bottom: 150*em}}>
            <RectangleImage image={"B3"} size={17*em} />
          </View>
        </View>):null}

        <View style={styles.absolute}>
            <Modal isVisible={isModalVisible} backdropOpacity={0} animationIn={"slideInDown"}styles={{flex:1, margin: 0}}>           
              <View style={{marginTop: 60*em, height: height, alignItems:"flex-end"}}>
                <MenuBtn image="close" onPress={onPress} />
                <View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>Version sans publicité</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPress} elevation={2}>
                      <NonVersion width={15*em} height={15*em}/>
                  </TouchableOpacity>
                </View>

                { isLoggedIn?
                (<View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>Historique de pannes</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPressHistory} elevation={2}>
                      <History width={15*em} height={15*em} />
                  </TouchableOpacity>
                </View>):null }

                { !isLoggedIn?
                (<View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>Se connecter</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPressSignIn} elevation={2}>
                      <Arrow width={15*em} height={15*em} />
                  </TouchableOpacity>
                </View>):null }

                { isLoggedIn?
                (<View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>Réglages</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPressSettings} elevation={2}>
                      <Setting width={15*em} height={15*em} />
                  </TouchableOpacity>
                </View>):null }

                { !isLoggedIn?
                (<View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>S'inscrire</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPressRegister} elevation={2}>
                      <User width={15*em} height={15*em} />
                  </TouchableOpacity>
                </View>):null }

                <View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>À Propos</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPressAbout} elevation={2}>
                      <Image source={require('../Assets/tina_logo.png')} style={{width:22, height: 22}} />
                  </TouchableOpacity>
                </View>

                <View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>FAQ</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPressFAQ} elevation={2}>
                      <Help width={15*em} height={15*em} />
                  </TouchableOpacity>
                </View>

                <View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>Devenir announceur</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPressBecomeAdvertiser} elevation={2}>
                      <Announceur width={15*em} height={15*em} />
                  </TouchableOpacity>
                </View>    

                { isLoggedIn?
                (<View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>Se déconnecter</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPressLogout} elevation={2}>
                      <LeftArrow width={15*em} height={15*em} color={"#928ea7"}/>
                  </TouchableOpacity>
                </View>):null }

              </View>
          </Modal>
        </View>

        { isLoggedIn?
        (<View style={[styles.absolute, styles.bottomWrapper]}>
            <Tina width={80} height={30} />
            <Text style={styles.versionText}>Version 1.0</Text>
        </View>):null }
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
  
  menuWrapper: {
    flexDirection: "row", 
    marginTop: 20*em, 
    alignItems:"center", 
    justifyContent:"flex-end"
  },

  menuText: {
    color: "#fff",
    fontSize: 14*em,
    fontFamily: "OpenSans-Regular"
  },

  menuBtn: {
    overflow: 'hidden',
    borderRadius: 15*em,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width:40*em,
    height:40*em,
    justifyContent: 'center',
    marginLeft: 15*em
  },

  bottomWrapper:{
    alignItems:'center', 
    justifyContent:'flex-end', 
    flexDirection:"column"
  },

  versionText:{
    color:"#fff", 
    fontSize:12*em, 
    fontFamily:"OpenSans-Regular", 
    marginTop: 15*em, 
    marginBottom: 30*em
  }
}
