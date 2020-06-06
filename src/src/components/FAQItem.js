import React from 'react'
import {TouchableOpacity, View, Text, Image} from 'react-native';
import ArrowSmall from './svgicons/ArrowSmall';
import { Actions } from 'react-native-router-flux';

export default FAQItem = ({id, title}) => {
    return (<TouchableOpacity onPress={() => Actions.faqdetail()}>
        <View style={styles.mainWrapper}>            
            <Text style={styles.titleText}>{title}</Text>
            <ArrowSmall width={17} height={17} />
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
        marginLeft: 20, 
        fontSize: 18, 
        flex: 1, 
        color:"#251b4d", 
        fontFamily:"OpenSans-SemiBold"
      },
}