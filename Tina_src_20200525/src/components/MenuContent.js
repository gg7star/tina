import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import NonVersion from './svgicons/NonVersion'
import Arrow from './svgicons/Arrow'
import User from './svgicons/User'
import Help from './svgicons/Help'
import Announceur from './svgicons/Announceur'
import RectangleImage from './RectangleImage'

export default MenuContent = ({onPress}) => (
  <View>
    <View style={styles.menuWrapper}>
      <Text style={styles.menuText}>Version sans publicite</Text>
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
      <Text style={styles.menuText}>A propos</Text>
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
)

const styles = {
  menuWrapper: {
    flexDirection: "row", 
    marginTop: 25, 
    alignItems:"center", 
    justifyContent:"flex-end"
  },

  menuText: {
    color: "#fff",
    fontSize: 18,
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
