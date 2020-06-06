import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import Dash from 'react-native-dash';

export default ResultItem = ({id, title, answer}) => {
    var itemStyle = styles.ResultItem;
    // If first item, give it top margin because of shadow
    if (id == 1) itemStyle = StyleSheet.flatten([styles.ResultItem, {marginTop:20}]);
    
    return(
        <View style={itemStyle}>
            <View style={styles.TitleContainer}>
                <Text style={styles.numberCircle}>{id}</Text>
                <Text style={styles.titleText}>{title}</Text>
            </View>

            <View style={styles.AnswerContainer}>
                <Dash style={styles.verticalDash} dashColor={"#fff"} dashThickness={1} dashGap={8} dashLength={10}/>
                <Text style={styles.answerText}>{answer}</Text>
            </View>
        </View>
    )
}

const styles = {
    ResultItem: {
        flexDirection: "column", 
        paddingLeft: 30, 
        paddingRight: 30
      },
    TitleContainer:{
        flexDirection:"row", 
        alignItems:"center", 
        zIndex:-1
    },
    AnswerContainer:{
        flexDirection:"row", 
        alignItems:"center"
    },

    numberCircle:{
        backgroundColor:"#fff", 
        elevation:20, 
        width:26, 
        height:26, 
        borderRadius:13, 
        color:"#251b4d", 
        fontSize: 14, 
        fontFamily:"OpenSans-Bold", 
        textAlign:"center", 
        paddingTop:3
    },

    titleText:{
        paddingLeft: 20, 
        color:"#251b4d", 
        fontSize: 18, 
        fontFamily:"OpenSans-SemiBold"
    },

    verticalDash:{
        flexDirection:"column", 
        height:64, 
        paddingLeft:13       
    },

    answerText:{
        color:"#a099b0", 
        paddingLeft: 33, 
        fontFamily: "OpenSans-Regular", 
        fontSize: 16       
    }
}