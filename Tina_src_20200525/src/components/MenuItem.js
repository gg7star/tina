import React from 'react'
import { View, TouchableOpacity, TouchableHighlight, Text } from 'react-native'
import Burger from './svgicons/Burger';
import Close from './svgicons/Close';

const styles = {
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

export default MenuItem = ({image, onPress}) => (
    <View>
      <TouchableOpacity style={styles.menuBtn} onPress={onPress} elevation={2}>
          <Burger />
      </TouchableOpacity>
    </View>
)