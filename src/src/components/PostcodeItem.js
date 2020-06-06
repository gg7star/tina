import React from 'react'
import {TouchableOpacity, View, Text, Image} from 'react-native';
import ArrowSmall from './svgicons/ArrowSmall';
import { Actions } from 'react-native-router-flux';

export default PostcodeItem = ({id, title}) => {
    return (<TouchableOpacity onPress={() => Actions.pop()}>
        <View style={styles.mainWrapper}>            
            <Text style={styles.titleText}>{title}</Text>
        </View>
    </TouchableOpacity>)
}

const styles = {
      mainWrapper:{
        flexDirection:"row", 
        alignItem:"center", 
        justifyContent:"center", 
        alignItems:"center", 
        paddingLeft: 20, 
        paddingRight:20, 
        paddingTop:25, 
        paddingBottom:25
      },

      titleText:{
        fontSize: 20, 
        flex: 1, 
        color:"#928da6", 
        fontFamily:"OpenSans-Regular"
      },
}