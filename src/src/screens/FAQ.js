import React, { Component} from 'react';
import { View, Text, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import MenuBtn from '../components/MenuBtn';
import { Actions } from 'react-native-router-flux';
import {WIDTH, HEIGHT} from '../common/constants';
import {Q_TYPES} from '../common/constants';
import HistoryItem from '../components/HistoryItem';
import FAQItem from '../components/FAQItem';

const DATA = [
  {
    id: 1,
    title: "Question 1"
  },
  {
    id: 2,
    title: "Question 2"
  },
  {
    id: 3,
    title: "Question 3"
  },
  {
    id: 4,
    title: "Question 4"
  },
  {
    id: 5,
    title: "Question 5"
  }
]

class FAQ extends Component {
  constructor(props){
    super(props)
  }

  renderDivider = () => (<View style={styles.listDivider} />)

  render(){
    return (
        <View style={styles.mainContainer}>
          <StatusBar barstyle="light-content" backgroundColor={"#28c7ee"} />
          
          <View style={styles.menuWrapper}>
            <MenuBtn image={"back"} onPress={() => Actions.pop()}/>                  
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>Foire aux questions</Text>

            <View style={styles.listWrapper}>
              <FlatList data={DATA}
                ItemSeparatorComponent={this.renderDivider}
                renderItem={({item}) => <FAQItem id={item.id} title={item.title} />}
                keyExtractor={item => item.id.toString()} />
            </View>

            <View style={styles.bottomTitle}>
              <Text style={[styles.descText, {color:"#251b4d"}]}>Vous n'avez pas trouvé votre réponse ?</Text>
              <TouchableOpacity><Text style={[styles.descText, {color:"#26c8ee", paddingTop:10}]}>Contacter notre service client ici</Text></TouchableOpacity>
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
    elevation:10, 
    flex: 1,
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
  }
}

export default FAQ;