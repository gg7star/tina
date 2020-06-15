import React, { Component} from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {em} from '../common/constants';
import ArrowSmall from '../components/svgicons/ArrowSmall'

const Item = ({title, hasDivider}) => (
  <View styles={{flexDirection:"column"}}>
    <TouchableOpacity>
      <View style={styles.mainWrapper}>            
        <Text style={styles.itemText}>{title}</Text>
        <ArrowSmall width={14*em} height={14*em} />
      </View>
    </TouchableOpacity>

    {hasDivider? (<View style={styles.listDivider} />):null}
  </View>
)

class About extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={"#28c7ee"} />
          
          <View style={styles.menuWrapper}>
            <MenuBtn image={"back"} onPress={() => Actions.pop()}/>                  
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>À propos</Text>

            <View style={styles.listWrapper}>
              <Item title="À propos de Tina" hasDivider={true} />
              <Item title="Conditions générales d'utilisation" hasDivider={true} />
              <Item title="RGPD: autorisation de la conservation des données" hasDivider={false} />
              
            </View>
          </View>
        </View>
    )
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: '#f6f5fa',
    flexDirection: 'column',
  },

  headerContainer: {
    flex: 1
  },

  menuWrapper:{
    position:"absolute", 
    left:20*em,
    top:20*em
  },
  
  listWrapper:{
    borderRadius:18*em, 
    marginTop: 18*em,
    backgroundColor:"#fff", 
    elevation:10
  },

  contentContainer: {
    flex: 1,
    flexDirection: "column", 
    marginTop: 100*em, 
    paddingLeft: 20*em,
    paddingRight:20*em
  },

  listDivider:{
    height:1*em, 
    marginLeft:18*em, 
    backgroundColor:"#eee"
  },

  titleText:{
    fontSize: 24*em, 
    color:"#251b4d", 
    fontFamily:"Merriweather-Black"
  },

  mainWrapper:{
    flexDirection:"row", 
    alignItem:"center", 
    justifyContent:"center", 
    alignItems:"center", 
    paddingLeft: 18*em, 
    paddingRight:18*em, 
    paddingTop:23*em, 
    paddingBottom:23*em
  },

  itemText:{
    fontSize: 12*em, 
    flex: 1, 
    color:"#251b4d", 
    fontFamily:"OpenSans-SemiBold"
  },
  
}

export default About;