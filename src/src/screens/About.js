import React, { Component} from 'react';
import { View, Text, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH, HEIGHT} from '../common/constants';
import {Q_TYPES} from '../common/constants';
import HistoryItem from '../components/HistoryItem';
import FAQItem from '../components/FAQItem';
import ArrowSmall from '../components/svgicons/ArrowSmall'

const Item = ({title, hasDivider}) => (
  <View styles={{flexDirection:"column"}}>
    <TouchableOpacity>
      <View style={styles.mainWrapper}>            
        <Text style={styles.itemText}>{title}</Text>
        <ArrowSmall width={17} height={17} />
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
    left:25,
    top:25
  },
  
  listWrapper:{
    borderRadius:20, 
    marginTop: 20,
    backgroundColor:"#fff", 
    elevation:10
  },

  contentContainer: {
    flex: 1,
    flexDirection: "column", 
    marginTop: 120, 
    paddingLeft: 25,
    paddingRight:25
  },

  listDivider:{
    height:1.5, 
    marginLeft:20, 
    backgroundColor:"#eee"
  },

  titleText:{
    fontSize: 35,  
    color:"#251b4d", 
    fontFamily:"Merriweather-Black"
  },

  descText:{
    fontSize: 20,
    fontFamily:"OpenSans-SemiBold"
  },

  bottomTitle:{
    justifyContent:"center", 
    alignItems:"center",
    backgroundColor:"#fff", 
    flexDirection:"column", 
    paddingTop: 40, 
    paddingBottom:100
  },

  mainWrapper:{
    flexDirection:"row", 
    alignItem:"center", 
    justifyContent:"center", 
    alignItems:"center", 
    paddingLeft: 20, 
    paddingRight:20, 
    paddingTop:30, 
    paddingBottom:30
  },

  itemText:{
    marginLeft: 20, 
    fontSize: 18, 
    flex: 1, 
    color:"#251b4d", 
    fontFamily:"OpenSans-SemiBold"
  },
  
}

export default About;