import React from 'react'
import {TouchableOpacity, View, Text, Image} from 'react-native';
import Location from '../components/svgicons/Location';
import Phone from '../components/svgicons/Phone';
import Email from '../components/svgicons/Email';
import {colors, WIDTH, Q_TYPES} from '../common/constants';
import ArrowSmall from './svgicons/ArrowSmall';
import { Actions } from 'react-native-router-flux';

const renderIcons = (type) => {
    if (type == Q_TYPES.L){
      return (<Logiciel width={22} height={22} />)
    }else if (type == Q_TYPES.O){
      return (<Ordinateur width={22} height={22} />)
    }else if (type == Q_TYPES.P){
      return (<Periferique width={22} height={22} />)
    }else if (type == Q_TYPES.I){
      return (<Internet width={22} height={22} />)
    }else if (type == Q_TYPES.A){
      return (<Astuce width={22} height={22} />)
    }
}

export default HistoryItem = ({id, type, title, date}) => {
    return (<TouchableOpacity onPress={() => Actions.foundresult({isLoggedIn:true, title:title, dateString:date, qType:type})}>
        <View style={styles.mainWrapper}>
            <View style={[styles.circleBg, {backgroundColor:colors[type][3]}]}>
                {renderIcons(type)}
            </View>
            
            <Text style={styles.titleText}>{title}</Text>

            <Text style={styles.dateText}>{date}</Text>

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
        fontFamily:"OpenSans-Regular"
      },

      dateText:{
        fontSize: 14, 
        color:"#928da6", 
        fontFamily:"OpenSans-Regular",
         paddingLeft:20, paddingRight:20
      },
      
      circleBg:{
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
      }
}