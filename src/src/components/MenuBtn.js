import React from 'react'
import { View, TouchableOpacity, TouchableHighlight, Text } from 'react-native'
import Burger from './svgicons/Burger';
import Close from './svgicons/Close';

const styles = {
  menuBtn: {
    overflow: 'hidden',
    borderRadius: 24,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width:60,
    height: 60,
    justifyContent: 'center',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 30
  },
}

export default MenuBtn = ({image, onPress}) => (
    <TouchableOpacity style={styles.menuBtn} onPress={onPress} elevation={2}>
        {image == "burger"? <Burger />:<Close />}
    </TouchableOpacity>
)