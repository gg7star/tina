import React from 'react'
import {View, Text} from 'react-native';
import {em} from '../common/constants'

export default FAQDetailItem = ({id, title, description}) => {
    return (
      <View style={{flexDirection:"column", paddingTop:id == 1? 90*em:0}}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descText}>
          {description}
        </Text>
      </View>)
}

const styles = {
  titleText:{
    fontSize: 24*em,  
    color:"#251b4d", 
    fontFamily:"Merriweather-Black"
  },

  descText:{
    color:"#a099b0",
    paddingTop: 15*em,
    paddingBottom: 40*em,
    fontFamily: "OpenSans-Regular", 
    fontSize: 14*em,
    lineHeight:21*em,
  },
}