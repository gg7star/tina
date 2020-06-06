import React from 'react'
import {View, Text} from 'react-native';

export default FAQDetailItem = ({id, title, description}) => {
    return (
      <View style={{flexDirection:"column", paddingTop:id == 1? 110:0}}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descText}>
          {description}
        </Text>
      </View>)
}

const styles = {
  titleText:{
    fontSize: 35,  
    color:"#251b4d", 
    fontFamily:"Merriweather-Black"
  },

  descText:{
    color:"#a099b0",
    paddingTop: 20,
    paddingBottom: 50,
    fontFamily: "OpenSans-Regular", 
    fontSize: 18,
    lineHeight:30,
  },
}