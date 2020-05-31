import React from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import NonVersion from './svgicons/NonVersion'
import Arrow from './svgicons/Arrow'
import User from './svgicons/User'
import Help from './svgicons/Help'
import Announceur from './svgicons/Announceur'
import RectangleImage from './RectangleImage'
import Modal from 'react-native-modal'
import MenuBtn from './MenuBtn'
import { BlurView } from "@react-native-community/blur";

var {height, width} = Dimensions.get('window');

export default MenuModal = ({isModalVisible, onPress}) => (
  <View style={styles.absolute}>
      <BlurView
        style={styles.absolute}
        blurType="dark"
        blurAmount={15}
        reducedTransparencyFallbackColor="black"
      />

      <View style={styles.absolute}>
          <View style={{position: 'absolute', left: 20, top: 100}}>
            <RectangleImage image={"B1"} size={50} />
          </View>

          <View style={{position: 'absolute', left: 40, bottom: 200}}>
          <RectangleImage image={"B2"} size={40} />
          </View>

          <View style={{position: 'absolute', right: 30, bottom: 300}}>
            <RectangleImage image={"B3"} size={30} />
          </View>
        </View>

        <View style={styles.absolute}>
            <Modal isVisible={isModalVisible} backdropOpacity={0} animationIn={"slideInDown"}styles={{flex:1, margin: 0}}>           
              <View style={{marginTop: 80, height: height, alignItems:"flex-end"}}>
                <MenuBtn image="close" onPress={onPress} />
                <View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>Version sans publicité</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPress} elevation={2}>
                      <NonVersion />
                  </TouchableOpacity>
              </View>

                <View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>Se connecter</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPress} elevation={2}>
                      <Arrow />
                  </TouchableOpacity>
                </View>

                <View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>S'inscrire</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPress} elevation={2}>
                      <User />
                  </TouchableOpacity>
                </View>

                <View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>À Propos</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPress} elevation={2}>
                      <Image source={require('../Assets/tina_logo.png')} style={{width:22, height: 22}} />
                  </TouchableOpacity>
                </View>

                <View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>FAQ</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPress} elevation={2}>
                      <Help />
                  </TouchableOpacity>
                </View>

                <View style={styles.menuWrapper}>
                  <Text style={styles.menuText}>Devenir announceur</Text>
                  <TouchableOpacity style={styles.menuBtn} onPress={onPress} elevation={2}>
                      <Announceur />
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
  
  menuWrapper: {
    flexDirection: "row", 
    marginTop: 25, 
    alignItems:"center", 
    justifyContent:"flex-end"
  },

  menuText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "OpenSans-Regular"
  },

  menuBtn: {
    overflow: 'hidden',
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width:40,
    height: 40,
    justifyContent: 'center',
    marginLeft: 20
  },
}
